import { ActionPanel, Action, Color, Icon, List } from "@raycast/api";

// Create some date examples
const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const data = [
  {
    title: "Icon",
    accessories: [{ icon: Icon.Person }],
  },
  {
    title: "Text",
    accessories: [{ text: "Hello" }],
  },
  {
    title: "Icon + text",
    accessories: [{ icon: Icon.CircleProgress, text: "Backlog" }],
  },
  {
    title: "Tooltip",
    accessories: [{ icon: Icon.CircleProgress75, text: "In progress", tooltip: "75% complete" }],
  },
  {
    title: "Tag",
    accessories: [{ tag: "featured" }],
  },
  {
    title: "Date",
    accessories: [{ date: today }],
  },
  {
    title: "Date in tag",
    accessories: [{ tag: tomorrow }],
  },
  {
    title: "Date in tag colored",
    accessories: [{ tag: { value: yesterday, color: Color.Magenta } }],
  },
  {
    title: "Tag with colores text and tooltip",
    accessories: [{ tag: { value: "User", color: Color.Magenta }, tooltip: "Tag with tooltip" }],
  },
  {
    title: "Colored text",
    accessories: [{ text: { value: "Done", color: Color.Green } }],
  },
];

export default function Command() {
  return (
    <List navigationTitle="Accesories" searchBarPlaceholder="Accesories">
      {data.map((item, index) => (
        <List.Item
          key={index}
          icon={{ source: Icon.Dot, tintColor: Color.SecondaryText, tooltip: JSON.stringify(item.accessories) }}
          title={item.title}
          accessories={item.accessories}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard title="Copy" content={JSON.stringify(item.accessories)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
