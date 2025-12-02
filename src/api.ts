const SERVER_URL = "";
export async function translate(text: string): Promise<string> {
  try {
    const response = await fetch(`${SERVER_URL}/api/translate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    return data.translation as string;
  } catch (error) {
    console.log("Error in translate:", error);
    return "Error in translation.";
  }
}

export async function retranslate(text: string, instruction: string): Promise<string> {
  try {
    const response = await fetch(`${SERVER_URL}/api/retranslate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, instruction }),
    });

    const data = await response.json();
    return data.translation as string;
  } catch (error) {
    console.log("Error in retranslate:", error);
    return "Error in retranslation.";
  }
}
