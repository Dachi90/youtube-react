import TeoriaRedux from "./components/TeoriaRedux";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
