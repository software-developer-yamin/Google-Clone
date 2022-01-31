import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import Response from "../Response";

function Search({ data }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/images/download.png" />
      </Head>
      <SearchHeader />
      <SearchResults data={data} />
    </div>
  );
}

export default Search;

export const getServerSideProps = async (ctx) => {
  const useDummyData = false;
  const startIndex = ctx.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXTS_KEY}&q=${ctx.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
};
