import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUser } from "./actions/users";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUser());
  }, [dispatch]);

  console.log(fetchAllUser, "hello serliss")
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
