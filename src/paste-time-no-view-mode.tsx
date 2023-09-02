import { showHUD, Clipboard } from "@raycast/api";

export default async function Command() {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  try {
    await Clipboard.paste("The time is: " + time);
    await showHUD("Time command executed");
  } catch (error) {
    await showHUD("Error executing time command");
  }
}
