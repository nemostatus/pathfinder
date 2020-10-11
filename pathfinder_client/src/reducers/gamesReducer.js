export const gamesReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return action.payload
            case 'ADD_GAME':
            return [...state, action.payload]
            case "LOSE_HEART":
                return [...state, action.payload]
                case "LOGOUT":
                    state = []
               
            default:
            return state
      
    }
}