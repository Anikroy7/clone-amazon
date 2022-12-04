import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { Routes, Route, } from "react-router-dom";
import CheakoutPage from './CheakoutPage/CheakoutPage';
import NotFound from './NotFound';

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
              <CheakoutPage />
            </>
          )}
        />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}


export default App;
