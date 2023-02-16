import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import { router } from "./router/index";

function App() {
  return (
    <>
      <Header />
      {router}
    </>
  );
}

export default App;
