import ls from 'local-storage'
export const addUser = user => {
    return dispatch => {
fetch('http://127.0.0.1:3001/users', {
method: 'POST',
withCredentials: true,
body: JSON.stringify(user),
headers: {'Content-Type': 'application/json'}   //creating a record in the db


    })
    .then(resp => resp.json())
    .then(user => dispatch({type: 'ADD_USER', payload: user})) //updating in store
       .then(user => ls.set('user_id', user.payload.id)) //setting user_id in localstorage
     
    }
}

export  const findUser = user => {
    return dispatch => {
fetch('http://127.0.0.1:3001/sessions', {
method: 'POST',
withCredentials: true,
body: JSON.stringify(user),
headers: {'Content-Type': 'application/json'} })
.then(resp => resp.json())
.then(result => ls.set('user_id',result.user.id))
.then(result => dispatch({type: 'ADD_USER', payload: result}))

    }}
//creating a record in the db
export const fetchUsers = () => {
    return dispatch => {
        fetch(`http://127.0.0.1:3001/users`)
        .then(resp => resp.json())
        .then(users => dispatch({type: "FETCH_USERS", payload: users }))
        
    }
}

export const userslogout = () => {
    return dispatch => {
        dispatch({type: "RESET_STORE"})
    }
}



//redirect to homepage
//pass in registration data to redux update the state there