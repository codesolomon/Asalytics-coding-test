import type { NextPage } from "next";
import Layout from "@components/Layout";
import CardMultiple from "@components/CardMultiple";
import { get } from "lodash";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../library/withApollo";
import { MyQueryQuery, useMyQueryQuery } from "../generated";
import Hero from "@src/components/Hero";

const Home: NextPage = () => {
  const { data } = useMyQueryQuery();

  const asalist = get(
    data,
    "asalist.result",
    []
  ) as MyQueryQuery["asalist"]["result"];
  console.log(asalist);

  return (
    <div>
      <Layout>
        <Hero />
        <CardMultiple AsaList={asalist} />
      </Layout>
    </div>
  );
};

export default withApollo(Home, { getDataFromTree });
