import { List, Cache, ActionPanel, Action, Detail } from "@raycast/api";

const data = [
  { id: "1", title: "Inception" },
  { id: "2", title: "Parasite" },
  { id: "3", title: "The Godfather" },
  { id: "4", title: "Pulp Fiction" },
  { id: "5", title: "Fight Club" },
  { id: "6", title: "The Dark Knight" },
  { id: "7", title: "Forrest Gump" },
  { id: "8", title: "The Matrix" },
  { id: "9", title: "Schindler's List" },
  { id: "10", title: "Silence of the Lambs" },
];

type Movie = { id: string; title: string };
const cache = new Cache();

export default function Command() {
  const cached = cache.get("recents");
  const recents: Movie[] = cached ? JSON.parse(cached) : [];

  const handleView = (movie: Movie) => {
    const newRecents = [movie, ...recents.filter((i) => i.id !== movie.id)];
    cache.set("recents", JSON.stringify(newRecents));
  };

  return (
    <List>
      <List.Section title="Recent">
        {recents.map((movie) => (
          <List.Item key={movie.id} title={movie.title} subtitle={movie.id} />
        ))}
      </List.Section>

      <List.Section title="All">
        {data.map((movie) => (
          <List.Item
            key={movie.id}
            title={movie.title}
            subtitle={movie.id}
            actions={
              <ActionPanel>
                <Action.Push title="View" target={<DetailView movie={movie} />} onPush={() => handleView(movie)} />
              </ActionPanel>
            }
          />
        ))}
      </List.Section>
    </List>
  );
}

function DetailView({ movie }: { movie: Movie }) {
  return <Detail markdown={`# ${movie.title}`} />;
}
