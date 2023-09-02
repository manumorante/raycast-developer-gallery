import { showHUD, getSelectedText, Clipboard } from "@raycast/api";

export default async function Command() {
  try {
    const selected = await getSelectedText();
    const transformed = selected.toUpperCase();

    await Clipboard.paste(transformed);
    await showHUD("Text transformed and pasted");
  } catch (error) {
    await showHUD(`Error transforming text: ${error}`);
  }
}
