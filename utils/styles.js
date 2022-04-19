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
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  footer: {
    marginTop: 10,
    textAlign: "center",
  },
  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: "initial",
  },
  transparentBackgroud: {
    backgroundColor: "transparent",
  },
  error: {
    color: "#f04040",
  },
});
export default useStyles;
