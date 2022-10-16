import Head from "next/head";
import { Fragment } from "react";
import MinistersPage from "components/pages/ministers-page";
export default function Ministers() {
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
     <MinistersPage />
    </Fragment>
  );
}
