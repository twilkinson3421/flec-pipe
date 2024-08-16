import type { Add } from "tartak/math";
import type { At, Reverse, SplitAt, Tail } from "tartak/prelude";

export type Penultimate<T extends any[]> = At<Reverse<T>, 1>;
export type DropLast<T extends any[]> = Reverse<Tail<Reverse<T>>>;

export type DropNth<T extends any[], N extends number> = [
  ...SplitAt<T, N>[0],
  ...SplitAt<T, Add<N, 1>>[1]
];
