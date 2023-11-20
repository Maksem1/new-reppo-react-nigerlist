import { useState } from "react";
import NigerList from "./componets/niger-list/NigerList";

const App = () => {
  const [nigers, setNigers] = useState(["Billy", "Леха"]);

  return (
    <div className="app">
      <NigerList nigers={nigers} />
    </div>
  );
};

export default App;
