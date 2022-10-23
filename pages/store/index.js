import Head from "next/head";
import { Fragment } from "react";

import AdultsProductListing from "../../components/layouts/adults-product-listing";
import KidsProductListing from "../../components/layouts/kids-product-listing";

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
      <div className="w-[100%] textlg font-bold  mt-[200px] relative">
        <AdultsProductListing />
      </div>

      <div className="w-[100%] textlg font-bold  mt-[100px] relative">
        <KidsProductListing />
      </div>
    </Fragment>
  );
}
