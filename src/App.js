import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Wordbase from "./components/Wordbase";
import Anagram from "./components/Anagram";

function App() {
  // decides which form should currently be displayed
  const [currentForm, setCurrentForm] = useState("Anagram");

  return (
    <div className="w-full py-10 flex flex-col items-center">
      <div className="flex justify-center">
        <Button onClick={() => setCurrentForm("Anagram")}>Check anagram</Button>
        <Button onClick={() => setCurrentForm("Link")}>Submit wordbase</Button>
      </div>
      <Card>
        {currentForm === "Anagram" && <Anagram />}
        {currentForm === "Link" && <Wordbase />}
      </Card>
    </div>
  );
}

export default App;
