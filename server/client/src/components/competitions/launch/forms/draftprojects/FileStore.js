// Basic in memory JSON datastore

export const addToStore = (project) => {
    const items = JSON.parse(localStorage.getItem('projects'));
    project.id = items.length + 1;
    items.push(project);
    console.log("set projects items to", items);
    localStorage.setItem('projects', JSON.stringify(items));
    return project.id;
}

export const updateStore = (project, id) => {
    const items = JSON.parse(localStorage.getItem('projects'));
    const itemsMinusProject = items.filter(target => target.id !== id);
    itemsMinusProject.push(project);
    localStorage.setItem('projects', JSON.stringify(itemsMinusProject));  
}

export const deleteFromStore = (id) => {
    const items = JSON.parse(localStorage.getItem('projects'));
    const itemsMinusProject = items.filter(target => target.id !== id);
    localStorage.setItem('projects', JSON.stringify(itemsMinusProject));  
}

export const loadProjectsByUserId = (userId) => {
    const items = JSON.parse(localStorage.getItem('projects'));
    const userProjects = items.filter(target => target._id !== userId);
    return userProjects;
}

export const loadProjectById = (id) => {
    const items = JSON.parse(localStorage.getItem('projects'));
    const userProjects = items.filter(target => target.id === id);
    return userProjects;
}