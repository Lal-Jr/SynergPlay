import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const RoomJoinPage = (props) => {
	const [error, setError] = useState("");
	const [roomCode, setRoomCode] = useState("");

	const ButtonPressed = () => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				code: roomCode,
			}),
		};

		fetch("/api/join-room", requestOptions)
			.then((response) => {
				if (response.ok) {
					props.history.push(`/room/${roomCode}`);
				} else {
					setError("Room Not Found");
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<Grid container spacing={1} alignItems="center">
			<Grid item xs={12} align="center">
				<Typography variant="h4" component="h4">
					Join a Room
				</Typography>
				<Grid item xs={12} align="center">
					<TextField
						error={error}
						label="Code"
						placeholder="Enter a Room Code"
						value={roomCode}
						helperText={error}
						variant="outlined"
						onChange={(e) => setRoomCode(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12} align="center">
					<Button
						variant="contained"
						color="primary"
						onClick={ButtonPressed}>
						Enter Room
					</Button>
				</Grid>
				<Grid item xs={12} align="center">
					<Button
						variant="contained"
						color="secondary"
						to="/"
						component={Link}>
						Back
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default RoomJoinPage;
