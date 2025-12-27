import * as React from "react";
import { useEffect, useState } from "react";
import debounce from "debounce";
import { Icon } from "@iconify/react";

import { replaceText } from "../text";
import { useStyles } from "../../styles";
import { retranslate, translate } from "../../api";
import { copyToClipboard } from "../../utils/text";

interface AppProps {
  title: string;
}

interface TranslationHistoryItem {
  original: string;
  translation: string;
}

const App: React.FC<AppProps> = () => {
  const styles = useStyles();
  const [selectedText, setSelectedText] = useState<string>("");
  const [translation, setTranslation] = useState<string>("");
  const [instruction, setInstruction] = useState<string>("");
  const [isTranslating, setIsTranslating] = useState<boolean>(false)
  const [history, setHistory] = useState<TranslationHistoryItem[]>([]);

  const debounceTranslate = React.useMemo(
    () =>
      debounce(async (text: string) => {
        setIsTranslating(true)
        const result = await translate(text);
        setTranslation(result);
        setIsTranslating(false)
        setHistory((prev) => [
          { original: text, translation: result },
          ...prev,
        ].slice(0, 3));
      }, 500),
    []
  );

  const debounceRetranslate = React.useMemo(
    () =>
      debounce(async (text: string, instruction: string) => {
        setIsTranslating(true)
        const result = await retranslate(text, instruction);
        setTranslation(result);
        setIsTranslating(false)
      }, 500),
    []
  );

  useEffect(() => {
    const handler = () => {
      Word.run(async (context) => {
        const selection = context.document.getSelection();
        selection.load("text");
        await context.sync();

        if (!selection.text) return;

        debounceTranslate(selection.text);
        setSelectedText(selection.text);
      });
    };

    Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, handler);

    return () => {
      Office.context.document.removeHandlerAsync(Office.EventType.DocumentSelectionChanged, {
        handler: handler,
      });
    };
  }, []);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Translator</h1>

      <div className={styles.section}>
        <h3 className={styles.label}>Selected Text</h3>
        <p className={styles.textBlock}>{selectedText || "— nothing selected —"}</p>
      </div>

      <div className={styles.section}>
        <div style={{ display: "flex", gap: '8px', alignItems: "center" }}>
          <h3 className={styles.label}>Suggested Translation</h3>
          <Icon style={{ cursor: "pointer" }} icon="solar:copy-bold" onClick={() => copyToClipboard(translation)} />
          {isTranslating && <Icon icon="line-md:loading-alt-loop" />}
        </div>
        <p className={styles.textBlock}>{translation || "— no translation yet —"}</p>
      </div>

      <div className={styles.instructionRow}>
        <textarea
          className={styles.instructionInput}
          placeholder="Enter retranslation instruction"
          onChange={(e) => setInstruction(e.target.value)}
        />

        <div className={styles.buttons}>
          <button
            className={styles.retranslateBtnInline}
            onClick={async () => debounceRetranslate(selectedText, instruction)}
          >
            <Icon icon="mdi:refresh" width="20" height="20" style={{ marginLeft: "8px" }} />
          </button>
          <button className={styles.secondaryBtn} onClick={() => replaceText(translation)}>
            <Icon icon="mdi:check" width="20" height="20" style={{ marginLeft: "8px" }} />
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.label}>Recent Translations</h3>

        {history.length === 0 && (
          <p className={styles.textBlock}>— no history yet —</p>
        )}

        {history.map((item, index) => (
          <div key={index} style={{ marginBottom: "12px" }}>
            <p className={styles.textBlock} style={{ opacity: 0.7 }}>
              {item.original}
            </p>
            <p className={styles.textBlock}>
              {item.translation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
