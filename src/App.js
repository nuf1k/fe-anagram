import AnagramForm from "./components/AnagramForm";
import LinkForm from "./components/LinkForm";

function App() {
  return (
    <div className="bg-slate-400 w-screen h-screen flex justify-around py-10">
      <AnagramForm />
      <LinkForm />
    </div>
  );
}

export default App;
