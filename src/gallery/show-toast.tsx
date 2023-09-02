import { ActionPanel, Action, List, showToast, Toast } from "@raycast/api";
import { useEffect, useState } from "react";

export default function Command() {
  const [state, setState] = useState({ success: false, message: "" });

  useEffect(() => {
    const run = async () => {
      if (!state.message) {
        await showToast({
          style: Toast.Style.Animated,
          title: "Select an option to see the message",
        });
        return;
      }

      if (state.success) {
        await showToast({ title: "Yummy!", message: state.message });
      } else {
        await showToast({
          style: Toast.Style.Failure,
          title: "Oh oh",
          message: state.message,
        });
      }
    };

    run();
  }, [state]);

  return (
    <List searchBarPlaceholder="Cooking a pizza margherita">
      <List.Item
        icon="🟢"
        title="Success"
        actions={
          <ActionPanel>
            <Action title="View" onAction={() => setState({ success: true, message: "Pizza margherita is ready!" })} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="🔴"
        title="Failure"
        actions={
          <ActionPanel>
            <Action title="View" onAction={() => setState({ success: false, message: "Pizza dropped on the floor" })} />
          </ActionPanel>
        }
      />
    </List>
  );
}
