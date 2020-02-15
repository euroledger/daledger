// import axios from 'axios';
import { addToStore, updateStore } from './FileStore';

export const saveProject = async (step, values, projectId, userId) => {

    let res;
    delete values.translations;
    try {
        if (step === 1 && !projectId) {
            // new project: create
            values.userId = userId;
            // res = await axios.post('/draftprojects', values);
            let id = addToStore(values);
        } else {
            // existing project: update
            updateStore(values, projectId);
            // res = await axios.put(`/draftprojects/${projectId}/`, values)
        }
        return values;
    } catch (error) {
        throw (error);
    }
}

