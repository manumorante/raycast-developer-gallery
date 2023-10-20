import { List } from "@raycast/api";
import { useExec } from "@raycast/utils";
import { cpus } from "os";
import { useMemo } from "react";

const brewPath = cpus()[0].model.includes("Apple") ? "/opt/homebrew/bin/brew" : "/usr/local/bin/brew";
console.log(brewPath);

export default function Command() {
  const { isLoading, data } = useExec(brewPath, ["info", "--json=v2", "--installed"]);
  const results = useMemo<{ id: string; name: string }[]>(() => JSON.parse(data || "{}").formulae || [], [data]);

  return (
    <List isLoading={isLoading}>
      {results.map((item, index) => (
        <List.Item key={`${index}`} title={item.name} />
      ))}
    </List>
  );
}
