import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Routes, Route, } from "react-router-dom";
import NotFound from './NotFound';
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
function App() {

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Header />
              <Home />
            </>
          )}
        />
        <Route
          path="/checkout"
          element={(
            <>
              <Header />
              <CheckoutPage />
            </>
          )}
        />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}


export default App;
