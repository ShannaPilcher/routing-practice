import React from 'react'

const Colored = (props) => {

    return (
        <div style= {{backgroundColor: "red", border: "1px solid black"}} >
            <h4 style= {{color: "blue"}} >The word is: {props.word} </h4>
        </div>
    )
}

export default Colored