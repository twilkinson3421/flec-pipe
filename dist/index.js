/**
 * Pass the value of a function to the next function in the pipe, and return the result of the last function in the pipe.
 * @param value the initial value
 * @param fns the functions to pipe
 */
export const pipe = (value, ...fns) => {
    return fns.reduce((acc, fn) => fn(acc), value);
};
/**
 * Make a function suitable for piping. Returns a new function, which takes one argument; this is retrieved from the previous function in the pipe, and is used as the first argument to the function, followed by the other arguments passed here.
 * @param fn an array containing the function to pipize, and the zero-based index of the argument to insert the piped value into
 * @param args the other arguments to pass to the function, excluding the argument fetched from the previous function in the pipe at the insertion index
 */
export function pipize(fn, ...args) {
    const [fun, insertAt] = fn;
    return function (pipedValue) {
        if (insertAt < 0)
            return fun(...args, pipedValue);
        // insert the piped value into the arguments in the correct place
        return fun(...args.slice(0, insertAt), pipedValue, ...args.slice(insertAt + 1));
    };
}
