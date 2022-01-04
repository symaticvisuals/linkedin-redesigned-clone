import {
	Button,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import tags from "../../data/tags";
import { getApi } from "../../utils/apis";
import { DialogUpdate } from "../User/User";
const useStyles = makeStyles({
	root: {
		background: "white",
	},
});
function EditProfile() {
	const { setOpen } = useContext(DialogUpdate);

	const axiosConfig = {
		withCredentials: true,
	};
	const classes = useStyles();
	const handleClose = () => {
		console.log(updatedUser);
		axios
			.put(getApi("api/user/updateProfile"), updatedUser, axiosConfig)
			.then((res) => {
				console.log(res);
				axios
					.put(
						getApi("api/user/updateProfile/intro"),
						{ intro: updatedUser.intro },
						axiosConfig
					)
					.then((res) => {
						console.log(res.data.data);
					})
					.then(() => {
						console.log("done");
						setOpen(false);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const user = useSelector((state) => state.user.user);
	const [updatedUser, setUpdatedUser] = React.useState({});

	return (
		<div className={classes.root}>
			<DialogTitle id='max-width-dialog-title'>Update Profile</DialogTitle>
			<DialogContent>
				<TextField
					variant='outlined'
					margin='normal'
					fullWidth
					id='name'
					// label='First Name'
					name='firstName'
					placeholder='First Name'
					value={user.firstName}
					defaultValue={user.firstName}
					onChange={(e) => {
						setUpdatedUser({ ...updatedUser, firstName: e.target.value });
					}}
				/>
				<TextField
					variant='outlined'
					margin='normal'
					fullWidth
					id='lastName'
					// label='Last Name'
					name='lastName'
					placeholder='Last Name'
					value={user.lastName}
					defaultValue={user.lastName}
					onChange={(e) => {
						setUpdatedUser({ ...updatedUser, lastName: e.target.value });
					}}
				/>
				<TextField
					variant='outlined'
					margin='normal'
					fullWidth
					id='Designation'
					// label='Designation'
					name='designation'
					placeholder='Designation'
					value={updatedUser.designation}
					desfaultValue={user.designation}
					onChange={(e) => {
						setUpdatedUser({ ...updatedUser, designation: e.target.value });
					}}
				/>
				<TextField
					variant='outlined'
					margin='normal'
					fullWidth
					id='aboutme'
					// label='About Me'
					value={updatedUser.intro}
					name='intro'
					placeholder='About Me'
					multiline
					rows={2}
					defaultValue={user.intro}
					onChange={(e) => {
						setUpdatedUser({ ...updatedUser, intro: e.target.value });
					}}
				/>
				<Autocomplete
					multiple
					id='tags-outlined'
					options={tags}
					getOptionLabel={(option) => option}
					defaultValue={user.tags}
					filterSelectedOptions
					onChange={(e, value) => {
						setUpdatedUser({ ...updatedUser, intrestFilters: value });
					}}
					openOnFocus={true}
					renderInput={(params) => (
						<TextField
							{...params}
							placeholder='Interests'
							fullWidth='true'
							variant='outlined'
							margin='normal'
							id='aboutme'
							label='Interests'
							name='intro'
						/>
					)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					Save Profile
				</Button>
			</DialogActions>
		</div>
	);
}

export default EditProfile;
