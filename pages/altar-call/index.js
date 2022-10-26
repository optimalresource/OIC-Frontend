import Head from "next/head";
import { Fragment } from "react";
import AltarCallComponent from "components/pages/altar-call-page";

export default function AltarCall() {
  return (
    <Fragment>
      <Head>
        <title>Oasis International Conference - Altar Call</title>
        <meta
          name="description"
          content="The Oasis International Conference..."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <AltarCallComponent />
    </Fragment>
  );
}
