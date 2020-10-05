import ls from 'local-storage'

export const fetchGames = () => {
    return dispatch => {
        fetch(`http://127.0.0.1:3001/users/${ls.get('user_id')}/games`)
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


    export const addGame = game => {
    return dispatch => {
  fetch(`http://127.0.0.1:3001/users/${game.user_id}/games`,{
method: 'POST',
withCredentials: true,
body: JSON.stringify(game),
headers: {'Content-Type': 'application/json'}
})
    .then(resp => resp.json())
    .then(game => dispatch({type: 'ADD_GAME', payload: game}))
    // .then(game => ls.set('game', game.payload))
    
    }
}


export const goblinAttack = game => {
    return dispatch => {
        fetch(`http://127.0.0.1:3001/users/${game.user_id}/games/${game.id}`,{
         method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
            hearts: game.hearts,
            level: game.level,
            prompt: game.prompt,
            choice1: game.choice1,
            choice2: game.choice2
       })
            }
            )
        .then(resp => resp.json())
        .then(game => console.log(game))
    }
}



    

