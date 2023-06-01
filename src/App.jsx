import MyRouter from "./components/MyRouter";
import React , {useEffect} from "react";
import { useSelector } from "react-redux";
import "./App.css";


const App = () => {
  const isIntraMode = useSelector((state) => {
    return state.intraMode;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("intraMode", isIntraMode);
    localStorage.setItem("intraMode", isIntraMode);
  }, [isIntraMode]);


  return <MyRouter />;
};

export default App;
