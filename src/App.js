import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import { useRoutes } from "react-router-dom";
import routes from "./routes/index.js";
import { Provider} from 'react-redux'
import store from './store'

function App() {
  const element = useRoutes(routes);
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {element}
    </Provider>
  );
}

export default App;
