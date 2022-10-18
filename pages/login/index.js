import Head from "next/head";
import { Fragment } from "react";
import LandingPage from "components/pages/landing-page";

export default function Login() {
  return (
    <Fragment>
      <Head>
        <title>Oasis International Conference - Login</title>
        <meta
          name="description"
          content="The Oasis International Conference..."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="textlg font-bold h-[500px] mt-[200px] relative">
        This is the Login page
      </div>
    </Fragment>
  );
}
