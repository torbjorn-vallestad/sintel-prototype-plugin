import Fragment from "./Fragment";
import Plugins from "./Plugins";
import PluginUtilities from "./PluginUtilities";
export default interface Plugin {
    key(): string;
    name(): string;
    description(): string;
    dependencies(): string[];
    fragments(): Record<string, Fragment>;
    devFragments(): Record<string, Fragment>;
    init(plugins: Plugins, utilities: PluginUtilities): void;
}
