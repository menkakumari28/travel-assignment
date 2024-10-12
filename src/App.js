import "./App.scss";
import Header from "./components/header/Header";
import Slider from "./components/carousel/Slider";
import Card from "./components/card/Card";

import image01 from "./assets/images/slider1.png";
import image02 from "./assets/images/slider2.png";
import image03 from "./assets/images/slider3.png";
import DownIcon from "./assets/images/arrow-down.svg";
import DestinationImg01 from "./assets/images/topDes01.png";
import DestinationImg02 from "./assets/images/topDes02.png";
import DestinationImg03 from "./assets/images/topDes03.png";
import DestinationImg04 from "./assets/images/topDes04.png";
import MoreImg01 from "./assets/images/more01.png";
import MoreImg02 from "./assets/images/more02.png";
import MoreImg03 from "./assets/images/more03.png";
import MoreImg04 from "./assets/images/more04.png";
import Footer from "./components/Footer/Footer";

function App() {
  const sliderImages = [image01, image02, image03];

  const topDestination = [
    { url: DestinationImg01, name: "Paraty", description: "Rio De janerio" },
    { url: DestinationImg02, name: "Morretes", description: "Parana" },
    { url: DestinationImg03, name: "Olinda", description: "Pernambuco" },
    {
      url: DestinationImg04,
      name: "Gramado",
      description: "Rio grande do sul",
    },
  ];

  const moreDestination = [
    { url: MoreImg01, name: "Estaing", description: "France" },
    { url: MoreImg02, name: "Vik i Myrda", description: "Iceland" },
    { url: MoreImg03, name: "Hamnoy villege", description: "Norway" },
    { url: MoreImg04, name: "Montego Bay", description: "Jamaica" },
  ];

  return (
    <div className="App">
      <Header />
      {/* =============== BEGIN: CAROUSEL ================= */}
      <div className="home_slider">
        <Slider carouselData={sliderImages} />
        <div className="scrolltoNext">
          <a href="#topDestination">
            <div className="animateImg">
              <img src={DownIcon} alt="" />
            </div>
            <p>
              Explore <br />
              Destinations
            </p>
          </a>
        </div>
      </div>
      {/* =============== END: CAROUSEL ================= */}

      {/* =============== BEGIN: TOP DESTINATION ================= */}
      <div id="topDestination" className="destination">
        <div className="maxwidthContent">
          <h4>top</h4>
          <h2>destinations</h2>
          <p>
            It's hard enough deciding to move, you don't have to worry about
            where to move to. These are some of the most popular and best
            locations to move to based on a number of factors.
          </p>
          <div className="destinationCard">
            {topDestination.map((item) => (
              <Card
                key={item.name}
                url={item.url}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      {/* =============== END: TOP DESTINATION ================= */}

      {/* =============== BEGIN: MORE DESTINATION ================= */}
      <div className="destination moreDestination">
        <div className="maxwidthContent">
          <h4 className="moreText">more</h4>
          <h2>destinations</h2>
          <p>
            Your peace of mind doesn't have to be tied to where everyone else
            is. we have a good number of travel of relocation destinations. Take
            your time and find the perfect one for you.
          </p>
          <div className="moredestinationCard">
            {moreDestination.map((item, i) => (
              <Card
                gridlayout={true}
                key={item.name}
                url={item.url}
                name={item.name}
                description={item.description}
                cardID={`more${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* =============== END: MORE DESTINATION ================= */}
      {/* =============== BEGIN:Footer ================= */}
      <Footer />
      {/* =============== END:Footer ================= */}
    </div>
  );
}

export default App;
