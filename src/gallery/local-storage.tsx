import { useEffect, useState } from "react";
import { ActionPanel, Action, Form, LocalStorage, Icon } from "@raycast/api";

type State = {
  isLoading: boolean;
  data: Data;
};

type Data = {
  name: string;
  age: string;
};

const STATE_KEY = "local-storage-example-" + "state";

export default function Command() {
  const [state, setState] = useState<State>({
    isLoading: true,
    data: {
      name: "",
      age: "",
    },
  });

  useEffect(() => {
    (async () => {
      const storedData = await LocalStorage.getItem<string>(STATE_KEY);

      if (!storedData) {
        setState((prev) => ({ ...prev, isLoading: false }));
        return;
      }

      try {
        const data: Data = JSON.parse(storedData);
        setState((prev) => ({ ...prev, data, isLoading: false }));
      } catch (e) {
        // can't decode todos
        setState((prev) => ({ ...prev, data: { name: "", age: "" }, isLoading: false }));
      }
    })();
  }, []);

  useEffect(() => {
    LocalStorage.setItem(STATE_KEY, JSON.stringify(state.data));
  }, [state.data]);

  const handleSubmit = (values: { name: string; age: string }) => {
    setState((prev) => ({ ...prev, data: { name: values.name, age: values.age } }));
  };

  return (
    <Form
      isLoading={state.isLoading}
      actions={
        <ActionPanel>
          <Action.SubmitForm icon={Icon.HardDrive} title="Update" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Description
        title=""
        text={`Change data and press Update button to save it in the local storage.
        
So "${state.data.name}" is "${state.data.age}" years old.
        
Go back or close and come back to see that your data remains saved.`}
      />
      <Form.TextField id="name" title="Name" value={state.data.name} />
      <Form.TextField id="age" title="Age" value={`${state.data.age}`} />
    </Form>
  );
}
