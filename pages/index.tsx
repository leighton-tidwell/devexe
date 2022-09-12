import type { NextPage } from "next";
import { Button, Logo } from "@/components/index";

const Home: NextPage = () => {
  return (
    <>
      <Button type="button" loading={true} onClick={() => {}}>
        Test
      </Button>
      <Logo sx={{ width: "20px" }} />
    </>
  );
};

export default Home;
