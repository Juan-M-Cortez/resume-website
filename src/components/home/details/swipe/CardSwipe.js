import React from 'react'

function CardSwipe() {
    // declaring array container
    let swipeArray = [];
    // pushing div img-card into an array
    for (let index = 0; index < 4; index++) {
        swipeArray.push(<div className={`swipe-cards card${index + 1}`} key={`swipe-card${index + 1}`}>{`img ${index + 1}`}</div>);
    }

    return (
        <div className='swipe-container'>
        {/* displaying elements of the array */}
            {swipeArray.map(elem => {
                return elem
            })}
        </div>
    )
}

export default CardSwipe