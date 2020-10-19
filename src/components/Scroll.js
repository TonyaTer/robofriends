import React from 'react';

const Scroll = (props) =>{
	return(
		<div style={{overflow: 'scroll', overflowX: 'hidden', borderz: '1px solid black', height: '500px'}} className='scrollBar'>
			{props.children}
		</div>
		);
}


export default Scroll;