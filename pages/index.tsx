import { useState } from "react";
import { useQuery } from "react-query";
import { Chart } from "../components/Chart";
import { Dropdown } from "../components/Dropdown";
import { Layout } from "../components/UI/Layout";
import { fetchNation } from "../utils/fetches";

const Home = () => {
  const [currentRegion, setRegion] = useState("London");
  const { data, status } = useQuery(["nation", currentRegion], () =>
    fetchNation(currentRegion)
  );

  return (
    <Layout>
      <>
        <Dropdown setRegion={setRegion} />
        {status === "loading" && <span>Loading...</span>}
        {status === "error" && <span>Some error ocurred!</span>}
        {status === "success" && <Chart data={data} />}
      </>
    </Layout>
  );
};

export default Home;
