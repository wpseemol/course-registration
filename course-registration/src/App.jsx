import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Courses />
      <ToastContainer />
    </>
  );
}

export default App;
