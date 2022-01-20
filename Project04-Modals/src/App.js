import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		setUsersList((prevUserList) => {
			return [...prevUserList, { name: uName, age: uAge, id: Math.random() }];
		});
	};

	// Wrappers/Fragments can be written in 2 ways:
	// <React.Fragment></React.Fragment>
	// <></>

	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</>
	);
}

export default App;
