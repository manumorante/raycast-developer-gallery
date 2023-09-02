import { ActionPanel, Action, List, Icon } from "@raycast/api";
import getIcon from "./utils/icon";
import data from "./data";

export default function Command() {
  return (
    <List>
      <List.Section title="Gallery" subtitle={`${data.length} examples`}>
        {data.map(({ icon, title, subtitle, target }) => {
          return (
            <List.Item
              key={title}
              icon={getIcon({ name: icon })}
              title={title}
              subtitle={subtitle}
              accessories={[{ icon: { source: Icon.Dot, tintColor: "raycast-green" }, tooltip: "Ready to check!" }]}
              actions={
                <ActionPanel>
                  <Action.Push title="View" icon={Icon.Eye} target={target} />
                </ActionPanel>
              }
            />
          );
        })}
      </List.Section>
    </List>
  );
}
