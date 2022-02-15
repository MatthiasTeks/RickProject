import { useEffect, useState } from "react";
import { PlanetsData } from "../datas/PlanetsData";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import '../css/PlanetDetails.css'; // AXIOS MULTIPLE FETCH? https://www.youtube.com/watch?v=Mt3kxUvHORA
// import axios from "axios";

function PlanetDetails(props){

    // Realisation d'un switch case afin d'afficher les images en fonction de notre props.id

    function getLandscapeImg(){
        
        const planetDetails = props.id;

        
        switch(planetDetails){
            case 1 :
                return (
                    <>
                    <img className="planetImg" src={PlanetsData[0].landscapeImg}/>
                    <p className="planetInfos">{PlanetsData[0].infos}</p>
                    </>
                );
            break;

            case 4 :
                return (
                    <>
                    <img className="planetImg" src={PlanetsData[1].landscapeImg}/>
                    <p className="planetInfos">{PlanetsData[1].infos}</p>
                    </>
                );
            break;

            case 8 :
                return (
                    <>
                    <img className="planetImg" src={PlanetsData[2].landscapeImg}/>
                    <p className="planetInfos">{PlanetsData[2].infos}</p>
                    </>
                );
            break;

            case 9 :
                return (
                    <>
                    <img className="planetImg" src={PlanetsData[3].landscapeImg}/>
                    <p className="planetInfos">{PlanetsData[3].infos}</p>
                    </>
                );
            break;

            case 10 :
                return (
                    <>
                    <img className="planetImg" src={PlanetsData[4].landscapeImg}/>
                    <p className="planetInfos">{PlanetsData[4].infos}</p>
                    </>
                );
            break;

            case 11 :
                return (
                    <>
                    <img className="planetImg" src={PlanetsData[5].landscapeImg}/>
                    <p className="planetInfos">{PlanetsData[5].infos}</p>
                    </>
                );
            break;

            case 13 :
                return (
                    <>
                    <img className="planetImg" src={PlanetsData[6].landscapeImg}/>
                    <p className="planetInfos">{PlanetsData[6].infos}</p>
                    </>
                );
            break;
        }
    }

    return (
        <div scrollingOff={() => props.noScrolling()}>
            <div className="detailsContent">
            {
                props.details != null &&
                    <div className="planetContent">
                    <h2 className="planetTitle">{props.details.name}</h2>
                        {getLandscapeImg()}
                    </div>
            }

            {
                props.characters != null && 
                    <div className="charaContent">
                        <h2 className="charaTitle">Characters</h2>
                            <div className="charaDetails">   
                {
                    props.characters.map((chara) => {
                        return (
                            <div className="charaImg">
                                <img src={chara.image}/>
                                <div className="charaTooltip">
                                    <ul>
                                        <li><span className="boldText charaName"> {chara.name}</span></li>
                                        <li><span className="boldText">Gender:</span> {chara.gender}</li>
                                        <li><span className="boldText">Species:</span> {chara.species}</li>
                                        <li><span className="boldText">Status:</span> {chara.status}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
                            </div>
                    </div>
            }
            </div>
        </div>
    )
}

export default PlanetDetails



