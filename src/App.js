
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Router>
      <Home />
      </Router>
    </div>
  );
}

export default App;
