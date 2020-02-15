import axios from 'axios';
import { FETCH_USER, FETCH_PROJECTS, LOAD_PROJECT } from './types';
import { loadProjectsByUserId } from '../components/competitions/launch/forms/draftprojects/FileStore';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProjects = (id) => async dispatch => {
    // const res = await axios.get(`/draftprojects?_id=${id}`);

    const res = loadProjectsByUserId(id);

    dispatch({ type: FETCH_PROJECTS, payload: res });
};

export const loadProject = (project) => dispatch => {
    dispatch({ type: LOAD_PROJECT, payload: project });
};