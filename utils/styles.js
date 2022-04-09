import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginRight: 20,
    marginLeft: 20,
  },

  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
  },
});
export default useStyles;