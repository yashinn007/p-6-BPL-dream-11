import React, { use, useState } from "react";
import AvailablePlayers from "./availablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoins, coins }) => {
  // console.log(playersPromise);
  const players = use(playersPromise);
  //state select for Tab
  const [selectedBtn, setSelectedBtn] = useState("available");
  //select state for selected players
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="flex justify-between items-center my-8">
          {selectedBtn === "available" ? (
            <h2 className="font-bold text-3xl">Available Players</h2>
          ) : (
            <h2 className="font-bold text-3xl">
              Selected Player ({selectedPlayers.length}/{players.length})
            </h2>
          )}

          <div>
            <button
              onClick={() => setSelectedBtn("available")}
              className={`btn ${selectedBtn === "available" ? "bg-[#E7FE29]" : "bg-base-200"} rounded-r-none rounded-l-xl`}
            >
              Available
            </button>
            <button
              onClick={() => setSelectedBtn("selected")}
              className={`btn ${selectedBtn === "selected" ? "bg-[#E7FE29]" : "bg-base-200"} rounded-l-none rounded-r-xl`}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>
        {selectedBtn === "available" ? (
          <AvailablePlayers
            players={players}
            setCoins={setCoins}
            coins={coins}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></AvailablePlayers>
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            setCoins={setCoins}
            coins={coins}
          ></SelectedPlayers>
        )}
      </div>
    </>
  );
};

export default Players;
