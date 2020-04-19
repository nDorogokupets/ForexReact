import React from 'react';

const BidStart = () => {
    return (
        <div className="bid">
			<div className="input">
				<div className="summ">
					<i className="fas fa-dollar-sign input-icon"></i>
					<input type="text" name="bid-value"/>
					<div className="calc">
						<div className="up"><i className="fas fa-chevron-up"></i></div>
						<div className="down"><i className="fas fa-chevron-down"></i></div>
					</div>
				</div>
				<div className="time">
					<i className="far fa-clock input-icon"></i>
					<input type="text" name="bid-value" />
					<div className="calc">
						<div className="up"><i className="fas fa-chevron-up"></i></div>
						<div className="down"><i className="fas fa-chevron-down"></i></div>
					</div>
				</div>
			</div>
			<div className="buttons">
				<button className="up"><i className="fas fa-chevron-up"></i></button>
				<button className="down"><i className="fas fa-chevron-down"></i></button>
			</div>
		</div>
    )
}

export default BidStart;
