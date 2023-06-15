import './App.css';
import Intro from './components/intro/Intro';
import { Routes, Route, useParams } from "react-router-dom";
import Types from './components/types/Types';
import Product from './components/product/Product';

function App() {
  let { typeId } = useParams();
  return (
    <div className="App">
      <Routes>
        <Route path='/sushi' index element={<Intro />} />
        <Route path="types" element={<Types />} />
        <Route path="types/:typeId" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
