export const gamesReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return action.payload
            case "LOSE_HEART":
                return [...state, action.payload]
               
            default:
            return state
      
    }
}