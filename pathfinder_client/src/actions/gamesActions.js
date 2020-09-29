export const fetchGames = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3001/games')
        .then(resp => resp.json())
        .then(games => dispatch({type: "FETCH_GAMES", payload: games }))
        
    }
}

