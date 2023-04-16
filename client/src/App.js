import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./Components/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
