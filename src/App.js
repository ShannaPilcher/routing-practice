import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Colored from './components/Colored'

function App() {
  const Data = {
    word: "hello",
    id: "4"
  }

  return (
    <div className="App">
      <Router>
        <Home path = "/home"/>
        <Number path = "/:id"/>
        <Word path = "/:word"/>
        <Colored path = "/:word/blue/red"/>
      </Router>
    </div>
  );
}

export default App;
