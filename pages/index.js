import Head from "next/head";
import { Fragment } from "react";
import Volunteers from "components/pages/volunteers";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Oasis International Conference</title>
        <meta
          name="description"
          content="A portal for checking the RCCG hierarchy and personnels, vision and mission statement"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Volunteers />
    </Fragment>
  );
}
