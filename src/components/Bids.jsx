import React from 'react';
import BidStart from './UnderComponents/BidStart';
import BidsList from './UnderComponents/BidsList';

const BidsBlock = () => {
    return (
        <div className="bids-block">
            <BidsList />
            <BidStart />
        </div>
    )
}

export default BidsBlock;