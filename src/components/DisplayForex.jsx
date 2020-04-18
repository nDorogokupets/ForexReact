import React from 'react';
import Graffic from './UnderComponents/Graffic';
import Pairs from './UnderComponents/Pairs';

const DisplayForex = () => {
    return (
        <div className="display-forex">
            <Graffic />
            <Pairs />
        </div>
    )
}

export default DisplayForex;