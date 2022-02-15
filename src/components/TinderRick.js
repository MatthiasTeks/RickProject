import React, { useEffect, useRef, useState } from 'react'

/* Library */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Icons */
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

/* Style */
import '../css/tinderRick.css'

/* Assets */
import tindeRicks from '../assets/tinderick.png'
import RickTravel from '../assets/rickstravel.png'
import MatchTinder from '../assets/match.png'

let TinderRick = (props) => {

    const [purpose, setPurpose] = useState(null)
    const [match, setMatch] = useState(null)
    const [chat, setChat] = useState(false)
    const [inputContent, setInputContent] = useState(null)

    const tinder = useRef();
    const msg2 = useRef();
    const contentMsg2 = useRef();

    let getPurpose = (from) => {
        let randomCharacter = Math.floor(Math.random() * 671);
        let luckyMatch = Math.floor(Math.random() *4);
        let isMatching = 2;

        console.log(from)

        fetch("https://rickandmortyapi.com/api/character/"+randomCharacter)
        .then((resp)=>resp.json())
        .then((data)=>setPurpose(data));

        if(from === 'like' && luckyMatch === isMatching && chat != true){
            fetch("https://rickandmortyapi.com/api/character/"+randomCharacter)
            .then((resp)=>resp.json())
            .then((data)=>setMatch(data));
        }

        if(match != null){
            setChat(true)
            tinder.current.className = 'interfaceTinder left'
        }
    }

    let sendMsg = () => {
        msg2.current.className = 'message'
        contentMsg2.current.innerText = 'You'+' : '+ inputContent;
    }

    useEffect(() => {
            let randomCharacter = Math.floor(Math.random() * 671);
    
            fetch("https://rickandmortyapi.com/api/character/"+randomCharacter)
            .then((resp)=>resp.json())
            .then(data => {
                return data.name.length >= 25 ? getPurpose() : setPurpose(data)
            });

            console.log('hello')
    }, []);

    return (
        <>
            <ul className="componentNav">
                <li className="activePage">LoveFinderRz</li>
                <li className="inactivePage" onClick={() => props.moveToOne(1)}>HOME</li>
                <li className="inactivePage" onClick={() => props.moveToTwo(2)}>PLANETS</li>
                <li className="inactivePage" onClick={() => props.moveToFour(4)}>RICK'S SHOP</li>
            </ul>
                <div className="bodyTinder">
                    <div ref={tinder} className="interfaceTinder">
                        <div className="holderTinder">
                            <div className="headerTinder">
                                <div className="icon" onClick={ () => alert("Cette fonction n'est pas encore implantée.")}><FontAwesomeIcon icon={faCog} /></div>
                                <div className="imgApp"><img className="imgTinder" src={tindeRicks}/></div>
                                <div className="icon" onClick={ () => alert("Cette fonction n'est pas encore implantée.")}><FontAwesomeIcon icon={faComments} /></div>
                            </div>
                            <div className="profilTinder">
                                <div className="imgProfilHolder">
                                    { purpose != null &&
                                    <img id="" className="imgProfil" src= {purpose.image}/>
                                    }
                                </div>
                                <div>
                                    { purpose != null &&
                                    <div className="resumeProfil">
                                        <div>
                                            <h3>{purpose.name},</h3>
                                        </div>     
                                            <p className="gender">{purpose.gender}</p>
                                    </div>
                                    }
                                </div>
                                <div className="resumeProfil">
                                    { purpose != null &&
                                    <p>{purpose.species}</p>
                                    }
                                </div>
                            </div>
                            <div className="footerTinder">
                                <div className="iconTimes" onClick={() => getPurpose('dislike')} ><FontAwesomeIcon icon={faTimes} /></div>
                                <div className="iconHeart" onClick={() => getPurpose('like')} ><FontAwesomeIcon icon={faHeart} /></div>
                            </div>
                        </div>
                    </div>
                    { chat != false &&
                    <div className="chatbox">
                        <div className="headerChat">
                            <div className="imgPurpose">
                                <img id="" src= {match.image}/>
                            </div>
                            <div className="resumeChat">
                                <h3>{match.name},</h3>
                                <p className="gender">{match.species}</p>
                            </div>
                        </div>
                        <div className="chat">
                            { chat != false &&
                            <div>
                            <div className="message">
                                { match.species === 'Alien' &&
                                <p>{match.name} : ░╝╠▒◘ ?</p>  
                                }{ match.species === 'Human' &&
                                <p>{match.name} : Hey, comment tu vas  ?</p> 
                                }{ match.species === 'Animal' &&
                                <p>{match.name} : 🐎🦥🐃🐕  ?</p> 
                                }{ match.species === 'Mythological Creature' &&
                                <p>{match.name} : ಥ_ಥ☆*: .｡. o≧▽o .｡.:*☆  ?</p> 
                                }{ match.species === 'Humanoid' &&
                                <p>{match.name} : Hey, comment tu vas  ?</p> 
                                }{ match.species === 'unknown' &&
                                <p>{match.name} : ░╝╠▒◘ ?</p> 
                                }{ match.species === 'Poopybutthole' &&
                                <p>{match.name} : Hey, comment tu vas  ?</p> 
                                }{ match.species === 'Robot' &&
                                <p>{match.name} : 🤖🎞🔊⚡</p> 
                                }
                            </div>
                            <div ref={msg2}><p ref={contentMsg2}></p></div>
                            </div>
                            }
                        </div>
                        <div className="chatArea">
                            <div className="input">
                                <input onChange={event => setInputContent(event.target.value)} type="text" id="message" placeholder="Your message here"></input>
                            </div>
                            <div className="buttonSend">
                                <button onClick={() => sendMsg()}>Send</button>
                            </div>
                        </div>
                        <div className="matching"><img src={MatchTinder} /></div>
                    </div>
                    }
                </div>
                </>
    )
}

export default TinderRick