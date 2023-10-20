import { ActionPanel, Action, List, Icon, useNavigation } from "@raycast/api";
import getIcon from "./utils/icon";
import data from "./data";
import { useEffect } from "react";

export default function Command() {
  const { push } = useNavigation();

  useEffect(() => {
    const view = data.find((item) => item.default);
    if (view) push(view.target);
  }, [push]);

  return (
    <List>
      <List.Section title="Gallery" subtitle={`${data.length} examples`}>
        {data.map(({ icon, title, subtitle, target, wip }) => {
          return (
            <List.Item
              key={title}
              icon={getIcon({ name: icon })}
              title={title}
              subtitle={subtitle}
              accessories={[{ tag: wip ? "wip" : "" }]}
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
