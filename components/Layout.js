import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import { ThemeProvider } from "@mui/styles";
import { createTheme, CssBaseline } from "@mui/material";

export default function Layout({ title, description, children }) {
  const classes = useStyles();
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: "light",
      primary: {
        main: "#da6420",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  return (
    <div>
      <Head>
        <title>Next Ecommerce</title>
        <title>{title ? `${title} - Next Ecommerce` : "Next Ecommerce"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Next Ecommerce</Typography>
              </Link>
            </NextLink>

            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>@zed</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
