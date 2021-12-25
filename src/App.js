import "./App.css";
import Header from "./Header.js";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton.js";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <TinderCards />
      <SwipeButton />
    </div>
  );
}

export default App;
