import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import { useRoutes } from "react-router-dom";
import routes from "./routes/index.js";

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {element}
    </>
  );
}

export default App;
