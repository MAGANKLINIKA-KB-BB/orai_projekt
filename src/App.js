import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Kosar from './pages/Kosar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><h1>Bordács Béla</h1></div>
      </header>
      <nav>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Public />} />
              <Route path="kosar" element={<Kosar />} />
              <Route path="admin" element={<Adminpage />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </nav>
    </div>
  );
}

export default App;
