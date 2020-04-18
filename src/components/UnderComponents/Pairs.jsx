import React from 'react';

const Pairs = () => {
    return (
        <div className="pairs">
			<div className="header">
				<div className="currency">Валюта</div>
				<div className="rate">Курс</div>
			</div>
			<div className="pairs-list">
				<div className="pair">
					<div className="currency">USD/EUR</div>
					<div className="rate">1.2532</div>
				</div>
				<div className="pair">
					<div className="currency">USD/RUB</div>
					<div className="rate">74.2502</div>
				</div>
				<div className="pair">
					<div className="currency">USD/JPY</div>
					<div className="rate">5.7648</div>
				</div>
				<div className="pair">
					<div className="currency">EUR/ASD</div>
					<div className="rate">34.6592</div>
				</div>
				<div className="pair">
					<div className="currency">RUB/BYN</div>
					<div className="rate">0.3302</div>
				</div>
			</div>
		</div>
    )
}

export default Pairs;
