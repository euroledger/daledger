import React, { useContext, useEffect, useCallback } from 'react';
import { useStyles } from '../../containerstyle';
import ProfileContext from '../../../ProfileContext';
import Button from '@material-ui/core/Button';
import DraftProjectPanel from './DraftProjectPanel';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { deleteProject } from '../launch/forms/draftprojects/DeleteProject';
import { logMessage } from '../../../utils/Logger';
import { useHistory } from "react-router-dom";

const Draft = (props) => {
    const classes = useStyles();
    const { translations, auth } = useContext(ProfileContext);

    const { fetchProjects, loadProject } = props;
    // async function getProjects() {     
    //     if (auth) {
    //         fetchProjects(auth._id);
    //     }
    // }
    const getProjects = useCallback(() => {
        if (auth) {
            fetchProjects(auth._id);
        }
    }, [auth, fetchProjects])
    useEffect(() => {
        getProjects();
    }, [auth, getProjects]);

    // user id just used for logging; delete project based on project id
    const handleDelete = async (projectId) => {
        try {
            await deleteProject(projectId);
            getProjects();
        } catch (error) {
            console.error(error);
            const msg = "Failed to delete draft competition id = " + projectId;
            logMessage(auth._id, "ERROR", msg);
            return null;
        }
    }

    let history = useHistory();

    const addMoreDetails = (projectId) => {
        const projectToModify = props.projects.find(x => x.id === projectId);
        console.log("Adding more details to: ", projectToModify);
        loadProject(projectToModify);
        history.push("/launch");
    }

    return (
        <div className={`${classes.container} ${classes.containerdraft} `}>
            <div className={`${classes.pdformpanel2} ${classes.pdraftpanel} ${classes.forminfospacing} `}>
                <div
                    className={classes.formborder}
                >
                    <p className={classes.formTitle}>{translations.draftCompetitionsTitle}</p>
                </div>
                <div className={classes.pdraftprojectspanel}>
                    {props.projects.map(project => {
                        return (
                            <DraftProjectPanel
                                key={project.id}
                                id={project.id}
                                name={project.name}
                                handleDelete={handleDelete}
                                handleMoreDetails={addMoreDetails}
                            >
                            </DraftProjectPanel>
                        )
                    })}
                </div>
                <div className={classes.pdbuttons} >
                    <Button
                        size='medium'
                        type='submit'
                        className={`${classes.button} ${classes.formButton}`}
                        style={{
                            width: '12rem',
                            marginBottom: '1rem'
                        }}
                        // disabled={isSubmitting}
                        href='/clienthome'
                    >
                        {translations.homeButtonText}
                    </Button>
                </div >
            </div >

        </div>

    );
};

function mapStateToProps({ projects }) {
    return { projects };
}

export default connect(mapStateToProps, actions)(Draft);
