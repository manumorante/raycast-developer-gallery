import { Icon, ActionPanel, Action } from "@raycast/api";
import ShowCode from "../utils/ShowCode";

type ViewCodePros = {
  title: string;
  code: string;
};

export default function ActionPanelCode(items: ViewCodePros[]) {
  return (
    <ActionPanel>
      <ActionPanel.Section title="Show Code">
        {items.map((item) => (
          <Action.Push icon={Icon.Eye} title={`Show ${item.title}`} target={<ShowCode code={item.code} />} />
        ))}
      </ActionPanel.Section>

      <ActionPanel.Section title="Copy Code">
        {items.map((item) => (
          <Action.CopyToClipboard title={`Copy ${item.title}`} content={item.code} />
        ))}
      </ActionPanel.Section>
    </ActionPanel>
  );
}
