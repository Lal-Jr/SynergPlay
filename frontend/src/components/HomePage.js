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
					<h1>HomePage</h1>
					<Grid item xs={12} align="center">
						<Button
							variant="contained"
							color="secondary"
							to="/create"
							component={Link}>
							create
						</Button>
						<Button
							variant="contained"
							color="primary"
							to="/join"
							component={Link}>
							join
						</Button>
					</Grid>
				</Route>
				<Route path="/join" component={RoomJoinPage} />
				<Route path="/create" component={RoomCreatePage} />
				<Route path="/room/:roomCode" component={Room} />
			</Switch>
		</Router>
	);
};

export default HomePage;
