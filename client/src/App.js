import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Register from "./components/Register/Register";
import { Route, Switch } from "react-router-dom";
function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<Header />
					<Main />
				</Route>
				<Route exact path='/register'>
					<Register />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
