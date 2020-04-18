import React from 'react';

const Graffic = () => {
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
            <div className="graffic-block"></div>
        </div>
    )
}

export default Graffic;