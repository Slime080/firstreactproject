import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './content/navbar/navbar';
import Index from './content';
import Uselogin from './content/sample/Login';
import Mycart from './content/Cart/Mycart';
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/index' element={<Index />} />
          <Route path='/Login' element={<Uselogin />} />
          <Route path='/Mycart' element={<Mycart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
