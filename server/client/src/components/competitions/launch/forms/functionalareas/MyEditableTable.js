import React, { useState, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import { EditingState } from '@devexpress/dx-react-grid';
import ProfileContext from '../../../../../ProfileContext';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableInlineCellEditing
} from '@devexpress/dx-react-grid-material-ui';

const getRowId = row => row.id;

const FocusableCell = ({ onClick, ...restProps }) => (
    <Table.Cell
        {...restProps}
        tabIndex={0}
        onFocus={onClick}
    // style={{
    //     paddingTop: '10px',
    //     paddingBottom: '10px',
    //     fontSize: '10px'
    // }}
    />
);



const TableRow = ({ row, ...restProps }) => {
    return (
        <Table.Row
            {...restProps}
            style={{
                height: '10x'
            }}
        />
    );
};

const validate = (change, row) => {
    for (var prop in change) {
        if (prop === "type") {
            continue;
        }
        console.log("prop =", prop);
        const fnum = parseInt(change[prop]);
        if (isNaN(fnum)) {
            change[prop] = row[prop];
        } else {
            change[prop] = fnum;
        }
    }
}
const FunctionalAreaTable = ({ rows, columns, handleRowUpdate, side }) => {
    const EditableCell = (props) => {
        var { row, editingEnabled, column, ...restProps } = props;
        const {
            tableRow: { rowId }
        } = restProps;
        if (rowId != 3 && rowId != 4) {
            if (column.name === "type") {
                editingEnabled = false;
            }
        } else {
            if (side === "left") {
                editingEnabled = false;
            }
        }
        return (<TableInlineCellEditing.Cell
            editingEnabled={editingEnabled}
            column={column}
            row={row}
            {...restProps}
        />);
    };
    const { translations } = useContext(ProfileContext);

    const setRowTypesAccordingToLanguage = (offset) => {
        for (let i = 0; i < rows.length; i++) {
            rows[i].type = translations.functionalarearows[i+offset];
        }
    }

    const [editingStateColumnExtensions] = useState([
        { columnName: 'type', editingEnabled: false }
    ]);

    const [columnExtensions] = useState([
        { columnName: 'type', width: '190px' }
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
                    validate(change, row)
                }
                return (change ? { ...row, ...change } : row);
            });
            changedRows = rows.map(row =>
                changed[row.id] ? { ...row, ...changed[row.id] } : row
            );
        }
        if (deleted) {
            const deletedSet = new Set(deleted);
            changedRows = rows.filter(row => !deletedSet.has(row.id));
        }
        console.log("BATS!!!")
        handleRowUpdate(side, changedRows);
    };

    // bit hacky...better to split the rows translations into two arrays and use the correct one here
    if (side === "left") {
        setRowTypesAccordingToLanguage(0);
    } else {
        setRowTypesAccordingToLanguage(5);
    }


    return (
        <Paper>
            <Grid rows={rows} columns={columns} getRowId={getRowId}>
                <EditingState
                    onCommitChanges={commitChanges}
                    // columnExtensions={editingStateColumnExtensions}
                />
                <Table
                    cellComponent={FocusableCell}
                    rowComponent={TableRow}
                    columnExtensions={columnExtensions}
                />
                <TableHeaderRow />
                <TableInlineCellEditing
                    cellComponent={EditableCell}
                    startEditAction={startEditAction}
                    selectTextOnEditStart={selectTextOnEditStart}
                />
            </Grid>
        </Paper>
    );
};

export default FunctionalAreaTable;
