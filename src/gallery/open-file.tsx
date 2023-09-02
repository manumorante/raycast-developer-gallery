import { getDefaultApplication } from "@raycast/api";
import { ActionPanel, Detail, Action } from "@raycast/api";
import { homedir } from "os";
import { useState, useEffect } from "react";

const DESKTOP_DIR = `${homedir()}/Desktop`;

export default function Command() {
  const [value, setValue] = useState({});

  // Curret folder
  const currentFolder = process.cwd();
  console.log({ currentFolder });

  useEffect(() => {
    const run = async () => {
      const app = await getDefaultApplication(DESKTOP_DIR);
      setValue(app);
    };
    run();
  }, []);

  return (
    <Detail
      isLoading={!value}
      markdown={`Value: ${JSON.stringify(value, null, 2)}`}
      actions={
        <ActionPanel>
          <Action.OpenWith path={DESKTOP_DIR} />
        </ActionPanel>
      }
    />
  );
}
