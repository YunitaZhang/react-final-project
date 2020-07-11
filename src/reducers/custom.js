
export const setTitle = (state = 'Home', action) => {
    switch(action.type){
        case 'SET_TITLE':
            return action.payload
        default:
            return state
    }
}
