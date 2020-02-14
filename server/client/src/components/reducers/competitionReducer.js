import { LOAD_PROJECT } from '../../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case LOAD_PROJECT:
            return action.payload;
        default:
            return state;
    }
}