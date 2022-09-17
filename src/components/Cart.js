import React from "react";
import img from "../../src/img/portrait-african-american-teenager-holding-shopping-paper-bags-buying-presents.jpg";
import cartImg1 from "../../src/img/download.jpg";
import cartImg2 from "../../src/img/images.jpg";
import cartImg3 from "../../src/img/download (1).jpg";
import {
  IoAddCircleOutline,
  IoCameraOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
const cart = () => {
  const cartData = [
    {
      _id: "1",
      name: "Anchor Bracelet",
      color: "Brown",
      price: "1200",
      img: { cartImg1 },
    },
    {
      _id: "2",
      name: "Anchor Bracelet",
      color: "1000",
      price: "Blue",
      img: { cartImg2 },
    },
    {
      _id: "3",
      name: "Anchor Bracelet",
      color: "Gold",
      price: "800",
      img: { cartImg3 },
    },
  ];
  return (
    <section
      // style={{ background: `url(${img})`, backgroundSize: "cover" }}
      className="flex justify-center items-center"
    >
      <div className="w-[375px] ">
        <div class="flex items-center  py-2 px-3  mb-4 border-0 rounded-2xl bg-gray-400 bg-opacity-20 border-slate-800 ">
          <IoSearchOutline className="w-9 h-9 " />
          <input
            class="pl-2 rounded-none w-full max-w-xs text-black bg-transparent outline-none"
            type="text"
            placeholder="Search"
          />

          <IoCameraOutline className="w-9 h-9 border-black pl-2 border-l-2" />
        </div>

        <div>
          <div className="flex justify-around items-start">
            <img src={cartImg1} alt="" srcset="" />
            <div>
              <h1 className="text-xl font-bold">Anchor Bracelet</h1>
              <p className="flex items-center">
                {" "}
                <sup>
                  <FaRupeeSign />
                </sup>{" "}
                <span className="text-xl"> 12,000</span>
              </p>
              <p>Color:Blue</p>
              <p className="text-green-500">In stock</p>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="flex justify-center items-center w-28  py-2 px-3  mb-4 border-0 rounded-2xl bg-gray-400 bg-opacity-20 border-slate-800 ">
              <IoAddCircleOutline className="w-[20px]" />
              <input
                className="pl-2 rounded-none w-16  text-black bg-transparent outline-none"
                type="text"
                name=""
                id=""
              />
              <IoAddCircleOutline className="w-[20px]" />
            </div>
            <div className="flex justify-center items-center gap-2">
              <button className="btn btn-sm">Delete</button>
              <button className="btn btn-sm">See more like this</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cart;
