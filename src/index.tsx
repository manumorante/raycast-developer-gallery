import { ActionPanel, Action, List, Icon, Color } from "@raycast/api";
import data from "./data";

export default function Command() {
  // REDIRECT to default example if there is one
  const defaultExample = data.filter((item) => item.default);
  if (defaultExample.length > 0) return defaultExample[0].target;

  return (
    <List>
      {data.map((item) => (
        <List.Item
          key={item.title}
          icon={item.icon ? { source: item.icon, tintColor: Color.SecondaryText } : Icon.Dot}
          title={item.title}
          subtitle={item.subtitle}
          accessories={[{ icon: { source: Icon.Dot, tintColor: "raycast-green" }, tooltip: "Ready to check!" }]}
          actions={
            <ActionPanel>
              <Action.Push title="View" icon={Icon.Eye} target={item.target} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
