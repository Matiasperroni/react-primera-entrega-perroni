import React from 'react';
import styles from "./cartwidget.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div className={styles.cartCont}>
      <ShoppingCartIcon />
      <p>1</p>
    </div>
  )
}

export default CartWidget;