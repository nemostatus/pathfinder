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



//redirect to homepage
//pass in registration data to redux update the state there