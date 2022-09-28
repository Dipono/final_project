import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/cart'
import Profile from './Components/Profile/Profile'
import Order from './Components/Orders/Orders';
import Notification from './Components/Notifications/Notifications';


 
function App() {
  return (
    <main>
      <Router>
        <Routes>
          {/*<Route exact path='/' element={<ToDoList />} />*/}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/order' element={<Order />} />
          <Route exact path='/notification' element={<Notification />} />
        </Routes>
      </Router>
    </main>
  );

}
export default App;