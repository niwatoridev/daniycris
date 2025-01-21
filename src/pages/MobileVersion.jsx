import "./Pages.css";
import flowersIconsOne from "../media/img/elementos11.png";
import flowersIconsTwo from "../media/img/elementos10.png";
import misaFrame from "../media/img/frames/elementoss.png";
import recepcionFrame from "../media/img/frames/elementoss2.png";
import confirmationFrame from "../media/img/frames/elementoss3.png";
import liverpoolFrame from "../media/img/frames/elementoss4.png";
import amazonFrame from "../media/img/frames/elementoss5.png";
import locationIcon from "../media/img/mynaui--location.svg";
import confirmationIcon from "../media/img/uil--envelope-check.svg";
import giftsIcon from "../media/img/mdi-light--gift.svg";
import titleImg from "../media/img/frames/elementoss11.png";
import characters from "../media/img/frames/elementoss8.png";

function MobileVersion() {
  return (
    <div className="App">
      <div className="bodyMobile">
        <img
          className="charactersImgMobile"
          src={characters}
          alt="charactersImg"
        ></img>
        <img
          className="backgroundImgOneMobile"
          src={flowersIconsOne}
          alt="flowersImgOne"
        ></img>
        <img
          className="backgroundImgTwoMobile"
          src={flowersIconsTwo}
          alt="flowersImgTwo"
        ></img>
        <img src={titleImg} className="titleImgMobile" alt="titleImg"></img>
        <div className="mainContainerMobile">
          <div className="confirmationContainerMobile">
            <div className="confirmationContainerFirstChildMobile">
              <img
                className="iconMobile"
                src={confirmationIcon}
                alt="confirmationIcon"
              ></img>
              <a
                href="https://forms.gle/H4y73tPjZoJxQizBA"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="frameImgMobile"
                  src={confirmationFrame}
                  alt="frame"
                ></img>
              </a>
            </div>
          </div>
          <div className="locationsContainerMobile">
            <div className="locationsContainerFirstChildMobile">
              <img
                className="iconMobile"
                src={locationIcon}
                alt="locationIcon"
              ></img>
              <a
                href="https://maps.app.goo.gl/PhX4qHVn7sujPGEP6?g_st=iw"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="frameImgMobile"
                  src={misaFrame}
                  alt="frame"
                ></img>
              </a>
              <a
                href="https://maps.app.goo.gl/yBtgSYfb4v2F23fTA?g_st=iw"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="frameImgMobile"
                  src={recepcionFrame}
                  alt="frame"
                ></img>
              </a>
            </div>
          </div>
          <div className="giftsContainerMobile">
            <div className="giftsContainerFirstChildMobile">
              <img
                className="iconMobile"
                src={giftsIcon}
                alt="locationIcon"
              ></img>
              <a
                href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51464942"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="frameImgMobile"
                  src={liverpoolFrame}
                  alt="frame"
                ></img>
              </a>
              <a
                href="https://www.amazon.com.mx/wedding/share/boda-daniycris"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="frameImgMobile"
                  src={amazonFrame}
                  alt="frame"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileVersion;
