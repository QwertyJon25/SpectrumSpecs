import React from 'react'
import FaceCard from "./FaceCard"

export default function FaceContainer({emotions}) {

const emoCards = emotions?.map(emoObj => <FaceCard key={emoObj.id} emoData={emoObj}/>)

    return (
        <div>
            <ul className="cards">{emoCards}</ul>
        </div>
    )
}
