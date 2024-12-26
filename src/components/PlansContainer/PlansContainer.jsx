import { IconOutlineCheckCircle20 } from "../../Icons/IconOutlineCheckCircle20/IconOutlineCheckCircle20";
import { Basic } from "../Basic";
import { Button } from "../Button";
import './PlansContainer.css'
export function PlansContainer() {
    return (

        <>
            <div className="plancontainer">

                <div className="frame-8">
                    <Basic
                        buttonTypeDefaultStateClassName="design-component-instance-node"
                        className="BASIC-instance"
                        layer="https://c.animaapp.com/LJb56hOf/img/layer-1.svg"
                    />
                    <div className="BASIC-2">
                        <div className="frame-9">
                            <div className="BASIC-3">STANDARD</div>

                            <p className="free">
                                <span className="span">$14</span>

                                <span className="text-wrapper-15">/month</span>
                            </p>
                        </div>

                        <img
                            className="layer-2"
                            alt="Layer"
                            src="https://c.animaapp.com/LJb56hOf/img/layer-2.svg"
                        />

                        <div className="frame-10">
                            <div className="frame-11">
                                <IconOutlineCheckCircle20
                                    className="icon-outline-check-circle-20"
                                    color="#EAEAEB"
                                />
                                <div className="text-wrapper-16">3 prototypes</div>
                            </div>

                            <div className="frame-11">
                                <IconOutlineCheckCircle20
                                    className="icon-outline-check-circle-20"
                                    color="#EAEAEB"
                                />
                                <div className="text-wrapper-16">3 boards</div>
                            </div>

                            <div className="frame-11">
                                <IconOutlineCheckCircle20
                                    className="icon-outline-check-circle-20"
                                    color="#EAEAEB"
                                />
                                <div className="text-wrapper-16">Single user</div>
                            </div>

                            <div className="frame-11">
                                <IconOutlineCheckCircle20
                                    className="icon-outline-check-circle-20"
                                    color="#EAEAEB"
                                />
                                <div className="text-wrapper-16">Normal security</div>
                            </div>

                            <div className="frame-11">
                                <IconOutlineCheckCircle20
                                    className="icon-outline-check-circle-20"
                                    color="#EAEAEB"
                                />
                                <div className="text-wrapper-16">
                                    Permissions &amp; workflows
                                </div>
                            </div>
                        </div>

                        <Button
                            className="button-2"
                            divClassName="button-3"
                            state="default"
                            text="Choose Plan"
                            type="default"
                        />
                    </div>

                    <div className="BASIC-4">
                        <div className="frame-9">
                            <div className="BASIC-5">ENTERPRISE</div>

                            <p className="free-2">
                                <span className="text-wrapper-17">$50</span>

                                <span className="text-wrapper-18">/month</span>
                            </p>
                        </div>

                        <img
                            className="layer-2"
                            alt="Layer"
                            src="https://c.animaapp.com/LJb56hOf/img/layer-3.svg"
                        />

                        <div className="frame-10">
                            <div className="frame-11">
                                <IconOutlineCheckCircle20
                                    className="icon-outline-check-circle-20"
                                    color="#334155"
                                />
                                <div className="text-wrapper-19">3 prototypes</div>
                            </div>

                            <div className="frame-11">
                                <IconOutlineCheckCircle20
                                    className="icon-outline-check-circle-20"
                                    color="#334155"
                                />
                                <div className="text-wrapper-19">3 boards</div>
                            </div>

                            <div className="frame-11">
                                <IconOutlineCheckCircle20
                                    className="icon-outline-check-circle-20"
                                    color="#334155"
                                />
                                <div className="text-wrapper-19">Single user</div>
                            </div>

                            <div className="frame-11">
                                <IconOutlineCheckCircle20
                                    className="icon-outline-check-circle-20"
                                    color="#334155"
                                />
                                <div className="text-wrapper-19">Normal security</div>
                            </div>

                            <div className="frame-11">
                                <IconOutlineCheckCircle20
                                    className="icon-outline-check-circle-20"
                                    color="#334155"
                                />
                                <div className="text-wrapper-19">
                                    Permissions &amp; workflows
                                </div>
                            </div>
                        </div>

                        <Button
                            className="design-component-instance-node"
                            divClassName="button-4"
                            state="default"
                            text="Choose Plan"
                            type="default"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}