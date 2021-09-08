import React from "react";
import RoomJoinPage from "./RoomJoinPage";
import RoomCreatePage from "./RoomCreatePage";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";
import Room from "./Room";

const HomePage = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<h1>HomePage</h1>
				</Route>
				<Route path="/join" component={RoomJoinPage} />
				<Route path="/create" component={RoomCreatePage} />
				<Route path="/room/:roomCode" component={Room} />
			</Switch>
		</Router>
	);
};

export default HomePage;
