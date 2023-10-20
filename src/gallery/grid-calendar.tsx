import { Grid, Color, Icon, ActionPanel } from "@raycast/api";

/**
 * 0 - Domingo
 */
const defaults = {
  year: 2023,
};

function startDay(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

console.log(startDay(defaults.year, 0));

const Day = ({ number }: { number: number }) => {
  const numberStr = number.toString().padStart(2, "0");
  return <Grid.Item content={{ source: Icon[`Number${numberStr}` as keyof typeof Icon] }} />;
};

export default function Command() {
  return (
    <Grid columns={7} aspectRatio="3/2" fit={Grid.Fit.Contain} inset={Grid.Inset.Small}>
      {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
        <Day key={day} number={day} />
      ))}
    </Grid>
  );
}
