import type { IsPositive } from "tartak/math";
import type { DropNth } from "./array_utils";

/**
 * Get the remaining arguments to the pipized function, in the correct order
 * @template Fun the function to get the arguments for
 * @template InsertAt the index of the argument to insert the piped value into - this parameter is removed from the arguments
 */
export type ArgsInOrder<
  Fun extends (...args: any) => any,
  InsertAt extends number
> = IsPositive<InsertAt> extends 1
  ? DropNth<Parameters<Fun>, InsertAt>
  : Parameters<Fun>;
