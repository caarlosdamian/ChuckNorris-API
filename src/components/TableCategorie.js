import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  Typography,
} from "@material-ui/core";
import useStyless from "../styles/Modal-styles";
import useStyles from "../styles/Table-styles";
import getModalStyle from "../styles/Modal-styles-1";
import React, { useEffect, useState } from "react";
import getCategories from "../helpers/getCategories";
import getJokeFromCategory from "../helpers/getJokeFromCategory";
function TableCategorie() {
  const classes = useStyles();
  const classess = useStyless();
  const [categories, setCategories] = useState([]);
  const [jokeCategories, setJokeCategories] = useState([]);
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const getJoke = (row) => {
    getJokeFromCategory(row).then((res) => {
      setJokeCategories(res.value);
      setOpen(true);
    });
  };
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <>
      <TableContainer>
        <Table aria-label="simple table" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align="right">Joke</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((row) => (
              <TableRow key={row}>
                <TableCell component="th" scope="row">
                  {row}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => getJoke(row)}
                  >
                    Get Joke
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classess.paper}>
          <Typography variant="h3" component="h2">
            Joke
          </Typography>
          <Typography variant="h5">{jokeCategories}</Typography>
        </div>
      </Modal>
    </>
  );
}

export default TableCategorie;
