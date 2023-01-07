import { DECREMENT, INCREMENT, INC_BY_VALUE } from "../Actions/types";

const CounterReducer = (state = { count: 0 }, action) => {
	switch (
		action.type // MN L A7SSAN DIIR SWITCH
	) {
		case INCREMENT:
			return { ...state, count: state.count + 1 };
			break;
		case DECREMENT:
			return { ...state, count: state.count - 1 };
			break;

		case INC_BY_VALUE:
			return { ...state, count: state.count + action.value };
			break;

		default:
			return state;
			break;
	}
};

export default CounterReducer;
