import { Grid, Color, Icon } from "@raycast/api";
import randomImage from "../utils/randomImage";
import ActionPanelCode from "../utils/ActionPanelCode";

const Section2Columns = () => {
  const actions = ActionPanelCode([
    { title: "2 Columns Grid", code: `<Grid.Section columns={2} aspectRatio="16/9" fit={Grid.Fit.Fill}>` },
    { title: "Item Grid", code: `<Grid.Item content={randomImage(16, 9)} />` },
  ]);

  return (
    <Grid.Section columns={2} aspectRatio="16/9" fit={Grid.Fit.Fill}>
      <Grid.Item content={{ source: randomImage(16, 9) }} actions={actions} />
      <Grid.Item content={{ source: randomImage(16, 9) }} actions={actions} />
    </Grid.Section>
  );
};

type Movie = {
  id?: number;
  title: string;
  year: string;
};

const movies: Movie[] = [
  { title: "Pulp Fiction", year: "1994" },
  { title: "The Godfather", year: "1972" },
  { title: "Back to the Future", year: "1985" },
  { title: "The Dark Knight", year: "2008" },
  { title: "The Matrix", year: "1999" },
  { title: "Inception", year: "2010" },
];

const Section6Columns = () => {
  const columnsGridCode = `<Grid.Section title="Movies" columns={6} aspectRatio="2/3" fit={Grid.Fit.Fill}>`;
  const itemGridCode = `<Grid.Item content={randomImage(2, 3)} title={movie.title} subtitle={movie.year.toString()} />`;

  return (
    <Grid.Section title="Movies" columns={6} aspectRatio="2/3" fit={Grid.Fit.Fill}>
      {movies.map(({ title, year }, i) => (
        <Grid.Item
          key={i}
          content={randomImage(2, 3)}
          title={title}
          subtitle={year.toString()}
          actions={ActionPanelCode([
            { title: "6 Columns Grid", code: columnsGridCode },
            { title: "Item Grid", code: itemGridCode },
          ])}
        />
      ))}
    </Grid.Section>
  );
};

const SectionColors = () => {
  return (
    <Grid.Section title="Colors" columns={8} aspectRatio="1">
      {Object.entries(Color)
        .slice(0, 8)
        .map(([key, value]) => (
          <Grid.Item
            key={key}
            content={{ color: value }}
            title={key}
            actions={ActionPanelCode([
              { title: "8 Color Columns", code: `<Grid.Section title="Colors" columns={8} aspectRatio="1">` },
              {
                title: "Item Grid",
                code: `<Grid.Item content={{ color: value }} title={key} />`,
              },
            ])}
          />
        ))}
    </Grid.Section>
  );
};

const SectionIcons = () => {
  return (
    <Grid.Section title="Icons" columns={8} aspectRatio="1" inset={Grid.Inset.Large}>
      {Object.entries(Icon)
        .slice(0, 16)
        .map(([key, value]) => (
          <Grid.Item
            key={key}
            content={{ source: value }}
            title={key}
            actions={ActionPanelCode([
              {
                title: "8 Icon Columns",
                code: `<Grid.Section title="Icons" columns={8} aspectRatio="1" inset={Grid.Inset.Large}>`,
              },
              {
                title: "Item Grid",
                code: `<Grid.Item content={{ source: value }} title={key} />`,
              },
            ])}
          />
        ))}
    </Grid.Section>
  );
};

export default function Command() {
  return (
    <Grid>
      <Section2Columns />
      <Section6Columns />
      <SectionColors />
      <SectionIcons />
    </Grid>
  );
}
