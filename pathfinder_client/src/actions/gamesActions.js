export const fetchGames = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3001/games')
        .then(resp => resp.json())
        .then(games => dispatch({type: "FETCH_GAMES", payload: games }))
        
    }
}

export const loseHeart = game => {
    return dispatch => {
        fetch(`http://127.0.0.1:3001/games/${game.id}`,{
         method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
            hearts: game.hearts - 1,})
            }
            )
        .then(resp => resp.json())
        .then(game => dispatch({type: 'LOSE_HEART', payload: game}))
    }}

