import '../css/ItemShop.css'

function CareScale({scaleValue, careType}){

    const scaleType = 
            careType === 'money' ? (
                <div>💸</div>
            ) : (
                <div>🔎</div>
            )

    const range =[1,2,3,4,5]

    return <div className="Emojis">
       {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
    </div>
}

export default CareScale