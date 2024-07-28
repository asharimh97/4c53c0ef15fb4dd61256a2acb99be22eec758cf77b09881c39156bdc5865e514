import { Grid } from "@tigasorei/ant";
import Editor from "./components/editor";

function Lab() {
  return (
    <Grid column="repeat(3, 1fr)" h="100vh">
      <div>Column</div>
      <Editor />
      <div>Column</div>
    </Grid>
  );
}

export default Lab;
