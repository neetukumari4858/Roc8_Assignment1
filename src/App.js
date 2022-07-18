import { Products } from "./Products";
import { Sidebar } from "./Sidebar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Products />
    </div>
  );
}
