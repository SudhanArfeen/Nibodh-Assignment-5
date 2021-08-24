import React from 'react'

export default function () {
    return (
        <div className="nature-event">
            <div className="row justify-content-around">
                <div className="col-4">
                    <div className="natureCard">
                        <h1 className="display-5 text-light">#Save Nature</h1>
                        <h2 className="text-white">IMPORTANCE OF WORLD ENVIORNMENT DAY.</h2>
                        <p className="text-white text-uppercase">World Environment Day, which is celebrated annually on June 5 across the globe, is one of the biggest events organised by the United Nations (UN) to generate awareness about the significance of nature. The day is celebrated to tell people that nature should be respected for its values</p>
                    </div>
                </div>
                <div className="col-6 upcomingEvent ">
                    <h2 className="display-6 text-black font-weight-bold">THINGS <span className="spanEvent">WE NEED TO REMEMBER</span></h2>
                    <div className="d-flex">
                        <span className="spanE"></span>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="calender">
                                <span className="digit">05</span>
                                <br />
                                <span className="month">JUNE</span>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="cal-head">
                                <p>
                                    WORLD ENVIORNMENT DAY
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 mt-3">
                            <div className="calender">
                                <span className="digit">22</span>
                                <br />
                                <span className="month">MARCH</span>
                            </div>
                        </div>
                        <div className="col-9 mt-3">
                            <div className="cal-head">
                                
                                <p>
                                WORLD WATER DAY.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}