import React from "react";
import './body.css'
import person1 from './images/person1.jpg';
import time1 from './logo/time1.png'
import person2 from './images/person2.jpg';
import Card from 'react-bootstrap/Card';
import work from './logo/work.png';
import away from './logo/away.png';
import settings from './images/settings.jpg';
import calender from './logo/calender.png'
import person3 from './images/person3.jpg';
import person4 from './images/person4.jpg';


function Person(){
    const TOTALTASKS=71;
    const PENDINGTASKS=14;
    const TOTALPROJECTS=2;
    const LEAVETAKEN=4.5;
    const REMANINGLEAVE=12;
    const APPROVED=5.0;
    const REMANING=15;
    return(
        <div className="body">
            <div className="header bg-white">
                <div className="profile">
                    <img src={person1}
                    alt="profile"
                    className="picture"/>

                </div>
                <div className="johndoe">
                  <h3 className="john"><b>Welcome, John Doe</b></h3>
                  <span className="date">Monday, 20 May 2023</span>
                </div>
            </div>
            <div className="info">
                <div className="row">
                    <div className="col-8 main-info">
                        <h4 className="section-heading">TODAY</h4>
                        <Card>
                            <Card.Body className='vertical'>
                              <div className="card-text">
                                <img src={time1}
                                alt="logo"
                                className="logo-pic"/>
                                <span className="text-color-red">Richard Mile is off sick today</span>
                                <div className="profile-pic-card">
                                    <img src={person2}
                                    alt="profile"
                                    className="profile-pic-card"/>
                                </div>
                              </div>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Body className="vertical">
                            <div className="card-text">
                                    <img src={away}
                                    alt="Logo"
                                    className="logo-pic"/>
                                <span>You are away today</span>
                                <div className="profile-pic-card">
                                    <img
                                    src={person1}
                                    alt="profile"
                                    className="profile-pic-card"/>
                                </div>
                            </div>
                              
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Body className="vertical">
                            <div className="card-text">
                                    <img src={work}
                                    alt="Logo"
                                    className="logo-pic"/>
                                <span>You are working from home today</span>
                                <div className="profile-pic-card">
                                    <img
                                    src={person1}
                                    alt="profile"
                                    className="profile-pic-card"/>
                                </div>
                            </div>
                              
                            </Card.Body>
                        </Card>
                        <h4 className="section-heading">TOMORROW</h4>
                        <Card>
                            <Card.Body className='vertical'>
                              <div className="card-text">
                                <img src={away}
                                alt="logo"
                                className="logo-pic"/>
                                <span>2 People will be away Tommrow</span>
                                <div className="profile-pic-card">
                                    <img src={person3}
                                    alt="profile"
                                    className="profile-pic-card"/>
                                    <img src={person4}
                                    alt="profile"
                                    className="profile-pic-card-overlap"/>
                                </div>
                              </div>
                            </Card.Body>
                        </Card>
                        <h4 className="section-heading">NEXT SEVEN DAYS</h4>
                        <Card>
                            <Card.Body className='vertical'>
                              <div className="card-text">
                                <img src={away}
                                alt="logo"
                                className="logo-pic"/>
                                <span>2 People are going to be away </span>
                                <div className="profile-pic-card">
                                    <img src={person3}
                                    alt="profile"
                                    className="profile-pic-card"/>
                                    <img src={person4}
                                    alt="profile"
                                    className="profile-pic-card-overlap"/>
                                </div>
                              </div>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Body className='vertical'>
                              <div className="card-text">
                                <img src={time1}
                                alt="logo"
                                className="logo-pic"/>
                                <span>Your first day is going to be on thursday </span>
                                <div className="profile-pic-card">
                                    <img src={person1}
                                    alt="profile"
                                    className="profile-pic-card"/>
                                </div>
                              </div>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Body className='vertical'>
                              <div className="card-text">
                                <img src={calender}
                                alt="logo"
                                className="logo-pic"/>
                                <span>Its Spring holiday on Monday </span>
                                <div className="profile-pic-card">
                                    <img src={person3}
                                    alt="profile"
                                    className="profile-pic-card"/>
                                </div>
                              </div>
                            </Card.Body>
                        </Card>
                        <br/>

                          


                    </div>
                    <div className="col-4 sidebar">
                        <h4 className="project-heading">PROJECTS</h4>
                        <Card>
                            <Card.Body classname='vertical'>
                                <div className="pro-1">
                                    <div className="pro-1-1">
                                        <p className="center1">{TOTALTASKS}</p>
                                        <p>TOTALTASKS</p>
                                    </div>
                                    <div className="linee"></div>
                                    <div className="pro-1-1">
                                        <p className="center">{PENDINGTASKS}</p>
                                        <p>PENDINGTASKS</p>

                                    </div>
                                </div>
                                <div className="pro-2">
                                    <div className="pro-2-1">
                                        <p className="center">{TOTALPROJECTS}</p>
                                        <p>TOTALPROJECTS</p>

                                    </div>

                                </div>




                 


                            </Card.Body>
                        </Card>

                        <h4 className="project-heading">YOUR LEAVE</h4>
                        <Card>
                            <Card.Body classname='thicker-text-vertically-centered'>
                                <div className="pro-1">
                                    <div className="pro-1-1">
                                        <p className="center1">{LEAVETAKEN}</p>
                                        <p>LEAVETAKEN</p>
                                    </div>
                                    <div className="linee"></div>
                                    <div className="pro-1-1">
                                        <p className="center">{REMANINGLEAVE}</p>
                                        <p>REMAININGLEAVE</p>

                                    </div>
                                </div>
                                
                                <div className="button1">
                                    <button className="button" size="sm">APPLY LEAVE</button>
                                </div>
                               

                       </Card.Body>
                       </Card>




















        

                    

                        <h4 className="project-heading">YOUR TIME OFF ALLOWANCE</h4>
                        <Card>
                            <Card.Body classname='thicker-text-vertically-centered'>
                                <div className="pro-1">
                                    <div className="pro-1-1">
                                        <p className="center1">{APPROVED}</p>
                                        <p>LEAVETAKEN</p>
                                    </div>
                                    <div className="linee"></div>
                                    <div className="pro-1-1">
                                        <p className="center">{REMANING}</p>
                                        <p>REMANING</p>

                                    </div>
                                </div>
                              
                                <div className="button1">
                                    <button className="button" size="sm">APPLY TIME OFF</button>
                                </div>
                               

                       </Card.Body>
                       </Card>
































                   
                    <h4 className="project-heading">UPCOMING HOLIDAY</h4>
                    <Card>
                        <Card.Body className="thicker-text vertically-centered ">
                            <div className="card-text3">
                            <div className="leave-info">
                                <div className="leave-label">Mon 20 May 2023-Ramzan</div>
                             </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>


                </div>
            </div>

            <img
            src={settings}
            alt="set"
            className="settings-pic"/>
        </div>
    )
}










export default Person;




























































































