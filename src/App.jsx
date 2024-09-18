
import { Provider } from 'react-redux';
import './index.css'
import Counter from './redux/counter';
import store from './redux/store';
import { Weather } from './components/classComponents/weatherApi';


function App() {

  return (
    <>
    
    <Weather/>
    </>
  )
}

export default App
