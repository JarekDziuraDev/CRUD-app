
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Listemployeecomponent from './components/ListEmployeeComponent';
import Headercomponent from './components/HeaderComponent';
import Footercomponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
              <Headercomponent />
              <div className="container">
                <Switch>
                    <Route path = "/" exact component= {Listemployeecomponent}></Route>
                    <Route path = "/employees" component= {Listemployeecomponent}></Route>
                    <Route path = "/add-employee" component= {CreateEmployeeComponent}></Route>
                </Switch>
              </div>
              <Footercomponent />
        </Router>
    </div>
    
    
  );
}

export default App;
