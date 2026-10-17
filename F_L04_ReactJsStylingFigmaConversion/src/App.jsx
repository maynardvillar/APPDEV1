import { useState, useEffect } from "react";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";

function App() {
  const [page, setPage] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return page === "#signup" ? <Signup /> : <Login />;
}

export default App;


