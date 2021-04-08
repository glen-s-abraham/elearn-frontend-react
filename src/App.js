import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Layout from './Containers/Layout/Layout';
function App() {
  return (
    <BrowserRouter>
      <div>
          <Layout/>
      </div>
     </BrowserRouter> 
  );
}

export default App;
