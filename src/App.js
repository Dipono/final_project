import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/cart'

 
function App() {
  return (
    <main>
      <Router>
        <Routes>
          {/*<Route exact path='/' element={<ToDoList />} />*/}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </main>
  );

}
export default App;