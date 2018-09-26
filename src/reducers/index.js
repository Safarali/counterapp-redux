export default (state, action) => {
    switch (action.type) {
        case "SET_ACTIVE_SESSION":
            return {
                ...state,
                activeSession: action.payload
            }
        case "INCREASE_COUNTER":
        case "DECREASE_COUNTER":
            const activeSession = state.activeSession.toLowerCase();
            return {
                ...state,
                [activeSession] : state[activeSession] + action.payload
            }

        default:
            return state;
    }
}
