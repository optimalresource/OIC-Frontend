import Head from "next/head";
import { Fragment } from "react";

export default function Store() {
  return (
    <Fragment>
      <Head>
        <title>Oasis International Conference - Store</title>
        <meta
          name="description"
          content="The Oasis International Conference..."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="textlg font-bold h-[500px] mt-[200px] relative">
        This is the store page
      </div>
    </Fragment>
  );
}