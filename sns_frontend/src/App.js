import React from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useEffect } from "react";
import Login from './components/Login';
import Home from './container/Home';
import { GoogleOAuthProvider } from '@react-oauth/google'


const App = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

		if (!User) navigate('/login');
	}, []);

	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_KEY}>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/*" element={<Home />} />
			</Routes>
		</GoogleOAuthProvider>
	)
}

export default App
