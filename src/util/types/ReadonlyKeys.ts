import { type Equals } from '~/util/types/Equals';

type _ReadonlyKeys<O extends object> = {
  [K in keyof O]-?: {
    0: never,
    1: K
  }[Equals<{ -readonly [Q in K]: O[K] }, { [Q in K]: O[K] }>]
}[keyof O];

type ReadonlyKeys<O extends object> = (
  O extends unknown
  ? _ReadonlyKeys<O>
  : never
);

export {
  type ReadonlyKeys,
  type _ReadonlyKeys
};
