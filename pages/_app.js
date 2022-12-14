import "../styles/globals.css";
import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Navbar from "../components/Navbar";
import StoreProvider from "../utils/Store";
const clientSideEmotionCache = createEmotionCache();
import { UserAuthContextProvider } from "../utils/useAuthContext";
export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <StoreProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Home | Online GD System</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div>
            <UserAuthContextProvider>
              <Navbar />
              <Component {...pageProps} />
            </UserAuthContextProvider>
          </div>
        </ThemeProvider>
      </CacheProvider>
    </StoreProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
