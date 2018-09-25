
const leagues = (state = [], action) => {
    switch (action.type) {
        case 'TOP_4_LEAGUES':
            return action.payload
        default:
            return state
    }
};

export default leagues;