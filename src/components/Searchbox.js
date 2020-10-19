import React from 'react';

const Searchbox = (props) =>{
	return(
		<div className='pa2'>
		<input 
		onChange={props.searchChange}
		className='pa3 ba b--purple bg-lightest-blue'
		type='search' 
		placeholder='Search robots'/>
		</div>
		);
}

export default Searchbox;