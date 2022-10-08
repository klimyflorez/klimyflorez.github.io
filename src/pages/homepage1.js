import Head from "next/head";
import { HeroSection } from "../components/containers";
import { Layout2 } from "../components/layout";

const Homepage3 = () => {
  return (
    <Layout2>
      <Head>
        <title>Klimy Florez López | Backend Developer</title>
      </Head>

      {/* Start Hero Section */}
      <HeroSection scroll={false} />
      {/* End Hero Section */}
    </Layout2>
  );
};

export default Homepage3;