import type { Head, Last } from "tartak/prelude";
import type { DropLast, Penultimate } from "./array_utils.ts";

type PipeFunction<I, R> = (input: I) => R;

/**
 * Get the pipe function parameter types for a given overload
 * @template Args an array of generics representing the arguments to the pipe function
 * @template Num the index of the overload to get the parameter types for
 */
export type Params<Args extends any[]> = Args["length"] extends 1
  ? [value: Head<Args>]
  : [...Params<DropLast<Args>>, PipeFunction<Penultimate<Args>, Last<Args>>];
