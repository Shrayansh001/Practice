import Header from "./components/Header/index.js";
import Home from "./pages/home/home.js"
import AddExpense from "./pages/addExpense/index.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
       <Header/>
      <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/add-expense" component={AddExpense} />
      </Switch>
       <div className="Footer">Footer</div>
    </Router>
  );
}

export default App;
