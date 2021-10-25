import React from "react";
import Pagination from "../../components/Pagination/Pagination";

const Review = () => {
  const review = true;
  return (
    <div className="w-full">
      {!review ? (
        <div className="Montserrat-m font-normal text-[#b7b7b7] text-center py-20">
          No reviews
        </div>
      ) : (
        <div className="px-24 ">
          {/* show single review here  : space-x-8*/}
          {/* border-b border-dashed border-[#cccccc] */}
          <div className="flex flex-row py-4 border-review border-opacity-50 ">
            <div className="flex flex-col w-3/5 bg-red-400 ">
              <h2 className="text-[#202124] Montserrat-m font-bold">You</h2>
              <p className="Montserrat-s font-normal ">Edit | Delete</p>
            </div>
            <div className=" flex w-full flex-col bg-[#f9f9f9] py-4 px-8 space-y-2">
              <div className="w-full ">
                <input
                  type="text"
                  placeholder="TITLE"
                  className="w-full py-2 px-5 Montserrat-b text-[#b7b7b7] border-none focus:outline-none "
                />
              </div>
              <textarea
                rows="5"
                placeholder="Add your comment here…"
                className="focus:outline-none resize-none p-4 Montserrat-m font-normal text-[#b7b7b7]"
              />
              <div className="flex justify-between items-center">
                <div className=" flex flex-col">
                  <p className="Montserrat-m font-normal text-[#808080]">
                    *Rating for us:
                  </p>
                  <div className="flex flex-row space-x-1">
                    <img src="/img/yellow-star.svg" alt="yellow star" />
                    <img src="/img/yellow-star.svg" alt="yellow star" />
                    <img src="/img/yellow-star.svg" alt="yellow star" />
                    <img src="/img/yellow-star.svg" alt="yellow star" />
                  </div>
                </div>
                <button className="">Submit</button>
              </div>
            </div>
          </div>
          {/* border-b border-dashed border-[#cccccc] */}
          <div className="flex flex-row py-4 border-review border-opacity-50 ">
            <div className="flex flex-col w-3/5">
              <h2 className="text-[#202124] Montserrat-m font-bold">
                Julia Ryan
              </h2>
              <p className="Montserrat-m font-normal">31 Jul</p>
            </div>
            <div className=" flex flex-grow flex-col bg-[#f9f9f9] py-4 px-4">
              <h2 className="text-[#202124] Montserrat-m font-bold">
                Super cute in black
              </h2>
              <div className="flex flex-row space-x-1">
                <img src="/img/yellow-star.svg" alt="yellow star" />
                <img src="/img/yellow-star.svg" alt="yellow star" />
                <img src="/img/yellow-star.svg" alt="yellow star" />
                <img src="/img/yellow-star.svg" alt="yellow star" />
              </div>
              <p className="Montserrat-m text-[#4d4d4d] font-normal pt-5">
                I love the vintage pattern of the black dress. I got a size 6
                and it fits well without being too tight. I can't tell if it's
                "tru to size" because everything fits a bit differently from
                store to store and brand to brand. I'm 5'4" with a 34D chest and
                it hit about mid thigh, which I like. I also like the material
                and structured shape of the dress because it's easy to dress up
                or down.
              </p>
            </div>
          </div>
          {/* show single review here  : space-x-8*/}
          <div className="flex flex-row py-4 ">
            <div className="flex flex-col w-3/5">
              <h2 className="text-[#202124] Montserrat-m font-bold">
                Julia Ryan
              </h2>
              <p className="Montserrat-m font-normal">31 Jul</p>
            </div>
            <div className=" flex flex-grow flex-col bg-[#f9f9f9] py-4 px-4">
              <h2 className="text-[#202124] Montserrat-m font-bold">
                Super cute in black
              </h2>
              <div className="flex flex-row space-x-1">
                <img src="/img/yellow-star.svg" alt="yellow star" />
                <img src="/img/yellow-star.svg" alt="yellow star" />
                <img src="/img/yellow-star.svg" alt="yellow star" />
                <img src="/img/yellow-star.svg" alt="yellow star" />
              </div>
              <p className="Montserrat-m text-[#4d4d4d] font-normal pt-5">
                I love the vintage pattern of the black dress. I got a size 6
                and it fits well without being too tight. I can't tell if it's
                "tru to size" because everything fits a bit differently from
                store to store and brand to brand. I'm 5'4" with a 34D chest and
                it hit about mid thigh, which I like. I also like the material
                and structured shape of the dress because it's easy to dress up
                or down.
              </p>
            </div>
          </div>
          <div className="flex justify-end pb-16">
            <Pagination page={1} setPage={200} />
            {/* {data?.length === 20 && (
              <Pagination page={page} setPage={setPage} />
            )} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
