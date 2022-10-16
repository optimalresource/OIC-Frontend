import Head from "next/head";
import { Fragment } from "react";

export default function Stream() {
  return (
    <Fragment>
      <Head>
        <title>Oasis International Conference - Stream</title>
        <meta
          name="description"
          content="The Oasis International Conference..."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="textlg font-bold h-[500px] mt-[200px] relative">
        This is the Stream page
      </div>
    </Fragment>
  );
}
