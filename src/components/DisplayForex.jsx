import React from 'react';
import Graffic from './UnderComponents/Graffic';
import Pairs from './UnderComponents/Pairs';

const DisplayForex = (props) => {
    return (
        <div className="display-forex">
            <Graffic list={props.list}/>
            <Pairs list={props.list}/>
        </div>
    )
}

export default DisplayForex;