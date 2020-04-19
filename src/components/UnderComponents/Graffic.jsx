import React from 'react';
import CanvasGraph from './CanvasGraph';

const Graffic = (props) => {
    return (
        <div className="graffic">
            <ul className="pairs">
                <li>
                    <p>USD/EUR</p>
                    <div className="diff">
                        <span className="price">1.253</span>
                        <span className="up">+0.0231</span>
                    </div>
                </li>
                <li>
                    <p>USD/EUR</p>
                    <div className="diff">
                        <span className="price">1.253</span>
                        <span className="down">-0.0231</span>
                    </div>
                </li>
                <li>
                    <p>USD/EUR</p>
                    <div className="diff">
                        <span className="price">1.253</span>
                        <span className="down">-0.0231</span>
                    </div>
                </li>
                <li>
                    <p>USD/EUR</p>
                    <div className="diff">
                        <span className="price">1.253</span>
                        <span className="up">+0.0231</span>
                    </div>
                </li>
            </ul>
            <CanvasGraph list={props.list}/>
        </div>
    )
}

export default Graffic;