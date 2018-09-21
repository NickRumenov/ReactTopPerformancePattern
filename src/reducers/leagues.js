

const leagues = (state = [], action) => {
    console.log(action);

    switch (action.type) {
        case 'TOP_4_LEAGUES':
            return action.data
        default:
            return state
    }
};

export default leagues;