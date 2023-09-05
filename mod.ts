import { Reflect } from './reflect.ts'

if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
  throw new Error(
    `tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`
  );
}

export {
  Lifecycle
} from "./types/index.ts";
export type {
  DependencyContainer,
  Disposable,
  RegistrationOptions,
  Frequency
} from "./types/index.ts";
export * from "./decorators/index.ts";
export * from "./factories/index.ts";
export * from "./providers/index.ts";
export {delay} from "./lazy-helpers.ts";
export {instance as container} from "./dependency-container.ts";
