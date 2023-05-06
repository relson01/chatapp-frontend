import { theme } from "@/chakra/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/apollo-client";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import store from "../../app/store";
import { Provider } from "react-redux";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ApolloProvider client={client}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </ApolloProvider>
      </SessionProvider>
    </Provider>
  );
}
