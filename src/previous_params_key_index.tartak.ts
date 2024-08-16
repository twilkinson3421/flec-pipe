import { type Call, type Fn, type PartialApply } from "tartak/hot"
import { type Subtract } from "tartak/math"


interface lambda_temp_3 extends Fn {
            return: (this["arg1"] extends infer temp_1 extends number
            ? 1 extends infer temp_2 extends number
              ? (Subtract<temp_1, temp_2> )
              : never
            : never)
          }

import { PipeParamsIndexable } from "./pipe_utils";

export type PreviousParamsKeyIndexHOT = PartialApply<lambda_temp_3, [[]]>;
export type PreviousParamsKeyIndex<index extends PipeParamsIndexable> = Call<PreviousParamsKeyIndexHOT, index>