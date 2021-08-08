import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import axios from "axios";
import './style.css'

const columns = [

  { id: 'username', label: 'Username', minWidth: 190 },
  {
    id: 'bid',
    label: 'Bid Amount',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  }
];





function createData(username, bid) {
  return { username, bid};
}

// const rows = [
//         createData('India',  3287263),
//         createData('China', 9596961),
//         createData('Italy',301340),
//         createData('United States', 9833520),
//         createData('Canada', 9984670),
//         createData('Australia', 7692024),
//         createData('Germany', 357578)
//       ];



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const AllBids = ({history, match}) => { 
    
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
const [allBids, setAllbids] = React.useState([]);
const [rows, setRows] = React.useState([]);

const makeRows = () =>{

    const bids = [...allBids];
    bids.forEach(item => (delete item._id));

    setRows(bids);
}

    React.useEffect(() => {
        if (!localStorage.getItem("authToken")) {
          history.push("/");
        }
    
        
    const fetchAllBids = async() => {

        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          };
    
        //fetching data
        try{
    
          const { data } = await axios.get(`https://lit-peak-91776.herokuapp.com/api/auction/allBids/${match.params.auctionID}`, config);
          setAllbids(data.allBids);  
          makeRows()
         
    }
    
        catch(error){
       console.log(error.response.data.error);
        }
      }
    
      fetchAllBids();
    
    
      }, [allBids]);

  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

          return (
              <div className = "all-bids-div">
                  <div className="all-bid-table-div">
                      {/* table */}
                  <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>

                  </div>

              </div>
           
          );
        }
        
export default AllBids;