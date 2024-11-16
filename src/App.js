import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Kosar from './pages/Kosar';
import AdminPage from './pages/Adminpage';
import PublicPage from './pages/Publicpage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <nav>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<PublicPage />} />
              <Route path="kosar" element={<Kosar />} />
              <Route path="admin" element={<AdminPage />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </nav>
    </div>
  );
}

export default App;
