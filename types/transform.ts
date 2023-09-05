// deno-lint-ignore-file no-explicit-any
interface Transform<TIn, TOut> {
  transform: (incoming: TIn, ...args: any[]) => TOut;
}

export default Transform;
