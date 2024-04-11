import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './content/navbar/navbar';
import Index from './content';
import Uselogin from './content/sample/Login';
import Mycart from './content/Cart/Mycart';
import Productlisting from './content/sample/Productlisting';
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/index' element={<Index />} />
          <Route path='/Login' element={<Uselogin />} />
          <Route path='/Mycart' element={<Mycart />} />
          <Route path='/Productlisting' element={<Productlisting />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
