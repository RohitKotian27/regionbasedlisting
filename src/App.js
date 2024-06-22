import { useEffect, useState } from "react";
import { geoLocationAPI } from "./urls/constants";
import Home from "./components/Home";

function App() {
  const [userCountry, setUserCountry] = useState("");
  async function fetchUserRegion() {
    const requiredData = await fetch(geoLocationAPI).then((res) => res.json());
    setUserCountry(requiredData.country.name);
  }
  useEffect(() => {
    fetchUserRegion();
  }, []);
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800 w-full md:h-screen">
      {userCountry ? <Home country={userCountry}/> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
