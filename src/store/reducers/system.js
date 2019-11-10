import SYSEMES from '../../data/data';

const initialState = {
    availableProducts: SYSEMES,
    // userProducts: SYSEMES.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
    return state;
};