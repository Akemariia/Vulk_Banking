import "./style.css";
import image from "./Imagens/laptop-woman.svg";

function Container() {
  const estiloImage = {
    width: "30%",
  };
  return (
    <div className="rapper">
      <div className="container">
        <div className="textWithButton">
          <h1 className="h1txt">
            A Modular Banking Plataform REST API for your projects.
          </h1>
          <p className="ptxt">
            Algorithmically optimize bids, build campaigns, and automate your
            keyword workflows.
          </p>
          <div className="buttonsHero">
            <button className="buyVulk">Free Trial</button>

            <button className="demo">Demo</button>
          </div>
        </div>

        <div className="image"></div>
      </div>
      <img src={image} alt="" style={estiloImage} />
    </div>
  );
}
export default Container;
