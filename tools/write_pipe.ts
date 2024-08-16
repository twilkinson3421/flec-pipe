import * as fs from "fs";

const MAX_FUNCTIONS = 29;

const OUTPUT_FILE = "pipe_type.ts";

const FILE_START = `import type { Params } from "./pipe_utils";\n\n`;

// prettier-ignore
const INTEGER_CHAR_MAP = new Map<number,string>([[0,"A"], [1,"B"], [2,"C"], [3,"D"], [4,"E"], [5,"F"], [6,"G"], [7,"H"], [8,"I"], [9,"J"], [10,"K"], [11,"L"], [12,"M"], [13,"N"], [14,"O"], [15,"P"], [16,"Q"], [17,"R"], [18,"S"], [19,"T"], [20,"U"], [21,"V"], [22,"W"], [23,"X"], [24,"Y"], [25,"Z"], [26,"AA"], [27,"AB"], [28,"AC"], [29,"AD"], [30,"AE"], [31,"AF"], [32,"AG"], [33,"AH"], [34,"AI"], [35,"AJ"], [36,"AK"], [37,"AL"], [38,"AM"], [39,"AN"], [40,"AO"], [41,"AP"], [42,"AQ"], [43,"AR"], [44,"AS"], [45,"AT"], [46,"AU"], [47,"AV"], [48,"AW"], [49,"AX"], [50,"AY"]]);

function main() {
  let code = FILE_START;

  code += `export interface Pipe {`;

  for (let i = 0; i < MAX_FUNCTIONS + 1; i++) {
    const template = (() => {
      let output = `\n\t<`;

      for (let j = 0; j < i + 1; j++) {
        const char = INTEGER_CHAR_MAP.get(j);
        const comma = j ? "," : "";
        output += `${comma}${char}`;
      }

      return `${output}>`;
    })();

    const params = (() => {
      let output = `(...args:Params<[`;

      for (let j = 0; j < i + 1; j++) {
        const char = INTEGER_CHAR_MAP.get(j);
        const comma = j ? "," : "";
        output += `${comma}${char}`;
      }

      return `${output}],${i}>)`;
    })();

    const return_type = `:${INTEGER_CHAR_MAP.get(i)}`;

    code += `${template}${params}${return_type};\n`;
  }

  code += `}`;

  fs.writeFileSync(OUTPUT_FILE, code);
}

main();
