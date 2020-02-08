
import React, { useState, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import { EditingState } from '@devexpress/dx-react-grid';
import ProfileContext from '../../../../../ProfileContext';
import { DeviceHelper } from '../../../../../utils';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableInlineCellEditing
} from '@devexpress/dx-react-grid-material-ui';
import { withStyles } from '@material-ui/core';



const getRowId = row => row.id;

const TableRow = ({ row, ...restProps }) => {
    return (
        <Table.Row
            {...restProps}
        />
    );
};

const validate = (side, change, row) => {
    for (var prop in change) {
        if (prop === "type") {
            continue;
        }
        const fnum = (side === "outdoors" && prop === "size") ? parseFloat(change[prop]) : parseInt(change[prop]);
        if (isNaN(fnum)) {
            change[prop] = row[prop];
        } else {
            change[prop] = fnum;
        }
    }
}
const FunctionalAreaTable = ({ rows, columns, handleRowUpdate, side, indoors }) => {
    const getRowStyle = () => {
        if (indoors) {
            return {}
        } else {
            return {
                paddingTop: '8px',
                paddingBottom: '8px',
                fontSize: '13px'
            }
        }
    }
    const myObject = indoors ? {} : {
        '.MuiInputBase-input': {
            fontSize: '13px',
            padding: 0,
            fontFamily: 'inherit'
        },
        '.MuiTableCell-root': {
            padding: '7px'
        }
    }
    let TableCss = withStyles({
        // @global is handled by jss-plugin-global.
        '@global': myObject
            // size of editable table cells
    })(() => null);

    
    const FocusableCell = ({ onClick, ...restProps }) => (
        <Table.Cell
            {...restProps}
            tabIndex={0}
            onFocus={onClick}
            style=
            {getRowStyle()}
        />
    );
    const EditableCell = (props) => {
        var { row, editingEnabled, column, ...restProps } = props;
        const {
            tableRow: { rowId }
        } = restProps;
        if (side === "outdoors") {
            if (column.name === "type") {
                if (rowId === 7) {
                    editingEnabled = true;    
                } else {
                    editingEnabled = false;
                }
            }
        } else {
            if (rowId !== 3 && rowId !== 4) {
                if (column.name === "type") {
                    editingEnabled = false;
                }
            } else {
                if (side === "left" && column.name === "type") {
                    editingEnabled = false;
                } else {
                    editingEnabled = true;
                }
            }
        }

        return (<TableInlineCellEditing.Cell
            editingEnabled={editingEnabled}
            column={column}
            row={row}
            style=
            {getRowStyle()}
            {...restProps}
        />);
    };
    const { translations } = useContext(ProfileContext);

    const setRowTypesAccordingToLanguage = (offset) => {
        for (let i = 0; i < rows.length; i++) {
            rows[i].type = translations.functionalarearows[i + offset];
        }
    }

    const setRowTypesAccordingToLanguageOutdoors = () => {
        for (let i = 0; i < rows.length; i++) {
            if (i === 7) {
                if (rows[i].type !== "Other" && rows[i].type !== "Alte") {
                    continue;
                }
            }
            rows[i].type = translations.functionalareaoutdoorrows[i];
        }
    }
    // uber hack to work around problem whereby user input into editable field clashing with the state change
    // due to language change...the translated default seems to take precedence over the user input...
    // so the change here is to ignore language changes if the user has entered anything
    // this would be ok were it not for the hard wired language strings...
    const setRowTypesAccordingToLanguageRight = (offset) => {
        for (let i = 0; i < rows.length; i++) {
            if (i >= 3) {
                if (rows[i].type !== "Other-1" && rows[i].type !== "Other-2" && rows[i].type !== "Alte Spatii-1" && rows[i].type !== "Alte Spatii-1") {
                    continue;
                }
            }
            rows[i].type = translations.functionalarearows[i + offset];
        }
    }

    const isLaptop = () => {
        return DeviceHelper();
    };
    const typeColWidth = indoors || !isLaptop() ? '9rem' : '12rem';

    const [columnExtensions] = useState([
        { columnName: 'type', width: `${typeColWidth}` }
    ]);


    const [startEditAction] = useState('click');
    const [selectTextOnEditStart] = useState(true);

    const commitChanges = ({ added, changed, deleted }) => {
        let changedRows;
        if (added) {
            const startingAddedId =
                rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
            changedRows = [
                ...rows,
                ...added.map((row, index) => ({
                    id: startingAddedId + index,
                    ...row
                }))
            ];
        }
        if (changed) {
            rows = rows.map(row => {
                const change = changed[row.id];

                // // validate the numeric fields
                if (change) {
                    validate(side, change, row)
                }
                return (change ? { ...row, ...change } : row);
            });
            changedRows = rows.map(row => {
                return (changed[row.id] ? { ...row, ...changed[row.id] } : row);
            });
        }
        if (deleted) {
            const deletedSet = new Set(deleted);
            changedRows = rows.filter(row => !deletedSet.has(row.id));
        }
        handleRowUpdate(side, changedRows);
    };

    // bit hacky...better to split the rows translations into two arrays and use the correct one here
    if (side === "left") {
        setRowTypesAccordingToLanguage(0);
    } else if (side === "right") {
        setRowTypesAccordingToLanguageRight(5);
    } else if (side === "outdoors") {
        setRowTypesAccordingToLanguageOutdoors()
    }


    return (
        <div style={{ userSelect: 'none' }} data-test={side} >
            <TableCss></TableCss>
            <Paper>
                <Grid rows={rows} columns={columns} getRowId={getRowId} data-test={side}>
                    <EditingState
                        onCommitChanges={commitChanges}
                    />
                    <Table
                        cellComponent={FocusableCell}
                        rowComponent={TableRow}
                        columnExtensions={columnExtensions}
                    />
                    <TableHeaderRow
                        rowComponent={TableRow}
                    />
                    <TableInlineCellEditing
                        cellComponent={EditableCell}
                        startEditAction={startEditAction}
                        selectTextOnEditStart={selectTextOnEditStart}
                    />
                </Grid>
            </Paper>
        </div>

    );
};

export default FunctionalAreaTable;
