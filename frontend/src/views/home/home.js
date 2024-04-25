import './style.css';

const Home = () => {
    return ( 
        <>
            <div className="Header">
                <div className="HeaderText">
                    <div className="HeaderText1">IEEE STUDENT BRANCH</div>
                    <div className="HeaderText2">SLIIT</div>
                </div>
                <div className="HeaderJoinUs">
                    <button className="HeaderJoinUsButton">Join Us</button>
                </div>
            </div>
            <div className="WelcomeSection">
                <div className="WelcomeSectionContent">
                    <div className="WelcomeSectionText">
                        <div className="WelcomeSectionTextHeading">Welcome To IEEE Student Branch of SLIIT !</div>
                        <div className="WelcomeSectionTextPara">Since our inception in 2011, It has been one of the most famous student chapters in Sri Lanka.
    Pioneering a variety of projects in a variety of fields, including technical projects and community service as our student members including seminars and career support workshops in science and technical areas and personal development programs to improve the productivity of their achievements.
                        </div>
                        <div className="WelcomeSectionTextButton"><button>About Us</button></div>
                    </div>  
                </div>    
            </div>
            <div className="Chapters">
                <div className="ChaptersContainer">
                    <div className="ChapterCard">
                        <div className="ChapterTitle"></div>
                        <div className="ChapterImage"></div>
                        <div className="ChapeterDescription"></div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Home;