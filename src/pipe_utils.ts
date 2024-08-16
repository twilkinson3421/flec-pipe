import type { Last, ToNumber, ToUnion } from "tartak/prelude";
import type { DropLast, Penultimate } from "./array_utils";
import type { PreviousParamsKeyIndex } from "./previous_params_key_index.tartak";

type PrimitivePipeFunction<I, R> = (input: I) => R;

type PipeFunction<Args extends any[]> = PrimitivePipeFunction<
  Penultimate<Args>,
  Last<Args>
>;

// prettier-ignore
export type PipeParamsIndexable = ToUnion<[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]>

export type IndexFromParamKeyName<T> = T extends `Params_${infer Num}`
  ? ToNumber<Num>
  : never;

type SetPipeParams<Args extends any[], Num extends PipeParamsIndexable> = [
  ...PipeParams<DropLast<Args>>[`Params_${PreviousParamsKeyIndex<Num>}`],
  PipeFunction<Args>
];

type PipeParams<Args extends any[]> = {
  [Key in `Params_${PipeParamsIndexable}`]: IndexFromParamKeyName<Key> extends 0
    ? [value: any]
    : SetPipeParams<Args, IndexFromParamKeyName<Key>>;
};

/**
 * Get the pipe function parameter types for a given overload
 * @template Args an array of generics representing the arguments to the pipe function
 * @template Num the index of the overload to get the parameter types for
 */
export type Params<
  Args extends any[],
  Num extends PipeParamsIndexable
> = PipeParams<Args>[`Params_${Num}`];
