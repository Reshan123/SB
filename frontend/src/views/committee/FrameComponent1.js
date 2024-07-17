import "./FrameComponent1.css";
import image from '../../images/Committee_circ_back.png'

const FrameComponent1 = () => {
  return (
    <section className="f-r-a-m-e-wrapper">
      <div className="f-r-a-m-e">
        <div className="f-r-a-m-e1">
          <div className="f-r-a-m-e-child" />
          <img
            className="favpng-printed-circuit-board-e-icon"
            loading="eager"
            alt=""
            src={image}
          />
        </div>
        <div className="committee-of-ieee-student-bran-parent">
          <h1 className="committee-of-ieee-container">
            <p className="committee-of">Committee of</p>
            <p className="ieee-student-branch">IEEE Student Branch</p>
            <p className="of-sliit">of SLIIT</p>
          </h1>
          <div className="exploretext-parent">
            <div className="exploretext" />
            <div className="explore">Explore</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
