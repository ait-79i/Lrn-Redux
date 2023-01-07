import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'// tatjib state li kaina f redux
// import { DECREMENT, INCREMENT, INC_BY_VALUE } from '../redux/Actions/types'
// import { incrementAction, decrementAction, incrementb5 } from '../redux/Actions/counterActions'


const Counter = () => {
  const [count, setcount] = useState(0)
  // const count = useSelector(state => state.count)// had count jaya mn reducer
  // const { count } = useSelector(state => state.counter)//distructring this === this ^
  // const dispatch = useDispatch();

  const handlIncrement = () => {
    setcount(count + 1)


    // dispatch({
    //   type: INCREMENT
    // })
  //   dispatch(incrementAction())
  }
  const handlDecrement = () => {
    setcount(count - 1)
    // dispatch({
    //   type: DECREMENT
    // })//TATAKHOD L ACTION OTAT3TIHA L REDUCER
  }
  // const handlIecrementByValue = (vl) => {
  //   // setcount(count - 1)
  //   dispatch({
  //     type: INC_BY_VALUE,
  //     value:vl
  //   })
  // }

  //---------------- redux thunk-----------------------//
  // const handlIncrement = () => {
  //   incrementAction(dispatch)
  // }
  // const handlDecrement = () => {
  //   decrementAction(dispatch)
  // }
  // const handlIecrementByValue = (vl) => {
  //   incrementb5(vl, dispatch)
  // }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handlIncrement}>increment</button>
      <button onClick={handlDecrement}>decrement</button>
      
      {/* <button onClick={() => 'handlIecrementByValue'(3)}>increment by value</button> */}
    </div>
  )
}

export default Counter


