export const addUser = user => {
    return dispatch => {
fetch('http://127.0.0.1:3001/users', {
method: 'POST',
withCredentials: true,
body: JSON.stringify(user),
headers: {'Content-Type': 'application/json'}


    })
    .then(resp => resp.json())
    .then(user => dispatch({type: 'ADD_USER', payload: user}))
    .then()
    }
}



//redirect to homepage
//pass in registration data to redux update the state there