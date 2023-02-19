import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/header";
import { router as routes } from "./router";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading...</div>}>{router}</Suspense>
      {/* <Footer /> */}
    </>
  );
}

export default App;
