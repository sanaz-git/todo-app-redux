import './App.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components
import Todo from './components/Todo';

//Store
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
