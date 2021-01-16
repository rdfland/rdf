// TODO Use when static becomes allowed in interfaces
// See https://github.com/microsoft/TypeScript/issues/33892
// This is fundamentally a problem about the static vs instance side of a class
// Note that to achieve proper autocompletion, the class expression pattern doesn't work
// See https://www.typescriptlang.org/docs/handbook/interfaces.html#difference-between-the-static-and-instance-sides-of-classes
// Also monitor https://github.com/microsoft/TypeScript/issues/34516
export interface Namespace {
    readonly baseUri: string;
    readonly prefixLabel: string;
    readonly version: string;
}
