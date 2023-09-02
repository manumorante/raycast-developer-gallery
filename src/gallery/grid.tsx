import { Grid, Color, Icon } from "@raycast/api";

type Movie = {
  id: string;
  title: string;
  year: string;
};

const randomImage = (w: number, h: number, num?: number) => {
  return `https://picsum.photos/${w * 100}/${h * 100}?random=${num || Math.random()}`;
};
const movies: Movie[] = [
  {
    id: "1",
    title: "Pulp Fiction",
    year: "1994",
  },
  {
    id: "2",
    title: "The Godfather",
    year: "1972",
  },
  {
    id: "3",
    title: "Back to the Future",
    year: "1985",
  },
  {
    id: "4",
    title: "The Dark Knight",
    year: "2008",
  },
  {
    id: "5",
    title: "The Matrix",
    year: "1999",
  },
  {
    id: "6",
    title: "Inception",
    year: "2010",
  },
];

export default function Command() {
  return (
    <Grid>
      <Grid.Section columns={2} aspectRatio="16/9" fit={Grid.Fit.Fill}>
        <Grid.Item content={{ source: randomImage(16, 9) }} />
        <Grid.Item content={{ source: randomImage(16, 9) }} />
      </Grid.Section>

      <Grid.Section title="Movies" columns={6} aspectRatio="2/3" fit={Grid.Fit.Fill}>
        {movies.map(({ id, title, year }) => (
          <MovieCoverItem key={id} id={id} title={title} year={year} />
        ))}
      </Grid.Section>

      <Grid.Section title="Colors" columns={8} aspectRatio="1">
        {Object.entries(Color)
          .slice(0, 8)
          .map(([key, value]) => (
            <Grid.Item key={key} content={{ color: value }} title={key} />
          ))}
      </Grid.Section>

      <Grid.Section title="Icons" columns={8} aspectRatio="1" inset={Grid.Inset.Large}>
        {Object.entries(Icon)
          .slice(0, 16)
          .map(([key, value]) => (
            <Grid.Item key={key} content={{ source: value }} title={key} />
          ))}
      </Grid.Section>
    </Grid>
  );
}

const MovieCoverItem = (movie: Movie) => (
  <Grid.Item content={randomImage(2, 3)} title={movie.title} subtitle={movie.year.toString()} />
);
