import React from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PieChartIcon from "@material-ui/icons/PieChart";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const style = {
  productStyle: {
    padding: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
const useStyles = makeStyles((theme) => ({
  cardText: {
    color: "#fff",
  },
}));

function ProductItem({ product }) {
  const classes = useStyles();

  const renderSwitchIcon = (iconName) => {
    switch (iconName) {
      case "PersonOutlineIcon":
        return <PersonOutlineIcon style={{ fontSize: 60, color: "#fff" }} />;
      case "PieChartIcon":
        return <PieChartIcon style={{ fontSize: 60, color: "#fff" }} />;
      case "AccountBalanceWalletIcon":
        return (
          <AccountBalanceWalletIcon style={{ fontSize: 60, color: "#fff" }} />
        );
      case "ShoppingCartIcon":
        return <ShoppingCartIcon style={{ fontSize: 60, color: "#fff" }} />;
      default:
        return null;
    }
  };
  return (
    <div style={style.productStyle}>
      <div>
        <Typography variant="h5" gutterBottom className={classes.cardText}>
          {product.desc}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.cardText}
        >
          {product.quantity}
        </Typography>
      </div>
      <div>{renderSwitchIcon(product.iconName)}</div>
    </div>
  );
}

export default ProductItem;
