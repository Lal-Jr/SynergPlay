import React, { useState } from "react";
import {
	Button,
	Grid,
	Typography,
	TextField,
	FormHelperText,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const RoomCreatePage = (props) => {
	const [votesToSkip, setVotesToSkip] = useState("2");
	const [guestCanPause, setGuestCanPause] = useState(true);

	const ButtonPressed = () => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				votes_to_skip: votesToSkip,
				guest_can_pause: guestCanPause,
			}),
		};
		fetch("/api/create-room", requestOptions)
			.then((response) => response.json())
			.then((data) => props.history.push("/room/" + data.code));
	};

	return (
		<>
			<Grid container spacing={1}>
				<Grid item xs={12} align="center">
					<Typography component="h4" variant="h4">
						Create A Room
					</Typography>
				</Grid>
				<Grid item xs={12} align="center">
					<FormControl component="fieldset">
						<FormHelperText>
							<div align="center">
								Guest Control of Playback State
							</div>
						</FormHelperText>
						<RadioGroup
							row
							defaultValue="true"
							onChange={(e) =>
								setGuestCanPause(
									e.target.value === "true" ? true : false
								)
							}>
							<FormControlLabel
								value="true"
								control={<Radio color="primary" />}
								label="Play/Pause"
								labelPlacement="bottom"
							/>
							<FormControlLabel
								value="false"
								control={<Radio color="secondary" />}
								label="No Control"
								labelPlacement="bottom"
							/>
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={12} align="center">
					<FormControl>
						<TextField
							required="true"
							type="number"
							onChange={(e) => setVotesToSkip(e.target.value)}
							defaultValue={votesToSkip}
							inputProps={{
								min: 1,
								style: { textAlign: "center" },
							}}
						/>
						<FormHelperText>
							<div align="center">Votes Required to Skip</div>
						</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12} align="center">
					<Button
						color="primary"
						variant="contained"
						onClick={ButtonPressed}>
						Create a Room
					</Button>
				</Grid>
				<Grid item xs={12} align="center">
					<Button
						color="secondary"
						variant="contained"
						to="/"
						component={Link}>
						Back
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

export default RoomCreatePage;
