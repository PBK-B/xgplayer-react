import React, { Component } from 'react';
import ReactXgplayer from './xgplayer-react';
import './App.css';

let configMp4 = {
	id: 'vs1',
	url: '/xgplayer-demo.mp4',
};
let Mp4Player = null;
let rootStyle = {
	backgroundColor: 'rgba(0,0,0,0.87)',
};

export default function App() {
	const readyHandle = () => {
		console.log('Mp4 player ready!');
	};

	const completeHandle = () => {
		console.log('Mp4 player complete!');
	};

	const destroyHandle = () => {
		console.log('Mp4 player destroy!');
	};

	return (
		<div className="App">
			<ReactXgplayer
				rootStyle={rootStyle}
				config={configMp4}
				playerInit={(player) => {
					Mp4Player = player;
				}}
				readyHandle={() => {
					readyHandle();
				}}
				completeHandle={() => {
					completeHandle();
				}}
				destroyHandle={() => {
					destroyHandle();
				}}
			/>
		</div>
	);
}
