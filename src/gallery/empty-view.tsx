import { Color, Grid, Icon } from "@raycast/api";

export default function Command() {
  return (
    <Grid searchBarPlaceholder="Search something ...">
      <Grid.EmptyView title="Not found" icon={{ source: Icon.XMarkCircleFilled, tintColor: Color.SecondaryText }} />
    </Grid>
  );
}
