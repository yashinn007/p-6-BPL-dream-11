import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-130 container mx-auto mt-1"
      style={{
        backgroundImage:
          "url(https://img.magnific.com/free-photo/cricket-match-with-player_23-2151702186.jpg?semt=ais_hybrid&w=740&q=80)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mb-5 text-xl">Beyond Boundaries Beyond Limits</p>
          <button className="btn bg-[#E7FE29] font-bold">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
