import Plugins from "./Plugins";
import PluginUtilities from "./PluginUtilities";
export default interface InitFunction {
    (plugins: Plugins, utilities: PluginUtilities): void;
}
