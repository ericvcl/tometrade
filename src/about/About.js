import React from 'react';

function About() {
    return (
        <div>
            {/* <!--"Blurb Box" Start--> */}
            <div className="blurb-box position-relative text-left bg-blurb p-3 m-sm-3 mb-sm-4" aria-label="stack of books" style={{
                backgroundImage: `url("img/blurb.jpg")`
            }}>
                <div className="blurb-text pl-lg-4 mb-0 my-4">
                    <h1 className="display-5 font-weight-bold">TomeTrade</h1>
                    <p className="font-weight-normal lead">Welcome to TomeTrade! We are a service that allows you to trade
                    textbooks and other tomes with fellow students at your university. We take the middleman out of
                    the equation and our services are completely free. Swapping your books and finding new reads is
                    just a few easy steps away! </p>
                </div>

                <div className="mx-auto learn-more text-center font-weight-bold display-5"><a href="#get-started"><i
                    className="fa fa-chevron-circle-down learn-more-button"></i></a></div>
            </div>
            {/* <!--"Blurb Box" End--> */}

            {/* <!-- "Get Started" Bar Start--> */}
            <div className="mx-auto get-started-bar text-center font-weight-bold display-5" id="get-started"> How to get started</div>
            {/* <!-- "Get Started" Bar End--> */}

            {/* <!-- Cards --> */}
            <section className="howto-cards">
                <div className="cards py-4">
                    <div className="container">
                        <div className="row mx-auto d-flex justify-content-center col-12 equal">
                            <div className="col-md-6 col-lg-4 d-flex">
                                <div className="card mb-4 box-shadow card-about">
                                    <div className="mx-auto mt-3" aria-label="Create Profile Image"></div>
                                    <div className="card-body">
                                        <div className="icon">
                                            <img src="img/profile.png" alt="profile icon" className="pb-3"></img>
                                        </div>
                                        <p className="font-weight-bold text-center">1. Create Profile</p>
                                        <p className="card-text text-center">Select Sign Up/Login and set up a username
                                        and password. Be sure to specify which
                                        university you attend so we can match you with fellow students. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex">
                                <div className="card mb-4 box-shadow card-about">
                                    <div className="mx-auto mt-3" aria-label="Add Books Image"></div>
                                    <div className="card-body">
                                        <div className="icon">
                                            <img src="img/add.png" alt="add books icon" className="pb-3"></img>
                                        </div>
                                        <p className="font-weight-bold text-center">2. Add Books</p>
                                        <p className="card-text text-center">Head over to the Home Page and select the 'Edit'
                                        button under each section to add the books you have
                                        and books you want. Save your changes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex">
                                <div className="card mb-4 box-shadow card-about">
                                    <div className="mx-auto mt-3" aria-label="Match Image"></div>
                                    <div className="card-body">
                                        <div className="icon">
                                            <img src="img/match.png" alt="match icon" className="pb-3"></img>
                                        </div>
                                        <p className="font-weight-bold text-center">3. Match</p>
                                        <p className="card-text text-center">Based on the books you have and want, we'll match
                                        you to other students in your university! Click the 'Details' button under each
                                        suggested match to learn more. You can also browse through recent book listings
                                        under the Discover section.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex">
                                <div className="card mb-4 box-shadow card-about">
                                    <div className="mx-auto mt-3" aria-label="Check Mark Image"></div>
                                    <div className="card-body">
                                        <div className="icon">
                                            <img src="img/confirm.png" alt="confirm icon" className="pb-3"></img>
                                        </div>
                                        <p className="font-weight-bold text-center">4. Confirm</p>
                                        <p className="card-text text-center">Once you've decided you want to trade tomes with
                                        another student, confirm your interest. If they also confirm, you'll be able to
                                        exchange contact information and communicate trading plans using whatever
                                        platform suits you best.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex">
                                <div className="card mb-4 box-shadow card-about">
                                    <div className="mx-auto mt-3" aria-label="Exchange Books Image"></div>
                                    <div className="card-body">
                                        <div className="icon">
                                            <img src="img/exchange.png" alt="exchange icon" className="pb-3"></img>
                                        </div>
                                        <p className="font-weight-bold text-center">5. Exchange</p>
                                        <p className="card-text text-center">Trade tomes with the other student! Remember to
                                        update your profile to reflect your completed trade. Savor the
                                        simplicity of the transaction and enjoy your new reading material, whether it be
                                        for class or for leisure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;

