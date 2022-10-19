import Head from "next/head";
import { Fragment } from "react";
import AboutComponent from "components/pages/about-page";

export default function About() {
  return (
    <Fragment>
      <Head>
        <title>Oasis International Conference - About Page</title>
        <meta
          name="description"
          content="The Oasis International Conference..."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <AboutComponent />
    </Fragment>
  );
}
