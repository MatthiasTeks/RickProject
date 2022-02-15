import React from "react"

/* Library */
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

/* Components */
import BodyHome from "./components/Home.js";
import Navbar from "./components/Navbar";
import LineScroll from "./components/LineScroll.js";
import RickAnim from './components/RickSanchez.js';
import TinderRick from "./components/TinderRick.js";
import PlanetSlider from './components/PlanetSlider.js';
import PlanetDetails from './components/PlanetDetails.js';
import Shop from "./components/Shop";

/* Style */
import './style.css';
import './css/rickSanchez.css';
import './css/PlanetSlider.css';

/* Assets */
import rickSanchez from './assets/rickSanchez.png';
import textAreaBasic from './assets/bulleText.png'

/* Fonts */
import './fonts/get-schwifty.ttf'

/* Disable scrolling slide2 (cf docs react full page, useRef?) AfterSlideLoad?*/


class FullpageWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      classState : "imgAnim",
      id : "",
      details: null, 
      characters : null 
    };
  }
  


  getPlanetId(id, fullpageApi){ 

    // Multiple fetch au chargement de app.js. 
    
    // Fetch Location : Stock la data de l'api dans un props "details" qu'on fait passer dans notre composant. 

    // Fetch Characters : Au moment du fetch Location on récupère l'url de l'API Characters (data.residents). 
    //                    On parcours ensuite ces urls afin de creer un tableau d'objet pour y stocker nos données et les exploiter dans un props "characters".

    let arrayCharacters = [];

    fetch("https://rickandmortyapi.com/api/location/"+id)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({details:data});
      
          data.residents.map((chara, i, {length}) => {

            fetch(chara)
              .then((resp) => resp.json())
              .then((charadata) => {let tempObjectChara =
                {
                  id: charadata.id,
                  name: charadata.name,
                  status: charadata.status,
                  species: charadata.species,
                  gender: charadata.gender,
                  image: charadata.image,
                  episode: charadata.episode
                };
        
              arrayCharacters.push(tempObjectChara);  // On push toutes nos données dans notre tableau vide.
                if (length -1 === i){                 // Permet de passer notre tableau en state directement dans notre premier fetch, seulement si la condition est remplie.
                  this.setState({characters:arrayCharacters})
                }
              })
            })
        });   

    this.setState({id:id})  // On stock notre id dans un state afin de le faire passer en props dans notre composant
    fullpageApi.moveSlideLeft(); // Settings du module qui permet de naviguer dans notre fullpage

  }

  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }


    prevSlide (fullpageApi) {
      fullpageApi.moveSlideRight();
    }
  

  
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div id="slide1" className="section section1">
                <Navbar moveToOne={() => fullpageApi.moveTo(1)} moveToTwo={() => fullpageApi.moveTo(2)} moveToThree={() => fullpageApi.moveTo(3)} moveToFour={() => fullpageApi.moveTo(4)}/>
                <BodyHome />
                <RickAnim rickAnimation="rickFromLeft" rickImage={rickSanchez} rickTextArea={textAreaBasic} rickSay="Best website ever seen ! Blurp !" />
                <LineScroll />
              </div>
              <div className="section">
                <div id="slide2" className="slide">
                  <PlanetSlider onPlanetClick={(id) => this.getPlanetId(id, fullpageApi)} movePrevSlide={() => this.prevSlide(fullpageApi)} moveToOne={() => fullpageApi.moveTo(1)} moveToTwo={() => fullpageApi.moveTo(2)} moveToThree={() => fullpageApi.moveTo(3)} moveToFour={() => fullpageApi.moveTo(4)}/> {/* On passe la fonction qui permet de recuperer l'id de la planete cliquée et changer de slide au click */}
                </div>
                <div id="slide3" className="slide">
                  <button className="buttonBack" onClick={() => fullpageApi.moveSlideRight()}>«</button> 
                  <PlanetDetails id={this.state.id} details={this.state.details} characters={this.state.characters} noScrolling={() => fullpageApi.scrollHorizontally(false)}/> {/* On passe les props dans le composant */}
                </div>
              </div>
              <div id="slide5" className="section">
                <TinderRick moveToOne={() => fullpageApi.moveTo(1)} moveToTwo={() => fullpageApi.moveTo(2)} moveToThree={() => fullpageApi.moveTo(3)} moveToFour={() => fullpageApi.moveTo(4)}/>
              </div>
              <div id="slide6" className="section">
                <Shop moveToOne={() => fullpageApi.moveTo(1)} moveToTwo={() => fullpageApi.moveTo(2)} moveToThree={() => fullpageApi.moveTo(3)} moveToFour={() => fullpageApi.moveTo(4)}/>
              </div>
            </div>
          );
        }}
      />
    );
  }
}
export default FullpageWrapper;

