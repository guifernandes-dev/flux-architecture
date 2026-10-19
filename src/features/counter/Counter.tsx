import type { JSX } from "react"
import { useState } from "react"
import styles from "./Counter.module.css"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { decrement, increment, incrementValue, decrementValue } from "../redux/actions/counterActions"

export const Counter = (): JSX.Element => {
  const dispatch = useDispatch()
  const { counter } = useSelector((state: RootState) => state)
  const [incrementAmount, setIncrementAmount] = useState("2")

  const value = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <label aria-label="Count" className={styles.value}>
          {counter}
        </label>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(decrementValue(value))}
        >
          Subtract Amount
        </button>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={e => {
            setIncrementAmount(e.target.value)
          }}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementValue(value))}
        >
          Add Amount
        </button>

      </div>
    </div>
  )
}
