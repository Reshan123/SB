import teamPhoto from '../../images/committee members/teamPhoto.jpg'

const WebDevelopmentTeam = () => {
    return (
        <>
            <div className="membership-development-team-fr">
                <div className="finance-container">
                    <h3 className="membership-development-team">
                        Web Development Team
                    </h3>
                </div>
                <div className="publicity-frame1">
                    <div className="lorem-ipsum-dolor-container4">
                        <b>Lorem ipsum dolor sit amet</b>
                        <span>
                            , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </span>
                    </div>
                    <div className="lead-pic-member">
                        <div style={{
                            width: '60%',
                        }}>
                            <img src={teamPhoto} alt="Team" style={{
                                width: '100%',
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WebDevelopmentTeam;