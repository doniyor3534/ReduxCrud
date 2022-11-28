import { Types } from "../Types/Types"

export const INCRIMENT = () => {
    return {
      type: Types.incriment
    };
}
export const DECRIMENT = () => {
    return {
      type: Types.decriment
    };
}
export const RESET = () => {
    return {
      type: Types.reset
    };
}