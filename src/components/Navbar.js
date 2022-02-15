import React, { useEffect, useState } from 'react'
import '../css/navbar.css'
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

const Navbar = (props) => {
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

    return (
    <div>
        { dimensions.width > 480 &&
            <div className="holderButton">
            <div className="button" onClick={() => props.moveToOne(1)}>
                <p>Home</p>
            </div>
            <div className="button" onClick={() => props.moveToTwo(2)}>
                <p>Planets</p>
            </div>
            <div className="button" onClick={() => props.moveToThree(3)}>
                <p>Lovefinderrz</p>
            </div>
            <div className="button" onClick={() => props.moveToFour(4)}>
                <p>Rick's Shop</p>
            </div>
        </div>
    } 
    { dimensions.width <= 480 &&
        <label for="check">
            <input type="checkbox" id="check"/> 
            <span></span>
            <span></span>
            <span></span>
        </label>
    }
    </div>)


}

export default Navbar