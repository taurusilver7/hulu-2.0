import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results */}
      <Results />
    </div>
  );
}

// serverside rendering first, client side render next
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  // req to the database.
}
