import React, { useEffect, useState } from 'react'
import '../css/rickSanchez.css'

const RickAnim = (props) => {

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

    return (<div>
        { dimensions.width > 480 &&
            <div className={props.rickAnimation}>
                <img className="rickFromLeftScreen" src={props.rickImage} alt="picture of Rick Sanchez" />
                <div>
                    <img className="textArea" src={props.rickTextArea} alt="text area for Rick" />
                    <p className="textSay">{props.rickSay}</p>
                </div>
            </div>
        }


    </div>)

}

export default RickAnim