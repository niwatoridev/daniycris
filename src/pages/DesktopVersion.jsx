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

function DesktopVersion() {
  return (
    <div className="App">
      <div className="body">
        <img
          className="backgroundImgOne"
          src={flowersIconsOne}
          alt="flowersImgOne"
        ></img>
        <img
          className="backgroundImgTwo"
          src={flowersIconsTwo}
          alt="flowersImgTwo"
        ></img>
        <img src={titleImg} className="titleImg" alt="titleImg"></img>
        <div className="iconsContainer">
          <div className="iconSubContainer">
            <img className="icon" src={locationIcon} alt="locationIcon"></img>
          </div>
          <div className="iconSubContainer">
            <img
              className="icon"
              src={confirmationIcon}
              alt="locationIcon"
            ></img>
          </div>
          <div className="iconSubContainer">
            <img className="icon" src={giftsIcon} alt="locationIcon"></img>
          </div>
        </div>
        <div className="mainContainer">
          <div className="locationsContainer">
            <div className="locationsContainerFirstChild">
              <a
                href="https://maps.app.goo.gl/PhX4qHVn7sujPGEP6?g_st=iw"
                target="_blank"
                rel="noreferrer"
              >
                <img className="frameImg" src={misaFrame} alt="frame"></img>
              </a>
              <a
                href="https://maps.app.goo.gl/yBtgSYfb4v2F23fTA?g_st=iw"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="frameImg"
                  src={recepcionFrame}
                  alt="frame"
                ></img>
              </a>
            </div>
          </div>
          <div className="confirmationContainer">
            <div className="confirmationContainerFirstChild">
              <a
                href="https://forms.gle/H4y73tPjZoJxQizBA"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="frameImg"
                  src={confirmationFrame}
                  alt="frame"
                ></img>
              </a>
              <a
                href="https://forms.gle/H4y73tPjZoJxQizBA"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="frameImgBlank"
                  src={confirmationFrame}
                  alt="frame"
                ></img>
              </a>
            </div>
          </div>
          <div className="giftsContainer">
            <div className="giftsContainerFirstChild">
              <a
                href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51464942"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="frameImg"
                  src={liverpoolFrame}
                  alt="frame"
                ></img>
              </a>
              <a
                href="https://www.amazon.com.mx/wedding/share/boda-daniycris"
                target="_blank"
                rel="noreferrer"
              >
                <img className="frameImg" src={amazonFrame} alt="frame"></img>
              </a>
            </div>
          </div>
        </div>
        <img
          className="charactersImg"
          src={characters}
          alt="charactersImg"
        ></img>
      </div>
    </div>
  );
}

export default DesktopVersion;
