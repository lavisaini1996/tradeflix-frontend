import './AssestContainer.css'
import Crypto from '../../assets/crypto.png'
import Forex from '../../assets/forex.png'
import Gold from '../../assets/gold.png'
import Group from '../../assets/group.png'
import Indices from '../../assets/indices.png'
import Stock from '../../assets/stocks.png'
export function AssestContainer() {
    return (
        <>
            <div className="assestcontainer">
                {/* <div className="header">
                    <div className="head-sec">
                        <span>TRADING OPTION</span>
                    </div>
                </div> */}
                <div className="section-2">
                    <div className="section-3">
                        <div className="background-border">
                            <div className="heading-TRADING">TRADING OPTION</div>
                        </div>

                        <div className="heading-trading">Trading Assets</div>

                        <p className="p">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            <br />
                            commodo ligula eget dolor. Aenean massa.
                        </p>
                    </div>

                    <div className='blockcon'>
                        <div className="section-4">
                            <div className="background-border-2">
                                <img src={Stock} alt="" className='img' />

                                <div className="paragraph">
                                    <div className="text-wrapper-10">Stocks Trading Analysis</div>

                                    <div className="text-wrapper-11">Lorem ipsum dolor sit</div>
                                </div>
                            </div>

                            <div className="background-border-2">
                                <img
                                    className="img"
                                    alt="Forex png"
                                    src={Forex}
                                />

                                <div className="paragraph">
                                    <div className="text-wrapper-10">Forexs Trading Analysis</div>

                                    <div className="text-wrapper-11">Lorem ipsum dolor sit</div>
                                </div>
                            </div>

                            <div className="background-border-2">
                                <img
                                    className="img"
                                    alt="Gold png"
                                    src={Gold}
                                />

                                <div className="paragraph">
                                    <div className="text-wrapper-10">Commodities Trading</div>

                                    <div className="text-wrapper-11">Lorem ipsum dolor sit</div>
                                </div>
                            </div>
                            <div className="background-border-2">
                                <img
                                    className="img"
                                    alt="Indices png"
                                    src={Indices}
                                />

                                <div className="paragraph">
                                    <div className="text-wrapper-10">Stocks Indices</div>

                                    <div className="text-wrapper-11">Lorem ipsum dolor sit</div>
                                </div>
                            </div>

                            <div className="background-border-2">
                                <img
                                    className="img"
                                    alt="Crypto png"
                                    src={Crypto}
                                />

                                <div className="paragraph">
                                    <div className="text-wrapper-10">Cryptos Trading Analysis</div>

                                    <div className="text-wrapper-11">Lorem ipsum dolor sit</div>
                                </div>
                            </div>

                            <div className="background-border-2">
                                <img
                                    className="img"
                                    alt="Group png"
                                    src={Group}
                                />

                                <div className="paragraph">
                                    <div className="text-wrapper-10">Bonds Trading</div>

                                    <div className="text-wrapper-11">Lorem ipsum dolor sit</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}