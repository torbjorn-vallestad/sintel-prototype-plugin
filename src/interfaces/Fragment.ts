import { Store } from "redux";
import FragmentUtilities from "./FragmentUtilities";
import ContextMenuBuilder from "./MenuBuilder";
import Plugins from "./Plugins";

export default interface Fragment {
    init(plugins: Plugins, utils: FragmentUtilities): void;
    mount(element: HTMLElement): void;
    unmount(element: HTMLElement): void;
    contextMenu(store: Store, menu: ContextMenuBuilder): void;
};