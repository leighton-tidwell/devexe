import type { NextPage } from "next";
import { Button, Logo } from "@/components/index";

const Home: NextPage = () => {
  return (
    <div>
      <Button type="button" onClick={() => {}}>
        Test
      </Button>
      <Logo sx={{ width: "20px" }} />
    </div>
  );
};

export default Home;
