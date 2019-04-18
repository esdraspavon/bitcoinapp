import Navbar from "../components/Navbar";

import Head from "next/head";

const Master = props => {
  return (
    <div>
      <Head>
        <title>BitcoinApp</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/yeti/bootstrap.min.css"
        />
      </Head>

      <Navbar />
      <div className="container mt-4">{props.children}</div>
    </div>
  );
};

export default Master;
