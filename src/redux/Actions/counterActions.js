import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./types";

// export const incrementAction = () => {
// 	return {
// 		type: INCREMENT,
// 	};
// };

// export const decrementAction = () => {
//   return{type:DECREMENT}
// }
// export const incrementb5 = () => {
//   return { type: INC_BY_VALUE };
// }

// redux thunk
export const incrementAction = async (dispatch) => {
	return dispatch({
		type: INCREMENT,
	});
};
export const decrementAction = async (dispatch) => {
	return dispatch({ type: DECREMENT });
};

export const incrementb5 = async (vl, dispatch) => {
	return dispatch({
		type: INC_BY_VALUE,
		value: vl,
	});
};
