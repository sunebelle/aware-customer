import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="relative w-full h-[513px]">
        <img
          className="w-full object-fill h-[513px]"
          src="/img/img/coverImg.jpg"
          alt="cover"
        />
        <h2 className="uppercase text-white Domine-b text-5xl absolute top-10 right-10 ">
          Outfit of the week
        </h2>
        <button className="Montserrat-b text-center absolute right-8 bottom-10 text-white py-2 w-44 bg-[#ffa15f] shadow-lg">
          Shop now
        </button>
      </div>
      <div className="flex justify-between mt-4 space-x-4">
        <div className="flex w-full h-[405px] relative">
          <img
            className="w-full h-full  object-fill"
            src="/img/img/men.jpg"
            alt="men"
          />
          <div className="absolute bottom-0 w-full py-6 px-auto flex flex-col justify-center items-center ">
            <h4 className=" text-white Domine-b text-2xl mb-2">Men</h4>
            <div className="border-t flex-grow mb-4 w-5/6 border-[#eaeaea]"></div>
            <Link to="/Men">
              <button className="Montserrat-m btn-shop-small">Shop now</button>
            </Link>
          </div>
        </div>
        <div className="flex w-full  h-[405px] relative">
          <img
            className="w-full object-fill h-full "
            src="/img/img/ladies.jpg"
            alt="ladies"
          />
          <div className="absolute bottom-0 w-full py-6 px-auto flex flex-col justify-center items-center ">
            <h4 className=" text-white Domine-b text-2xl mb-2">Ladies</h4>
            <div className="border-t flex-grow mb-4 w-5/6 border-[#eaeaea]"></div>
            <Link to="/Ladies">
              <button className="Montserrat-m btn-shop-small">Shop now</button>
            </Link>
          </div>
        </div>
        <div className="flex w-full h-[405px] relative">
          <img
            className="w-full h-full object-fill"
            src="/img/img/girls.jpg"
            alt="girls"
          />
          <div className="absolute bottom-0 w-full py-6 px-auto flex flex-col justify-center items-center ">
            <h4 className=" text-white Domine-b text-2xl mb-2">Girls</h4>
            <div className="border-t flex-grow mb-4 w-5/6 border-[#eaeaea]"></div>
            <Link to="/Girls">
              <button className="Montserrat-m btn-shop-small">Shop now</button>
            </Link>
          </div>
        </div>
        <div className="flex w-full h-[405px] relative">
          <img
            className="w-full h-full object-fill "
            src="/img/img/boys.jpg"
            alt="boys"
          />
          <div className="absolute bottom-0 w-full py-6 px-auto flex flex-col justify-center items-center ">
            <h4 className=" text-white Domine-b text-2xl mb-2">Boys</h4>
            <div className="border-t flex-grow mb-4 w-5/6 border-[#eaeaea]"></div>
            <Link to="/Boys">
              <button className="Montserrat-m btn-shop-small">Shop now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
