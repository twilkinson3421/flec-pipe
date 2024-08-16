import type { Pipe } from "./pipe_type";
import type { ArgsInOrder } from "./pipize_utils";
/**
 * Pass the value of a function to the next function in the pipe, and return the result of the last function in the pipe.
 * @param value the initial value
 * @param fns the functions to pipe
 */
export declare const pipe: Pipe;
/**
 * Make a function suitable for piping. Returns a new function, which takes one argument; this is retrieved from the previous function in the pipe, and is used as the first argument to the function, followed by the other arguments passed here.
 * @param fn an array containing the function to pipize, and the zero-based index of the argument to insert the piped value into
 * @param args the other arguments to pass to the function, excluding the argument fetched from the previous function in the pipe at the insertion index
 */
export declare function pipize<InsertAt extends number, Fun extends (...args: any) => any>(fn: [Fun, InsertAt], ...args: ArgsInOrder<Fun, InsertAt>): (pipedValue: Parameters<Fun>[InsertAt]) => ReturnType<Fun>;
