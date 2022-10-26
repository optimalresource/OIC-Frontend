import Head from "next/head";
import { Fragment } from "react";
import RegisterPage from "components/pages/register-page";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Oasis International Conference - Volunteers</title>
        <meta
          name="description"
          content="The Oasis International Conference..."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <RegisterPage />
    </Fragment>
  );
}