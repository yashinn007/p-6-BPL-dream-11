import React from "react";
import dollerImg from "../../assets/dollar 1.png";

const Navbar = ({ coins }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Yashin</a>
        </div>
        <div className="flex-none">
          <button className="flex justify-between items-center gap-2 font-bold text-xl">
            {coins} Coin
            <img src={dollerImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
