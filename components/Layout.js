import React from "react";
import Head from "next/head";
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from '@material-ui/core';
import useStyles from "../utils/styles";

export default function Layout({ children }) {
    const classes =useStyles()
  return (
    <div>
      <Head>
        <title>Next Ecommerce</title>
      </Head>
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
            <NextLink href="/signin" passHref>
              <Link>Sign In</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer} >
        <Typography>@zed</Typography>
      </footer>
    </div>
  );
}
