import FAQComponent from "components/pages/faq-page";
import Head from "next/head";
import { Fragment } from "react";

export default function FAQ() {
  return (
    <Fragment>
      <Head>
        <title>Oasis International Conference - FAQs</title>
        <meta
          name="description"
          content="The Oasis International Conference..."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <FAQComponent />
    </Fragment>
  );
}
