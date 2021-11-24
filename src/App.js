import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import { useRoutes } from "react-router-dom";
import routes from "./routes/index.js";
import { Provider } from "react-redux";
import store from "./store";
import { Data } from "./applications/Singers/data";

function App() {
  const element = useRoutes(routes);
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <Data>{element}</Data>
    </Provider>
  );
}

export default App;
