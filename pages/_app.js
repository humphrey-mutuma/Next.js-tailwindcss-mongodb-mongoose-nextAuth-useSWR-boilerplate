import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { UserWrapper } from '../context/UserContext';
import Layout from '../Layout/Layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <UserWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserWrapper>
    </SessionProvider>
  );
}
export default MyApp
