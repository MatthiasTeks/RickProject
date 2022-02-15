import React from 'react'
import '../css/lineScroll.css'

const LineScroll = () =>  {
    return (<>
        <div className="holderLine">
            <span className="shadow"></span>
            <div className="line"></div>
            <p className="lineTitle">SCROLL</p>
        </div>
        </>
    )
}

export default LineScroll