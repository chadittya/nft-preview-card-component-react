import React from "react";
import imgEquilibrium from "../assets/images/image-equilibrium.jpg";
import iconEthereum from "../assets/images/icon-ethereum.svg";
import iconClock from "../assets/images/icon-clock.svg";
import imgAvatar from "../assets/images/image-avatar.png";

export default function NftCard() {
  return (
    // wrapper
    <div className="box-border flex justify-center items-center h-screen">
      {/* card */}
      <div className="bg-cust-n-card-BG w-[350px] h-[596px] rounded-2xl shadow-[0px_30px_1px_15px_#0c1729,0px_40px_10px_50px_#0d182b]">
        {/* card item wrapper */}
        <div className="px-6 py-6">
          {/* card items */}
          <div className="group relative">
            <img
              src={imgEquilibrium}
              alt="equilibrium"
              className="rounded-lg"
            />
            <a href="#">
              <div class="bg-[url('../assets/images/icon-view.svg')] bg-no-repeat bg-center absolute top-0 left-0 w-full flex flex-col justify-center items-center opacity-0 h-0 bg-cust-p-Cyan bg-opacity-50 group-hover:opacity-100 group-hover:h-full hover:rounded-lg hover:cursor-pointer"></div>
            </a>
          </div>
          <div>
            <h1 className="text-2xl py-4 font-bold">
              Equilibrium
              <a href="#">
                <span className="hover:text-cust-p-Cyan hover:cursor-pointer">
                  {" "}
                  #3429
                </span>
              </a>
            </h1>
          </div>
          <div>
            <p className="text-cust-p-Soft-blue pb-4">
              Our Equilibrium collection promotes balance and calm.
            </p>
          </div>
          <div className="divide-y divide-cust-n-line">
            <div className="flex flex-row justify-between pb-5">
              <div className="flex flex-row justify-center items-center gap-2">
                <img src={iconEthereum} alt="ethereum" />
                <span className="text-[15px] text-cust-p-Cyan">0.041 ETH</span>
              </div>
              <div className="flex flex-row gap-2 justify-center items-center">
                <img src={iconClock} alt="time" />
                <span className="text-[15px] text-cust-p-Soft-blue">
                  3 days left
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-3 pt-5">
              <img
                src={imgAvatar}
                alt="avatar"
                className="w-[30px] ring-1 rounded-full ring-white"
              />
              <p>
                <span className="text-cust-p-Soft-blue text-[16px]">
                  Creation of
                </span>
                <a href="#">
                  <span className="hover:text-cust-p-Cyan hover:cursor-pointer">
                    {" "}
                    Jules Wyvern
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
