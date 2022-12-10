import './App.css';
import { Provider } from 'react-redux';

//Components
import Todo from './components/Todo';

//Store
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
