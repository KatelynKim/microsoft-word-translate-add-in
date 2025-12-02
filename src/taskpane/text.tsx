export async function replaceText(newText: string) {
  try {
    await Word.run(async (context) => {
      const selection = context.document.getSelection();

      selection.insertText(newText, Word.InsertLocation.replace);

      await context.sync();
    });
  } catch (err) {
    console.log("Error replacing selection:", err);
  }
}

export async function insertText(text: string) {
  try {
    await Word.run(async (context) => {
      let body = context.document.body;
      body.insertParagraph(text, Word.InsertLocation.end);
      await context.sync();
    });
  } catch (error) {
    console.log("Error: " + error);
  }
}
