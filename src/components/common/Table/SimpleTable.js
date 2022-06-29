import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'description',
        numeric: false,
        disablePadding: false,
        label: 'Description',
    },
    {
        id: 'startDate',
        numeric: true,
        disablePadding: false,
        label: 'Start (Date | Time)',
    },
    {
        id: 'endDate',
        numeric: true,
        disablePadding: false,
        label: 'End (Date | Time)',
    },
    {
        id: 'action',
        numeric: true,
        disablePadding: false,
        label: 'Actions',
    },
];

const headCellsMission = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'caption',
        numeric: false,
        disablePadding: false,
        label: 'Caption',
    },
    {
        id: 'startDate',
        numeric: true,
        disablePadding: false,
        label: 'Start (Date | Time)',
    },
    {
        id: 'endDate',
        numeric: true,
        disablePadding: false,
        label: 'End (Date | Time)',
    },
];

const headCellsNFTs = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'description',
        numeric: false,
        disablePadding: false,
        label: 'Description',
    },
    {
        id: 'artistName',
        numeric: false,
        disablePadding: false,
        label: 'Artist Name',
    },
    {
        id: 'action',
        numeric: true,
        disablePadding: false,
        label: 'Actions',
    },
];

function SimpleTable(props) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    const history = useHistory();
    const searchURL = history.location?.pathname?.split('/')

    return (
        <TableHead>
            <TableRow>
                {(searchURL?.includes('missions') ? headCellsMission : searchURL?.includes('nfts') ? headCellsNFTs : headCells).map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'center'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            <strong>{headCell.label}</strong>
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

SimpleTable.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable({ rows, loader }) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, /*setDense*/] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const history = useHistory();
    const searchURL = history.location?.pathname

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <SimpleTable
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            searchURL
                        />
                        <TableBody>
                            {!loader && stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row._id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="2px"
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell padding="2px">{row.description ? row.description : row?.caption}</TableCell>
                                            {searchURL?.includes('nfts') ?
                                                <TableCell padding="2px">{row?.artistName}</TableCell>
                                                :
                                                <>
                                                    <TableCell padding="2px">{moment.utc(row.startDate).format('MM/DD/YYYY HH:mm:ss')}</TableCell>
                                                    <TableCell padding="2px">{moment.utc(row.endDate).format('MM/DD/YYYY HH:mm:ss')}</TableCell>
                                                </>
                                            }
                                            {/* {searchURL?.includes('events') &&
                                                <TableCell padding="2px">
                                                    {((new Date(moment.utc(row.startDate).format('YYYY-MM-DD')).getTime() >= new Date().getTime())
                                                        || (new Date(moment.utc(row.startDate).format('MM/DD/YYYY')).setHours(0, 0, 0, 0) == (new Date().setHours(0, 0, 0, 0)))) &&
                                                        <button
                                                            onClick={() => history.push({
                                                                pathname: '/admin/create-mission',
                                                                state: {
                                                                    'row': row
                                                                }
                                                            })}
                                                            className="bg-red-500 text-white px-22 py-6 rounded-5 transition-all flex items-center justify-center gap-3 hover:bg-red-600 relative top-0 hover:top-px" >
                                                            Manage
                                                        </button>
                                                    }
                                                </TableCell>
                                            } */}
                                            <TableCell padding="2px">
                                                {console.log("row", row)}
                                                <button
                                                    onClick={() => history.push({
                                                        pathname: searchURL?.includes('nfts') ? '/admin/edit-nft' : '/admin/edit-event',
                                                        state: {
                                                            'row': row
                                                        }
                                                    })}
                                                    className="bg-black text-white px-22 py-6 rounded-5 transition-all flex items-center justify-center gap-3 hover:bg-black relative top-0 hover:top-px" >
                                                    Edit
                                                </button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                            {!loader && rows?.length < 1 && <TableRow align="center">No Recorde</TableRow>}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}