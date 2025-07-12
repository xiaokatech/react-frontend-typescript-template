import "./HomePage.css";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import type { IReduxRootState } from "../store/reducer";
import { countDecrement, countIncrement } from "../store/actions/counterAction";

export const HomePage = () => {
  const dispatch = useDispatch();

  const count = useSelector((state: IReduxRootState) => {
    console.log("state", state);
    return state.counter.counter || 0;
  });

  return (
    <>
      <div className="flex">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <p>count is {count}</p>
        <button
          onClick={() => {
            dispatch<any>(countIncrement());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch<any>(countDecrement());
          }}
        >
          decrement
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
