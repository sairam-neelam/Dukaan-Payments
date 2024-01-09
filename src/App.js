import "./App.css";
import PaymentsDashboard from "./components/PaymentsDashboard/PaymentsDashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <PaymentsDashboard />
    </div>
  );
}

export default App;
