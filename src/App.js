import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes } from "react-router-dom";
import Header from "./components/header";
import { router as routes } from './router';

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Header />
      {router}
    </>
  );
}

export default App;