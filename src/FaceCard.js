import React from 'react'

export default function FaceCard({ emoData }) {
const {name, desc, indication} = emoData


    return (
        <div>
            {name}<br/>
            {desc}<br/>
            {indication}
        </div>
    )
}
