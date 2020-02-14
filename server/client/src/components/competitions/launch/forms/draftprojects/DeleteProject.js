import axios from 'axios';

export const deleteProject = async (projectId) => {
    try {
        const res = await axios.delete(`/draftprojects/${projectId}/`);
        return res.data;
    } catch (error) {
        throw (error);
    }
   
}

