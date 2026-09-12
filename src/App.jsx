import { Suspense } from "react";
import "./App.css";
import Banner from "./components/homepage/banner/Banner";
import Players from "./components/homepage/players/Players";
import Navbar from "./components/navbar/Navbar";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayer();
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Banner></Banner>
        <Suspense
          fallback={<span className="loading loading-dots loading-lg"></span>}
        >
          <Players playersPromise={playersPromise}></Players>
        </Suspense>
      </main>
    </>
  );
}

export default App;
