import React, { Fragment, useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IndividualProduct from "./ViewIndividualProduct";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({id}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  

  const handleOpen = () => {
    setOpen(true);
  };
  console.log(id); 
  const getProductById = () => {
    fetch("http://localhost/Technova/computer_category.php?id=" +id,{
        method: "GET",
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then((product) => {
        setProduct(product); 
      });   
  }
    

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{getProductById()}, [])

  return (
    <Fragment>
      <div className="watchProduct" onClick={handleOpen}>Más detalles</div>
        
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ 
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <IndividualProduct product = {product}/>
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}
