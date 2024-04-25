import FrameComponent1 from "../components/FrameComponent1";
import ExecutiveCommittee from "../components/ExecutiveCommittee";
import EditorialTeam from "../components/EditorialTeam";
import PublicityTeam from "../components/PublicityTeam";
import MembershipDevTeam from "../components/MembershipDevTeam";
import FinanceTeam from "../components/FinanceTeam";
import "./SBCommittee.css";

const SBCommittee = () => {
  return (
    <div className="sb-committee">
      <FrameComponent1 />
      <ExecutiveCommittee />
      <section className="frame-section">
        <div className="frame-group">
          <EditorialTeam />
          <PublicityTeam />
          <MembershipDevTeam />
          <FinanceTeam />
        </div>
      </section>
    </div>
  );
};

export default SBCommittee;
