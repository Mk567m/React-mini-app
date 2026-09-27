

function Game(prop){
    return (

        <div className="gameCard">

            <p id='propname'>Name: {prop.name}, </p>
            <p id='propyear'>Year: {prop.year}, </p>
            <p id='propgenre'>Genre: {prop.genre}, </p>

        </div>

    )
}


export default Game