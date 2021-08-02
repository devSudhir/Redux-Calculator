import "./styles.css";
import { store } from "./store/store.js";
import {
  addCount,
  subCount,
  multiply,
  division,
  reset
} from "./store/actions.js";
import { useState } from "react";
export default function App() {
  const [, set] = useState(0);
  console.log(store.getState());
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <div style={{ padding: "5px" }}>
        Result:
        <span style={{ padding: "5px" }}>{store.getState().result}</span>
      </div>
      <div>
        <input
          style={{
            padding: "5px",
            marginBottom: "7px",
            borderRadius: "7px",
            color: "#333",
            border: "1px solid coral"
          }}
          type="number"
          placeholder="EnterValue"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <button
        style={{
          padding: "5px",
          marginRight: "7px",
          borderRadius: "7px",
          color: "#fff",
          backgroundColor: "#333"
        }}
        onClick={() => {
          store.dispatch(addCount(value));
          set(Math.random());
        }}
      >
        Add
      </button>
      <button
        style={{
          padding: "5px",
          marginRight: "7px",
          borderRadius: "7px",
          color: "#fff",
          backgroundColor: "#333"
        }}
        onClick={() => {
          store.dispatch(subCount(value));
          set(Math.random());
        }}
      >
        Sub
      </button>
      <button
        style={{
          padding: "5px",
          marginRight: "7px",
          borderRadius: "7px",
          color: "#fff",
          backgroundColor: "#333"
        }}
        onClick={() => {
          store.dispatch(multiply(value));
          set(Math.random());
        }}
      >
        Multiply
      </button>
      <button
        style={{
          padding: "5px",
          marginRight: "7px",
          borderRadius: "7px",
          color: "#fff",
          backgroundColor: "#333"
        }}
        onClick={() => {
          store.dispatch(division(value));
          set(Math.random());
        }}
      >
        Division
      </button>
      <button
        style={{
          padding: "5px",
          marginRight: "7px",
          borderRadius: "7px",
          color: "#fff",
          backgroundColor: "#333"
        }}
        onClick={() => {
          store.dispatch(reset());
          set(Math.random());
        }}
      >
        Reset
      </button>
    </div>
  );
}
