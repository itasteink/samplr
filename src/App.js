import "./styles.css";
import { useMap } from "react-use";

import { TopBar } from "./components/TopBar";
import { SearchBar } from "./components/SearchBar";

export const App = () => {
  const foo = useMap();

  return (
    <div className="App">
      <TopBar />
      <SearchBar />
      <h1>howdy</h1>
      <h2>live preview is awesome</h2>
    </div>
  );
};
