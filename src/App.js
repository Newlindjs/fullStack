import { Footer } from "./components/footer";
import { Hello } from "./components/hello";

const App = () => {
  const name = "Haniel";
  const age = 7;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Newlin" age={10 + 21} />
      <Hello name={name} age={age} />
      <Footer />
    </div>
  );
};

export default App;
