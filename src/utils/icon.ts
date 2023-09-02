import { Icon } from "@raycast/api";

export default function getIcon({ name, color = "raycast-secondary-text" }: { name: string; color?: string }) {
  const source = Icon[name as keyof typeof Icon];
  return { source, tintColor: color };
}
