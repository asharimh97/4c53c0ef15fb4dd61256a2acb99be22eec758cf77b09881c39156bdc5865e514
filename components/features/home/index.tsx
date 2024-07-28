import {
  Box,
  Button,
  color,
  Flex,
  Grid,
  Heading,
  Paragraph,
  StatusChips,
} from "@tigasorei/ant";
import { useRouter } from "next/router";
import { FaLaptopCode, FaChevronRight } from "react-icons/fa";

function Home() {
  const router = useRouter();

  const handleClickButton = () => {
    router.push("/lab/learning");
  };

  return (
    <>
      <header style={{ width: "100%" }}>
        <Flex w="992px" m="auto" h="64px" alignItems="center" gap="16px">
          <FaLaptopCode />
          <Heading variant="Heading14">CodeLab</Heading>
        </Flex>
      </header>
      <main style={{ width: 992, margin: "auto" }}>
        <h1>Welcome to CodeLab!</h1>
        <Grid column="repeat(3, 1fr)" gap="16px" w="100%" mb="24px">
          {/* create array */}
          {Array.from({ length: 6 }, (_, index) => index + 1).map((index) => (
            <Box
              border={`solid 1px ${color.grey40}`}
              p="12px"
              style={{ borderRadius: 8 }}
              key={index}
            >
              <Heading variant="Heading14">
                Your Learning Course {index}
              </Heading>
              <Paragraph variant="Body12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                purus vitae ligula ultricies cursus.
              </Paragraph>

              <Flex gap="12px">
                <StatusChips status="">Language</StatusChips>
                <StatusChips status="success">Easy</StatusChips>
              </Flex>
            </Box>
          ))}
        </Grid>
        <Button variant="text-only" size="large" onClick={handleClickButton}>
          Continue learning <FaChevronRight />
        </Button>
      </main>
    </>
  );
}

export default Home;
