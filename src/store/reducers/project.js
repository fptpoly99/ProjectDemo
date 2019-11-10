import PROJECTES from '../../data/data';

const initialState = {
    availableProducts: PROJECTES,
    // userProducts: PROJECTES.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
    return state;
};