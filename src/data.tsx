import { Icon } from "@raycast/api";

import Grid from "./gallery/grid";
import ActionPush from "./gallery/action-push";
import SuccessFailure from "./gallery/show-toast";
import EmptyView from "./gallery/empty-view";
import Loading from "./gallery/loading";
import Accesories from "./gallery/accesories";
import TypeaheadResults from "./gallery/typeahead-results";

type Example = {
  title: string;
  subtitle: string;
  tags?: string[];
  target: JSX.Element;
  default?: boolean;
  icon?: Icon;
  wip?: boolean;
};

const data: Example[] = [
  {
    title: "Grid",
    subtitle: "Some cool ways to use the Grids",
    tags: ["Grid", "Grid.Item", "Grid.Section"],
    icon: Icon.AppWindowGrid2x2,
    target: <Grid />,
  },
  {
    title: "Action Push",
    subtitle: "Use to navigate to another view",
    tags: ["Action", "Action.Push"],
    icon: Icon.ArrowUp,
    target: <ActionPush />,
  },
  {
    title: "Show Toast",
    subtitle: "Notification with a message",
    tags: ["async", "Toast", "showToast"],
    icon: Icon.Bell,
    target: <SuccessFailure />,
  },
  {
    title: "Empty view",
    subtitle: "When no items to show",
    tags: ["EmptyView", "Grid", "List"],
    icon: Icon.XMarkCircle,
    target: <EmptyView />,
  },
  {
    title: "Accesories",
    subtitle: "Different types of accesories",
    tags: ["Icon", "Tag", "List.Item"],
    icon: Icon.Ellipsis,
    target: <Accesories />,
  },
  {
    title: "Loading",
    subtitle: "When loading items",
    tags: ["loading", "Grid", "List"],
    icon: Icon.Hourglass,
    target: <Loading />,
  },
  {
    title: "Typeahead Results",
    subtitle: "Filtering results from a typeahead",
    tags: ["useFetch", "Fech"],
    icon: Icon.MagnifyingGlass,
    target: <TypeaheadResults />,
  },
];

export default data;
