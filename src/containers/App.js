import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import RobotList from '../components/RobotList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

import {setSearchField, setRequestRobots} from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField, 
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(setRequestRobots())
	}
}

function App(prop){

	useEffect(() =>{
		prop.onRequestRobots()
	}, []);

	const {searchField, onSearchChange, robots, isPending} = prop;

	const filteredRobots = robots.filter(robots =>{
		return robots.name.toLowerCase().includes(searchField.toLowerCase())
	});

	return isPending ?
		<h1>Loading</h1> : 
		(
		<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<Searchbox searchChange={onSearchChange}/>
		<Scroll>
			<RobotList robots={filteredRobots} />
		</Scroll>
		</div>);
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);