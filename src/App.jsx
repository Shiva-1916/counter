
import { Provider } from 'react-redux';
import './index.css'
import Counter from './redux/counter';
import store from './redux/store';


function App() {

  return (
    <>
    
    <Provider store={store}>
    <Counter/>
    </Provider>
    </>
  )
}

export default App
