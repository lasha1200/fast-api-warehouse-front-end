import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products } from './routes/Products';
import { ProductCreate } from './routes/ProductCreate';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path ="/create" element={<ProductCreate/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
