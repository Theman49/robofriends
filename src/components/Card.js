import React from 'react';

const Card = (props) => {
	return (
		<div className="bg-light-green pa3 ma2 dib br3 grow bw3  shadow-5 tc">
			<img alt="robots" src={`https://robohash.org/${props.id}?200x200`}/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;