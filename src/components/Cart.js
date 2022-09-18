import React from "react";
import img from "../../src/img/portrait-african-american-teenager-holding-shopping-paper-bags-buying-presents.jpg";
import cartImg1 from "../../src/img/download.jpg";
import cartImg2 from "../../src/img/images.jpg";
import cartImg3 from "../../src/img/download (1).jpg";
import {
  IoAddCircleOutline,
  IoCameraOutline,
  IoRemoveCircleOutline,
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
      className="flex justify-center items-center py-4"
    >
      <div className="w-[375px] ">
        <div className="border-b-2 pb-5">
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
              <img
                className="w-[100px] h-[100px]"
                src={cartImg1}
                alt=""
                srcset=""
              />
              <div>
                <h1 className="text-xl font-bold">Querty Watch</h1>
                <p className="flex items-center">
                  {" "}
                  <sup>
                    <FaRupeeSign />
                  </sup>{" "}
                  <span className="text-xl font-semibold"> 12,000</span>
                </p>
                <p className="text-slate-500 text-lg">
                  Color:
                  <span>Blue</span>
                </p>
                <p className="text-green-500">In stock</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center">
              <div className="flex justify-center items-center w-28  py-2  border-0 rounded-2xl bg-gray-400 bg-opacity-20 border-slate-800 ">
                <button>
                  <IoAddCircleOutline className="w-[40px]" />
                </button>
                <input
                  className="pl-2 rounded-none w-full  text-black bg-transparent outline-none text-center"
                  type="text"
                  name=""
                  id=""
                />
                <button>
                  <IoRemoveCircleOutline className="w-[40px]" />
                </button>
              </div>
              <div className="flex justify-center items-center gap-2 ml-1">
                <button className="py-1 px-2 rounded-full border-4 border-orange-500 text-orange-500">
                  Delete
                </button>
                <button className="py-1 px-2 rounded-full border-4 border-orange-500 bg-orange-500 text-white">
                  See more like this
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 222222222222222222222 */}
        <div className="border-b-2 pb-5">
          <div>
            <div className="flex justify-around items-start">
              <img
                className="w-[100px] h-[100px]"
                src={cartImg2}
                alt=""
                srcset=""
              />
              <div>
                <h1 className="text-xl font-bold">Yoga mat</h1>
                <p className="flex items-center">
                  {" "}
                  <sup>
                    <FaRupeeSign />
                  </sup>{" "}
                  <span className="text-xl font-semibold"> 1,000</span>
                </p>
                <p className="text-slate-500 text-lg">
                  Color:
                  <span>Blue</span>
                </p>
                <p className="text-green-500">In stock</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center">
              <div className="flex justify-center items-center w-28  py-2  border-0 rounded-2xl bg-gray-400 bg-opacity-20 border-slate-800 ">
                <button>
                  <IoAddCircleOutline className="w-[40px]" />
                </button>
                <input
                  className="pl-2 rounded-none w-full  text-black bg-transparent outline-none text-center"
                  type="text"
                  name=""
                  id=""
                />
                <button>
                  <IoRemoveCircleOutline className="w-[40px]" />
                </button>
              </div>
              <div className="flex justify-center items-center gap-2 ml-1">
                <button className="py-1 px-2 rounded-full border-4 border-orange-500 text-orange-500">
                  Delete
                </button>
                <button className="py-1 px-2 rounded-full border-4 border-orange-500 bg-orange-500 text-white">
                  See more like this
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 222222222222222222222 */}
        {/* 333333333333333333333 */}
        <div className="border-b-2 pb-5">
          <div>
            <div className="flex justify-around items-start">
              <img
                className="w-[100px] h-[100px]"
                src={cartImg3}
                alt=""
                srcset=""
              />
              <div>
                <h1 className="text-xl font-bold">Yoga mat</h1>
                <p className="flex items-center">
                  {" "}
                  <sup>
                    <FaRupeeSign />
                  </sup>{" "}
                  <span className="text-xl font-semibold"> 1,000</span>
                </p>
                <p className="text-slate-500 text-lg">
                  Color:
                  <span>Blue</span>
                </p>
                <p className="text-green-500">In stock</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center">
              <div className="flex justify-center items-center w-28  py-2  border-0 rounded-2xl bg-gray-400 bg-opacity-20 border-slate-800 ">
                <button>
                  <IoAddCircleOutline className="w-[40px]" />
                </button>
                <input
                  className="pl-2 rounded-none w-full  text-black bg-transparent outline-none text-center"
                  type="text"
                  name=""
                  id=""
                />
                <button>
                  <IoRemoveCircleOutline className="w-[40px]" />
                </button>
              </div>
              <div className="flex justify-center items-center gap-2 ml-1">
                <button className="py-1 px-2 rounded-full border-4 border-orange-500 text-orange-500">
                  Delete
                </button>
                <button className="py-1 px-2 rounded-full border-4 border-orange-500 bg-orange-500 text-white">
                  See more like this
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 333333333333333333333333333 */}
      </div>
    </section>
  );
};

export default cart;
