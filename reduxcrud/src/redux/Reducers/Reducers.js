import { Types } from "../Types/Types";

const InitialState = {
    count:0
}


const CountReducer = (state=InitialState, {type, payload }) => {
    switch (type) {
        case Types.incriment:
            return {
              ...state,
              count: (state.count += 1),
            };
            break;
        case Types.decriment:
            return {
              ...state,
              count: (state.count -= 1),
            };
            break;
        case Types.reset:
            return {
              ...state,
              count: (state.count =0),
            };
            break;
    
        default: return state
            break;
    }
}
export default CountReducer;
