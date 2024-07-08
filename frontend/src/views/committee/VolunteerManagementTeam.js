import janith from "../../images/committee members/Janith_Sachintha-Volunteer_Management_Team_Lead - Janith Sachintha-modified.png";
import './VolunteerManagementTeam.css';
import sandesh from "../../images/committee members/Sandesh Deshapriya_volunteer management team membe - Sandesh Deshapriya-modified.png";
import charith from "../../images/committee members/Charith Yohan_Volunteer Management Team - Charith Yohan-modified.png";

const VolunteerManagementTeam = () => {
    return (
        <div className="membership-development-team-fr">
      <div className="finance-container">
      <h3 className="membership-development-team">
        Volunteer Management Team
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
        <div className="leader-frame-parent">
          <div className="leader-frame">
            <div className="rectangle-parent8">
              <div className="frame-child9" />
              <img
                className="lead-pic-icon3"
                loading="eager"
                alt=""
                src={janith}
              />
            </div>
            <b className="pasan-senarath-leader-container">
              <p className="pasan-senarath1">Janith Sachintha</p>
              <p className="leader3">Leader</p>
            </b>
          </div>
          <div className="leader-frame1">
            <div className="rectangle-parent9">
              <div className="frame-child10" />
              <img
                className="member-icon7"
                loading="eager"
                alt=""
                src={sandesh}
              />
            </div>
            <b className="shanaya-pereira-member-container">
              <p className="shanaya-pereira">Sandesh Deshapriya</p>
              <p className="member7">Member</p>
            </b>
          </div>
          <div className="leader-frame1">
            <div className="rectangle-parent9">
              <div className="frame-child10" />
              <img
                className="member-icon7"
                loading="eager"
                alt=""
                src={charith}
              />
            </div>
            <b className="shanaya-pereira-member-container">
              <p className="shanaya-pereira">Charith Yohan</p>
              <p className="member7">Member</p>
            </b>
          </div>

        </div>
      </div>
    </div>
    )
}

export default VolunteerManagementTeam