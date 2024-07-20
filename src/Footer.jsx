import "./style.css";
import Asuna from "./Imagens/asuna.svg";
import Vonmo from "./Imagens/vonmo.svg";
import Covenant from "./Imagens/covenant.svg";
import Grubspot from "./Imagens/grubspot.svg";
import Infinite from "./Imagens/infinite.svg";

function Footer() {
  const styleLogo = {
    width: "10vh",
    height: "10vh",
    margin: "7px",
  };

  return (
    <div className="Footer">
      <div>
        <img src={Asuna} alt="" style={styleLogo} />
      </div>
      <div>
        <img src={Vonmo} alt="" style={styleLogo} />
      </div>
      <div>
        <img src={Covenant} alt="" style={styleLogo} />
      </div>
      <div>
        <img src={Grubspot} alt="" style={styleLogo} />
      </div>
      <div>
        <img src={Infinite} alt="" style={styleLogo} />
      </div>
    </div>
  );
}
export default Footer;
