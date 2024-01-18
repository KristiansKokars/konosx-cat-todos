'use client';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import React from 'react'

const LoginBtn: NextPage =  (): JSX.Element => {
	return (
		<button
			onClick={() => {
				signIn();
			}}
			className="btn"
		>
			SIGN IN
		</button>
	);
};

export default LoginBtn