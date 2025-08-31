import Menu from "./components/Menu/Menu";
import { Toaster } from "./components/ui/toaster";
import ChoiceHeroDialog from "./components/Hero/ChoiceHero/ChoiceHeroDialog";

function App() {
  return (
    <>
      <Menu />
      <ChoiceHeroDialog />
      <Toaster />
    </>
  );
}

export default App;
