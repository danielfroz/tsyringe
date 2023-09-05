// deno-lint-ignore-file no-explicit-any
/** Constructor type */
type constructor<T> = {
  new (...args: any[]): T;
};

export default constructor;
