import Grid from "./gallery/grid";
import ActionPush from "./gallery/action-push";
import SuccessFailure from "./gallery/show-toast";
import EmptyView from "./gallery/empty-view";
import Loading from "./gallery/loading";
import Accesories from "./gallery/accesories";
import TypeaheadResults from "./gallery/typeahead-results";
import OpenFile from "./gallery/open-file";

type Example = {
  title: string;
  subtitle: string;
  target: JSX.Element;
  icon: string;
  default?: boolean;
};

const data: Example[] = [
  {
    title: "Grid",
    subtitle: "Some cool ways to use the Grids",
    icon: "AppWindowGrid2x2",
    target: <Grid />,
  },
  {
    title: "Action Push",
    subtitle: "Use to navigate to another view",
    icon: "ArrowUp",
    target: <ActionPush />,
  },
  {
    title: "Show Toast",
    subtitle: "Notification with a message",
    icon: "Bell",
    target: <SuccessFailure />,
  },
  {
    title: "Empty view",
    subtitle: "When no items to show",
    icon: "XMarkCircle",
    target: <EmptyView />,
  },
  {
    title: "Accesories",
    subtitle: "Different types of accesories",
    icon: "SquareEllipsis",
    target: <Accesories />,
  },
  {
    title: "Loading",
    subtitle: "When loading items",
    icon: "Hourglass",
    target: <Loading />,
  },
  {
    title: "Typeahead Results",
    subtitle: "Filtering results from a typeahead",
    icon: "MagnifyingGlass",
    target: <TypeaheadResults />,
  },
  {
    title: "Open file",
    subtitle: "Open a file with the default application",
    icon: "CodeBlock",
    target: <OpenFile />,
  },
];

export default data;
