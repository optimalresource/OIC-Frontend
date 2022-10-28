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
          content="RCCG The Oasis International Conference usually holds once in a year. It's a gathering of Christians who are hungry for the word and presence of God. Over the years, countless lives have been transformed."
        />
        <meta
          name="og:title"
          content="RCCG The Oasis International Conference"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="rccgoic.com" />
        <meta
          property="og:site_name"
          content="RCCG The Oasis International Conference"
        />
        <meta
          property="og:description"
          content="RCCG The Oasis International Conference usually holds once in a year. It's a gathering of Christians who are hungry for the word and presence of God. Over the years, countless lives have been transformed."
        />
        <meta property="og:image" content="/fav.png" />
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
