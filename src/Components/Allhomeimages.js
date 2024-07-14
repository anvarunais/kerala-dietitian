import "./Allhomeimages.css";

function Allhomeimages(props) {
  return (
    <>
      <div className={props.cName}>
        <img className="home-img" alt="" src={props.HeroImg} />

        <div className="home-text">
          <h2>{props.welcomeheading}</h2>
          <h1>{props.mainheading}</h1>
          <p className="paragraph-text">{props.welcomeparagraph}</p>
          <a
            href="https://wa.me/917025040484?text= Hello I Saw UG DIET Website, i'm  interested to join with you!"
            target="_blank"
          >
            <button className="homeimgbtn">{props.moreinfo}</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Allhomeimages;
