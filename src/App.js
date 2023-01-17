import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo />
      <ToastContainer />
    </div>
  );
}

export default App;
