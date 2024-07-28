import { Grid } from "@tigasorei/ant";
import Editor from "./components/editor";
import InstcutionSection from "./components/instruction";

function Lab() {
  return (
    <Grid column="repeat(3, 1fr)" h="100vh">
      <InstcutionSection />
      <Editor />
      <div>Column</div>
    </Grid>
  );
}

export default Lab;
