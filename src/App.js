import { useState } from "react";
import AnagramForm from "./components/Anagram";
import Button from "./components/Button";
import Card from "./components/Card";
import Wordbase from "./components/Wordbase";

function App() {
  const [currentForm, setCurrentForm] = useState("Anagram");

  return (
    <div className="w-full py-10 flex flex-col items-center">
      <div className="flex justify-center">
        <Button onClick={() => setCurrentForm("Anagram")}>Check anagram</Button>
        <Button onClick={() => setCurrentForm("Link")}>Submit wordbase</Button>
      </div>
      <Card>
        {currentForm === "Anagram" && <AnagramForm />}
        {currentForm === "Link" && <Wordbase />}
      </Card>
    </div>
  );
}

export default App;
