import React from 'react';

const Pairs = (props) => {
	let listPairs = props.list.map((pair) => {
		return (
			<div className="pair" key={pair.ticker}>
				<div className="currency">{pair.ticker}</div>
				<div className="rate">{pair.bid}</div>
			</div>
		)
	})
	return (
		<div className="pairs">
			<div className="header">
				<div className="currency">Валюта</div>
				<div className="rate">Курс</div>
			</div>
			<div className="pairs-list">
				{listPairs}
			</div>
		</div>
	)
}

export default Pairs;
