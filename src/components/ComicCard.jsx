import React from 'react'

const ComicCard = (props) => {
    const { image, title } = props

    return (
        <div className="card">
            <div className="comicImg">
                <img src={image} alt="" />
            </div>
            <div className="comicTitle">{title}</div>
        </div>
    )
}

export default ComicCard
