import axios from 'axios';

export const saveProject = async (step, values, projectId, userId) => {

    let res;
    delete values.translations;
    try {
        if (step === 1 && !projectId) {
            // new project: create
            values.userId = userId;
            res = await axios.post('/draftprojects', values);
        } else {
            // existing project: update
            res = await axios.put(`/draftprojects/${projectId}/`, values)
        }
        return res.data;
    } catch (error) {
        throw (error);
    }
}

