import Head from "next/head";
import { Fragment } from "react";
import LandingPage from "components/pages/landing-page";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Oasis International Conference</title>
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
      <LandingPage />
    </Fragment>
  );
}
