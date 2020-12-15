import React from 'react';
import { useStyles } from '../containerstyle';
// import ProfileContext from '../../ProfileContext';
// import { DeviceHelper } from '../../utils';

const TextContent = ({title}) => {
    // const { translations } = useContext(ProfileContext);
    const classes = useStyles();

    return (
        <div className={`${classes.center} ${classes.standardborder}`}>
            <div style={{ fontSize: '1.9rem' }} >
                {title}
                </div>
            <p style={{ fontSize: '1.2rem', textAlign: 'justify' }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br></br><br></br>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                <br></br><br></br>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
        </div>
    );
};

export default TextContent;



