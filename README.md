# Flec Pipe

Brings support for piping to JavaScript, with full TypeScript integration. Use it to write clean, readable, and maintainable JavaScript.

Flec Pipe uses [tartak](https://npmjs.com/package/tartak) under the hood, to help keep this library understandable and maintainable. Look at this library's [source code](https://github.com/twilkinson3421/flec-pipe) to see how it works.

## Installation

```bash
npm install flec-pipe
```

```bash
pnpm add flec-pipe
```

```bash
yarn add flec-pipe
```

## Usage

Flec Pipe is easy to get started with, and works just like in other languages with built-in support for piping.

To use pipes in your code, import the `pipe` function from `flec-pipe`.

```ts
import { pipe } from "flec-pipe";

const result = pipe(-16, Math.abs, Math.sqrt);
// result = 4
```

## Pipize

Flec Pipe also provides a functio called `pipize`. This function allows you to mutate an exisiting function, with parameters, to make it suitable for piping. You can also specify the index of the parameter which the piped value should fill. Here's an example of how to use it.

```ts
import { pipe, pipize } from "flec-pipe";

const divide = (a: number, b: number) => a / b;

// prettier-ignore
const result = pipe(
  -16,
  Math.abs,
  pipize([divide, 0], 2)
);

// result = 16 / 2
// = 8

// prettier-ignore
const result2 = pipe(
  -16,
  Math.abs,
  pipize([divide, 1], 2)
);

// result2 = 2 / 16
// = 0.125
```

Notice the difference between the two results. The first argument of `pipize` is an array containing the function to be made pipable, and the index of the parameter which the piped value should fill.

In the first example, the piped value takes the place of the first parameter (see the `0` in the array). This causes the piped value, in this case `16`, to be passed as the first parameter to the `divide` function.

In the second example, the piped value takes the place of the second parameter (see the `1` in the array). This causes the piped value to be passed as the second parameter to the `divide` function.

The following arguments of the `pipize` function represent the other parameters of the function to be made pipable, in order (excluding the parameter which the piped value should fill).

This can be useful for piping values to JavaScript functions which take multiple parameters. For example:

```ts
import { pipe, pipize } from "flec-pipe";

// prettier-ignore
const result = pipe(
  -16,
  Math.abs,
  Math.sqrt,
  pipize([Math.pow, 0], 3)
);

// trace:
// -16
// Math.abs -> 16
// Math.sqrt -> 4
// Math.pow(4, 3) -> 64
```

If we wanted to raise a given value, such as `3`, to the power equal to the piped value, we can simply modify the `pipize` function call to say that the piped value should fill the second parameter of `Math.pow`.

```ts
import { pipe, pipize } from "flec-pipe";

// prettier-ignore
const result = pipe(
  -16,
  Math.abs,
  Math.sqrt,
  pipize([Math.pow, 1], 3)
);

// result = 3 ** 4
// = 81
```

## TypeScript Support

Both the `pipe` and `pipize` functions are fully typed. The `pipe` function supports **up to 29 functions**. If you need more, you can do one of the following:

- Use multiple nested `pipe` calls like in traditional JavaScript.
- Pass a `pipe` function as a function within another `pipe` function call. This has not been tested, and TypeScript may complain about excessive complexity.
- See the [source code](https://github.com/twilkinson3421/flec-pipe/blob/master/tools/write_pipe.ts) for a file which will generate the `pipe` function's type declaration given a specifified maximum number of functions, and create your own type for the `pipe` function. Alternatively, you can also simply extend the existing `pipe_type.ts` file in your `node_modules` directory.
