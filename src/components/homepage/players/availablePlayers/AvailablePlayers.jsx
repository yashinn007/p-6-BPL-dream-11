import React from "react";
import Card from "../../ui/Card";

const AvailablePlayers = ({
  players,
  setCoins,
  coins,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  //   console.log("players:", players);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {players.map((player, index) => {
          // console.log(player);
          return (
            <Card
              key={index}
              player={player}
              setCoins={setCoins}
              coins={coins}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
