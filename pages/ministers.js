import Head from "next/head";
import { Fragment } from "react";
import LandingPage from "components/pages/landing-page";

export default function Minster() {
  return (
    <Fragment>
      <Head>
        <title>Oasis International Conference - Ministers Page</title>
        <meta
          name="description"
          content="The Oasis International Conference..."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="textlg font-bold h-[500px] mt-[200px] relative">
        This is the minister&lsquo;s page
      </div>
    </Fragment>
  );
}
