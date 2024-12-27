import { Grid } from "./grid";
import { Header } from "./header";
import { Tagline } from "./tagline";

export function HeroSection() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Tagline />
      <Grid />
    </div>
  );
}
