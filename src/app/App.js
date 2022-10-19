import { BrowserRouter as Router } from 'react-router-dom';

import MainRouter from './Utils/Routes';
import './App.scss';


function App() {
  return (
    <Router>
        <MainRouter />
    </Router>
  );
}

export default App;
