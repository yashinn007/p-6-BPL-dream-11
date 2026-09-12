import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coins,
  setCoins,
}) => {
  // console.log("setSelectedPlayers", selectedPlayers);

  const handelDeleteSelectedPlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName != player.playerName,
    );
    // console.log(filteredPlayers);
    setSelectedPlayers(filteredPlayers);
    setCoins(coins + player.price);
  };

  return (
    <div>
      {selectedPlayers.length === 0 ? (
        <div className="h-100 flex items-center justify-center flex-col gap-4">
          <h2 className="text-xl font-semibold">No players selected yet</h2>
          <p>Go to Available tab to selected players</p>
        </div>
      ) : (
        selectedPlayers.map((player, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-6 justify-between p-10 rounded-2xl border my-5"
            >
              <div className="flex gap-4 items-center">
                <img className="w-12" src={player.playerImg} alt="" />
                <div>
                  <h2 className="flex items-center gap-2 font-bold text-3xl">
                    {" "}
                    <FaUser></FaUser> {player.playerName}
                  </h2>
                  <p>{player.playerType}</p>
                </div>
              </div>
              <button
                className="btn text-red-500"
                onClick={() => handelDeleteSelectedPlayer(player)}
              >
                <MdDelete></MdDelete>
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SelectedPlayers;
