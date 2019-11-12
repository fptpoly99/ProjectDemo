import PROJECTES from '../../data/data';

const initialState = {
    availableProject: PROJECTES,
    userProducts: PROJECTES.filter(prod => prod.id === 'p3')
};

export default (state = initialState, action) => {
    return state;
};