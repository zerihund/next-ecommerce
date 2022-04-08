import React, { Children } from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next Ecommerce</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Ecommerce</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>@zed</Typography>
      </footer>
    </div>
  );
}
