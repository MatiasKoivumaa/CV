import './App.css';
import FinnishMainContainer from './Components/FinnishMainContainer';
import EnglishMainContainer from './Components/EnglishMainContainer';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Link to="/" className="Link"><text>Back to menu</text></Link>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/fin" element={ <FinnishMainContainer /> } />
          <Route path="/eng" element={ <EnglishMainContainer /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
