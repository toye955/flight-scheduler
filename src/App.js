import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import FlightSchedulingDashboard from "./views/FlightSchedulingDashboard";

function App() {
  return (
    <div className="app">
      <ToastContainer onClose={3000} />
      <FlightSchedulingDashboard />
    </div>
  );
}

export default App;
