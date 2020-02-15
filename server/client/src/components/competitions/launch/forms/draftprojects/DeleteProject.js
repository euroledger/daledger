// import axios from 'axios';
import { deleteFromStore } from './FileStore';

export const deleteProject = async (projectId) => {
    try {
        // const res = await axios.delete(`/draftprojects/${projectId}/`);
        const res = deleteFromStore(projectId);
        return res;
    } catch (error) {
        throw (error);
    }
}

