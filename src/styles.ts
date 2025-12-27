import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    maxWidth: "540px",
    margin: "0 auto",
    padding: "24px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    fontFamily: "system-ui, sans-serif",
  },

  title: {
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: 600,
    color: "#222",
    textAlign: "center",
  },

  section: {
    marginBottom: "20px",
  },

  label: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#444",
  },

  textBlock: {
    backgroundColor: "#f7f7f9",
    border: "1px solid #e3e3e8",
    padding: "12px 14px",
    borderRadius: "8px",
    fontSize: "15px",
    lineHeight: 1.45,
    color: "#333",
    whiteSpace: "pre-wrap",
  },

  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #d0d0d4",
    fontSize: "15px",
    outline: "none",

    ":focus": {
      border: "1px solid #3273dc",
      boxShadow: "0 0 0 3px rgba(50, 115, 220, 0.2)",
    },
  },

  buttons: {
    display: "flex",
    gap: "10px",
  },

  primaryBtn: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "none",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
    backgroundColor: "#3273dc",
    color: "white",

    ":hover": {
      backgroundColor: "#255cc7",
    },
  },

  secondaryBtn: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "none",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
    backgroundColor: "#31eb91cc",

    ":hover": {
      backgroundColor: "#31eb91",
    },
  },

  retranslateBtn: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "none",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
    backgroundColor: "#ffe08a",

    ":hover": {
      backgroundColor: "#ffd66b",
    },
  },
  instructionRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  instructionInput: {
    flex: 1, // <-- makes input take most of the space
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #d0d0d4",
    fontSize: "15px",
    outline: "none",

    ":focus": {
      border: "1px solid #3273dc",
      boxShadow: "0 0 0 3px rgba(50, 115, 220, 0.2)",
    },
  },

  retranslateBtnInline: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "none",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
    backgroundColor: "#ffe08a",

    whiteSpace: "nowrap",
    flexShrink: 0, // <-- ensures the button does NOT shrink

    ":hover": {
      backgroundColor: "#ffd66b",
    },
  },
});
