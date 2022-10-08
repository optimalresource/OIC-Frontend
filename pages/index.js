import Head from "next/head";
import { Fragment } from "react";
import LandingPage from "components/pages/landing-page";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Oasis International Conference</title>
        <meta
          name="description"
          content="The Oasis International Conference..."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <LandingPage />
    </Fragment>
  );
}
