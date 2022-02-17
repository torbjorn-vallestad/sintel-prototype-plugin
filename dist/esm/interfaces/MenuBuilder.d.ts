declare type AccessorFunction<Type> = () => Type;
export declare type ContextMenuObject = {
    [key: string]: Function | ContextMenuBuilder;
};
export default interface ContextMenuBuilder {
    item(label: string | AccessorFunction<string>, action: () => void, show?: boolean | AccessorFunction<boolean>): ContextMenuBuilder;
    sub(subMenuCreator: (subMenu: ContextMenuBuilder) => void): ContextMenuBuilder;
    toObject(): ContextMenuObject;
}
export {};
