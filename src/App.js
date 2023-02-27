import { Provider } from "react-redux";
import Home from "./components/Home/Home";
import store from "./redux/sotre";

function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

export default App;
