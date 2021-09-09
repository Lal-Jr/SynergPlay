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
import { Grid, Button } from "@material-ui/core";

const HomePage = (props) => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					renderHomePage();
				</Route>
				<Route path="/join" component={RoomJoinPage} />
				<Route path="/create" component={RoomCreatePage} />
				<Route path="/room/:roomCode" component={Room} />
			</Switch>
		</Router>
	);
};

export default HomePage;
