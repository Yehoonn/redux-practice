import "./App.css";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

function App() {
  const initialState = {
    count: 0,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      default:
        return state;
    }
  };

  const store = createStore(reducer);
  return (
    <>
      <Provider store={store}>
        <Test2></Test2>
      </Provider>
    </>
  );
}

const Test2 = () => {
  const number = useSelector((state) => state);

  const disPatch = useDispatch();

  if (number === undefined) {
    return (
      <>
        <h1>로딩중 입니다</h1>;
        <button onClick={() => disPatch({ type: "INCREMENT" })}>
          클릭하세요
        </button>
      </>
    );
  }

  return (
    <>
      <h1>{number.count}</h1>
      <button onClick={() => disPatch({ type: "INCREMENT" })}>
        클릭하세요
      </button>
    </>
  );
};

export default App;
