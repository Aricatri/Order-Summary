import music from "./img/icon-music.svg";
import './Mainbox.css';
function Mainbox() {
    return (
      <div className="service-type">
        <div className="icon-container">
        <img className="icon_img" src={music}/>
        </div>
        <div className="text-container">
                <div className="annual-title">
                    <p className="annual1">Annual Plan</p>
                </div>
                <div className="annual-price">
                    <p className="annual2">$59.99/year</p>
                </div>
            </div>
            <div className="button-container">
                <button className="change-button">Change</button>
            </div>
      </div>
    );
}

export default Mainbox;
