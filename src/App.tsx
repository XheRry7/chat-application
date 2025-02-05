import { Button } from "@/components/ui/Button";
import { SampleQuery } from "@/components/SampleQuery";
import "./App.css";

function App() {
  return (
    <>
      <div className="p-4">
        <Button>Click me</Button>
        <SampleQuery />
      </div>
    </>
  );
}

export default App;
