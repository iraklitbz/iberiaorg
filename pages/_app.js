import { useEffect, useState } from "react";
import "../scss/main.scss";
import { IntlProvider } from 'react-intl';
import { useRouter } from "next/router"
import { client } from "../lib/wordpress/client";

import { ApolloProvider } from "@apollo/client";
const languages = {
  es: require('../translations/es.json'),
  ge: require('../translations/ge.json')
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const UtilScript = document.createElement('script');
    UtilScript.setAttribute('src','https://iberiainfo.me/wp-content/themes/redirect/Util.js');
    if(!document.getElementsByTagName("html")[0].classList.contains('js'))
    document.getElementsByTagName("html")[0].className += " js";
    document.head.appendChild(UtilScript);
  },[])
  const router = useRouter()
  const { locale, defaultLocale } = router;
  const messages = languages[locale];
  return (
    <ApolloProvider client={client}>
      <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale}>
          <Component {...pageProps} />
      </IntlProvider>
    </ApolloProvider>
  )
}

export default MyApp
