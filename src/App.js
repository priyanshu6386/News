import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent'
import News from './Components/News/News'
import About from './Components/About';
import Contact from './Components/Contact';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Pic from './Components/Pic'

function App() {

  return (
  
    
    <BrowserRouter>
    <NavbarComponent />
     <div className='center'>
     <Switch>
      <Route exact path='/'>
      <News/>
      </Route>
      <Route exact path='/about'>
      <About/>
      </Route>
      <Route exact path='/contact'>
      <Contact/>
      </Route>
      <Route exact path='/pic/:id'>
        <Pic/> 
      </Route>
      </Switch>
   
     </div>
     </BrowserRouter>
     
    
  );
}

export default App;
