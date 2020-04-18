import React from 'react';

const BidsList = () => {
    return (
        <div className="bids">
            <div className="header">
                <div className="vector"></div>
                <div className="bid-amount">Ставка</div>
                <div className="currency">Валюта</div>
                <div className="rate">Курс</div>
                <div className="start">Начало</div>
                <div className="stop">Конец</div>
                <div className="balance">Остаток</div>
            </div>
            <div className="bids-list">
                <div className="bid">
                    <div className="vector"><i className="fas fa-chevron-up"></i></div>
                    <div className="bid-amount">200$</div>
                    <div className="currency">USD/EUR</div>
                    <div className="rate">1.2541</div>
                    <div className="start">13:21:38</div>
                    <div className="stop">13:31:38</div>
                    <div className="balance">0:36</div>
                    <div className="result"></div>
                </div>
                <div className="bid">
                    <div className="vector"><i className="fas fa-chevron-up"></i></div>
                    <div className="bid-amount">200$</div>
                    <div className="currency">USD/EUR</div>
                    <div className="rate">1.2541</div>
                    <div className="start">13:21:38</div>
                    <div className="stop">13:26:38</div>
                    <div className="balance">Закрыто</div>
                    <div className="result unsuccessfully"></div>
                </div>
                <div className="bid">
                    <div className="vector"><i className="fas fa-chevron-up"></i></div>
                    <div className="bid-amount">200$</div>
                    <div className="currency">USD/EUR</div>
                    <div className="rate">1.2541</div>
                    <div className="start">13:21:38</div>
                    <div className="stop">13:26:38</div>
                    <div className="balance">Закрыто</div>
                    <div className="result unsuccessfully"></div>
                </div>
                <div className="bid">
                    <div className="vector"><i className="fas fa-chevron-up"></i></div>
                    <div className="bid-amount">200$</div>
                    <div className="currency">USD/EUR</div>
                    <div className="rate">1.2541</div>
                    <div className="start">13:21:38</div>
                    <div className="stop">13:26:38</div>
                    <div className="balance">Закрыто</div>
                    <div className="result success"></div>
                </div>
                <div className="bid">
                    <div className="vector"><i className="fas fa-chevron-up"></i></div>
                    <div className="bid-amount">200$</div>
                    <div className="currency">USD/EUR</div>
                    <div className="rate">1.2541</div>
                    <div className="start">13:21:38</div>
                    <div className="stop">13:26:38</div>
                    <div className="balance">Закрыто</div>
                    <div className="result success"></div>
                </div>
            </div>
        </div>
    )
}

export default BidsList;