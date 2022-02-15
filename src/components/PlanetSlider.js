import { useEffect, useState } from "react";
import Slider from "react-slick";
import { PlanetsData } from "../datas/PlanetsData";
import {BsChevronDoubleLeft, BsChevronDoubleRight} from "react-icons/bs"
import PlanetDetails from "./PlanetDetails";
import Banner from "./Banner";



function PlanetSlider(props){

    
    const [imageIndex, setImageIndex] = useState(0)
    const [rickLocations, setRickLocations] = useState(null) 
    
    useEffect(() => {

        // On réalise un fetch de l'API afin de creer un tableau d'objets pour y fusionner notre Datas avec l'API Location, afin d'y ajouter des informations.

        let arrayLocations =[];
    
        for(let i = 0; i < PlanetsData.length; i++){
            fetch("https://rickandmortyapi.com/api/location/"+PlanetsData[i].id) // Cible l'id de la location souhaitée via notre data
            .then((resp) => resp.json())
            .then((data) => {let tempObjectLocation = 
                {
                    id: data.id,
                    planetImg : PlanetsData[i].planetImg,
                    name: data.name,
                    residents: data.residents,
                    url: data.url,
                    landscapeImg: PlanetsData[i].landscapeImg,
                    infos: PlanetsData[i].infos
                };

                arrayLocations.push(tempObjectLocation); // Creation de notre tableau

                if(arrayLocations.length === PlanetsData.length){ // Permet de rentrer notre tableau en state une fois que celui-ci sera rempli avec toutes les données souhaitées
                    setRickLocations(arrayLocations);
                }
            })
        }
    },[])

     const NextArrow =({onClick}) => {
        return(
             <div className="arrow next" onClick={onClick}>
                 <BsChevronDoubleRight/>
             </div>
         )
     }

     const PrevArrow =({onClick}) => {
         return(
             <div className="arrow prev" onClick={onClick}>
                 <BsChevronDoubleLeft/>
             </div>
         )
     }

    const settings ={   // Settings de notre slider (cf: react-slick documentation)
        infinite:true,
        lazyLoad:true,
        speed:300,
        slidesToShow:3,
        centerMode:true,
        centerPadding:0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next)
    };

    return(
        <>
        <ul className="componentNav">
            <li className="activePage">Planets</li>
            <li className="inactivePage" onClick={() => props.moveToOne(1)}>HOME</li>
            <li className="inactivePage" onClick={() => props.moveToThree(3)}>LOVEFINDERZZ</li>
            <li className="inactivePage" onClick={() => props.moveToFour(4)}>RICK'S SHOP</li>
        </ul>
        <div className="planetSlide">
            <Slider {...settings}> 
                {
                    rickLocations != null &&
                        rickLocations.map((img, index) =>{
                            return (
                                <div className={index === imageIndex ? "activeSlide" : "otherSlide"}>
                                    <h2 className="planetName">{img.name}</h2>
                                    <img onClick={() => props.onPlanetClick(img.id)} src={img.planetImg} alt={img.name}/> {/* Ici, le props qu'on a passé dans notre composant dans App.js nous permet de target l'id relié a notre planete afin de recuperer seulement les informations de la planete en question */}
                                </div>
                            ) 
                        })
                }
            </Slider>
        </div>
        </>
    )
}

export default PlanetSlider

