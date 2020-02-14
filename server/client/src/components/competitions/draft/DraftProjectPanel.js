import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ProfileContext from '../../../ProfileContext';
import { useStyles } from '../../containerstyle';

const DraftProjectPanel = ({ id, name, handleDelete, handleMoreDetails }) => {
    const classes = useStyles();
    const { translations } = useContext(ProfileContext);

    const getName = () => {
        if (name) {
            return <p style={{ overflowWrap: 'break-word' }}>{name}</p>;
        }
        return <p>{translations.draftCompetitionsUnnamedProjectText}</p>
    }

    const handleClickMore = () => {
        handleMoreDetails(id);
    }
    const handleClickDelete = () => {
        handleDelete(id);
    }

    return (
        <div
            className={classes.competitionpanel} 
        >
            <div
                className={classes.comptitionpanelpadding} style={{width: '20rem'}}
            >
                {getName()}
            </div>
            <div className={classes.comptitionpanelpadding}>
                <div>
                    <Button
                        size='medium'
                        onClick={handleClickMore}
                        type='button'
                        className={`${classes.button} ${classes.competitionbutton}`}
                        style={{
                            width: '16rem',
                            marginBottom: '1rem'
                        }}
                    >
                        {translations.draftCompetitionsMoreDetailsButtonText}
                    </Button>
                </div>
                <div>
                    <Button
                        size='medium'
                        onClick={handleClickDelete}
                        type='button'
                        className={`${classes.button} ${classes.competitionbutton}`}
                        style={{
                            width: '16rem',
                            marginBottom: '1rem'
                        }}
                    >
                        {translations.draftCompetitionsDeleteButtonText}
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default DraftProjectPanel;
