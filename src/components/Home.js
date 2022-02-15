import '../css/home.css'
import ricksTravel from '../assets/rickstravel.png'
import ricksTravelMob from '../assets/rickstravel-mobile.png'
import React, { useEffect, useState } from 'react';
import netflixLogo from '../assets/netflix.png'
import closeButton from '../assets/close-button.png'

const BodyHome = () => {

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        function handleResize () {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            }) 

    }

        window.addEventListener('resize', handleResize)

        return  _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    let [episode, setEpisode] = useState(null);

    let getEpisode = () => {

        let randomEpisode = Math.floor(Math.random() * 41);

        fetch("https://rickandmortyapi.com/api/episode/"+randomEpisode)
        .then((resp)=>resp.json())
        .then((data)=>setEpisode(data));
        
    }   

    return (
        <div className="containerHolder">
            <div className="containerTitle">
                {
                    dimensions.width > 480 &&
                    <img src={ricksTravel} alt="Rick's Travel Logs"/>
                }
                {
                    dimensions.width <= 480 &&
                    <img src={ricksTravelMob} alt="Rick's Travel Logs"/>
                }

            </div> 
            <div className="containerResume">

                    {
                        dimensions.width > 480 &&
                        <p>Anim exercitation aliqua irure et consequat mollit Lorem non velit nulla elit ullamco veniam. Qui mollit proident deserunt incididunt veniam id pariatur ea in duis reprehenderit commodo laboris reprehenderit. Ex voluptate culpa occaecat nulla voluptate occaecat irure. Anim veniam pariatur aliquip proident veniam ea reprehenderit officia incididunt veniam mollit aliqua id.Laboris pariatur et ipsum aliqua.</p>
                    } 
                    {
                        dimensions.width <= 480 &&
                        <p className="resumeText">Anim exercitation aliqua irure et consequat mollit Lorem non velit nulla elit ullamco veniam. Qui mollit proident deserunt incididunt veniam id pariatur ea in duis reprehenderit commodo laboris reprehenderit.</p>
                    }


            </div>
             <div className='buttonRandom' onClick={ () => getEpisode() }><p>Get new aventure</p></div>
             {
                 episode != null &&
                 <div className="holderInterface">
                     <div className="interfaceEpisode">
                        <div className="holderHeader">
                            <div className="holderInfos">
                                <h2 className="nameEpisode">{episode.name}</h2>
                                <p className="dateEpisode">{episode.air_date}</p>
                            </div>

                            <div>
                                <div className="closeButton" onClick={ () => setEpisode(null)}><img src={closeButton}/></div>
                            </div>
                        </div>
                        {
                            dimensions.width > 480 &&
                            <p className="resumeEpisode">Sint non dolore cupidatat elit ea reprehenderit ea ea do quis est. Veniam qui non laborum nulla. Est consectetur ut laborum tempor. Occaecat minim proident Lorem proident nulla incididunt ullamco dolor commodo deserunt in elit deserunt. Magna non anim dolor est laborum sit consequat labore sunt est esse in id sunt. Ipsum Lorem pariatur minim sunt magna mollit.

                            Amet ullamco exercitation proident Lorem est proident. Eu do nostrud labore pariatur eiusmod nostrud tempor irure anim aute consectetur. Exercitation commodo laboris mollit sit dolor sint non commodo. Ullamco culpa officia enim officia esse. Aliquip nulla ut officia veniam sunt elit sunt cupidatat velit amet sit dolor do. Ullamco elit proident incididunt ut commodo aliquip commodo reprehenderit proident enim sint labore et.</p>
                        }
                        {
                            dimensions.width <= 480 &&
                            <p className="resumeEpisode">Sint non dolore cupidatat elit ea reprehenderit ea ea do quis est. Veniam qui non laborum nulla. Est consectetur ut laborum tempor. Occaecat minim proident Lorem proident nulla incididunt ullamco dolor commodo deserunt in elit deserunt. Magna non anim dolor est laborum sit consequat labore sunt est esse in id sunt. Ipsum Lorem pariatur minim sunt magna mollit.

                            Amet ullamco exercitation proident Lorem est proident.</p>
                        }
                        <p className="watchFont">Watch on</p>
                        <div className="holderButtons">
                            <div className="redirectionButton"><img className="redirectionImage" src={netflixLogo}/></div>
                            <div className="refreshButton" onClick={ () => getEpisode() }>Refresh</div>
                        </div>

                     </div>                   
                 </div>
                     
             }

        </div>
    )
}

export default BodyHome