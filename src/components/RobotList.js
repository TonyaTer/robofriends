import React from 'react';
import Card from './Card';

const RobotList = (props) => {
	return props.robots.map(item => {
		return <Card key={item.id}
		id={item.id}
		name={item.name}
		email={item.email}/>
	});
} 

export default RobotList;