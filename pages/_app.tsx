import React from 'react';

// https://nextjs.org/learn/basics/assets-metadata-css/global-styles

import '../styles/global.css'
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
