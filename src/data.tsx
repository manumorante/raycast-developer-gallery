import ActionSubmenu from "./gallery/action-submenu";
import CacheRecents from "./gallery/cache-recents";
import UseExec from "./gallery/use-exec";
import Grid from "./gallery/grid";
import GridCalendar from "./gallery/grid-calendar";
import ActionPush from "./gallery/action-push";
import SuccessFailure from "./gallery/show-toast";
import LocalStorage from "./gallery/local-storage";
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
  wip?: boolean;
};

const data: Example[] = [
  {
    title: "ActionSubmenu",
    subtitle: "Yes, actions have submenus",
    icon: "List",
    target: <ActionSubmenu />,
    wip: true,
  },
  {
    title: "Cache",
    subtitle: "Save recent list in cache",
    icon: "ComputerChip",
    target: <CacheRecents />,
    wip: true,
  },
  {
    title: "useExec",
    subtitle: "Use to execute a command",
    icon: "ComputerChip",
    target: <UseExec />,
    wip: true,
  },
  {
    title: "Grid",
    subtitle: "Some cool ways to use the Grids",
    icon: "AppWindowGrid2x2",
    target: <Grid />,
  },
  {
    title: "Grid Calendar",
    subtitle: "Calendar using the Grid view",
    icon: "Calendar",
    target: <GridCalendar />,
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
    title: "LocalStorage",
    subtitle: "Save and use data from local",
    icon: "HardDrive",
    target: <LocalStorage />,
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
