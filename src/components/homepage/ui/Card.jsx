import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ player, setCoins, coins }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handelChoosePlayer = () => {
    let newCoin = coins - player.price;
    if (newCoin >= 0) {
      setCoins(newCoin);
    } else {
      alert("Not enough coin for purchese this player");
      return;
    }

    alert(`${player.playerName} is selected`);
    setIsSelected(true);
  };

  return (
    <div className="card bg-base-100 shadow-sm/20">
      <figure>
        <img className="w-40" src={player.playerImg} alt="player" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser></FaUser> {player.playerName}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <FaFlag></FaFlag>
            <p>{player.playerCountry}</p>
          </div>

          <button className="btn">{player.playerType}</button>
        </div>

        <div className="divider"></div>

        <h2 className="font-bold">Rating {player.rating}</h2>
        <div className="flex justify-between gap-8">
          <p className="font-bold">{player.battingStyle}</p>
          <p className="text-right">{player.bowlingStyle}</p>
        </div>

        <div className="card-actions justify-between items-center">
          <p className="font-bold">Price: ${player.price}</p>
          <button
            className="btn"
            onClick={handelChoosePlayer}
            disabled={isSelected ? true : false}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
