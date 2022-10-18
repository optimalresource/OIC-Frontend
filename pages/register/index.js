import Head from "next/head";
import { Fragment } from "react";
import RegisterPage from "components/pages/register-page";

export default function Register() {
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
      <RegisterPage />
    </Fragment>
  );
}
