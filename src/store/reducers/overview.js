import OVERVIEWES from '../../data/data'

const initialState = {
    availableProducts: OVERVIEWES,
    userProducts: OVERVIEWES.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
    return state;
};