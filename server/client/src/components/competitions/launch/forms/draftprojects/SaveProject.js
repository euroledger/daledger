import axios from 'axios';

export const saveProject = async (step, values, projectId, userId) => {

    // TODO put some error handling in here
    let res;
    delete values.translations;
    if (step === 1 && !projectId) {
        // new project: create
        values.userId = userId;
        res = await axios.post('/draftprojects', values);
    } else {
        // existing project: update
        res = await axios.put(`/draftprojects/${projectId}/`, values)
    }
    return res.data;
}

