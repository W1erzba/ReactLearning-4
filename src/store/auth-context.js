import React from 'react';

const AuthContext = React.createContext({
	// is not an component but object with contain component
	isLoggedIn: false,
});

export default AuthContext;
