import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import RatingStar from "../../components/RatingStar/RatingStar";
import Button from "../../components/UI/Button";
const Review = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [editReview, setEditReview] = useState(false)
  const { user } = useSelector((state) => state.auth);


  

  console.log(user);
  // get reviews from backend.
  // if user's review Id === user's loggin => you and edit/delete, otherwise show form to submit review
  const review = true;


  const handleReview = (e) => {
    e.preventDefault();
    // send review to backend
    setEditReview(true)
  };
  return (
    <div className="w-full">
      {!review ? (
        <div className="Montserrat-m font-normal text-[#b7b7b7] text-center py-20">
          No reviews
        </div>
      ) : (
        <div className="px-24 ">
          {/* border-b border-dashed border-[#cccccc] */}
          {/*   login and show this */}
          <form
            onSubmit={handleReview}
            className="grid grid-cols-6 py-4 border-b border-solid border-[#cccccc] border-opacity-50 "
          >
            <div className="col-span-1 ">
              <h2 className="text-[#202124] Montserrat-m font-bold">You</h2>
              <p className="Montserrat-s font-normal ">Edit | Delete</p>
            </div>
            <div className=" flex col-span-5 flex-col bg-[#f9f9f9] py-4 px-8 space-y-2">
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
                  <RatingStar
                    rating={rating}
                    setRating={setRating}
                    hover={hover}
                    setHover={setHover}
                  />
                </div>
                <div className="w-[120px] ">
                  <Button
                    type="submit"
                    label="Submit"
                    btnDisabled={!rating}
                    textNormal
                  />
                </div>
              </div>
            </div>
          </form>
          {/* border-b border-dashed border-[#cccccc] */}

          <div className="grid grid-cols-6 py-4 border-review border-opacity-50 ">
            <div className="col-span-1">
              <h2 className="text-[#202124] Montserrat-m font-bold">
                Julia Ryan
              </h2>
              <p className="Montserrat-m font-normal">31 Jul</p>
            </div>
            <div className=" flex col-span-5 flex-col bg-[#f9f9f9] py-4 px-4">
              <h2 className="text-[#202124] Montserrat-m font-bold">
                Super cute in black
              </h2>
              <RatingStar rating={5} setRating={() => {}} setHover={() => {}} />
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
          <div className="grid grid-cols-6 py-4 ">
            <div className="col-span-1">
              <h2 className="text-[#202124] Montserrat-m font-bold">
                Julia Ryan
              </h2>
              <p className="Montserrat-m font-normal">31 Jul</p>
            </div>
            <div className=" flex col-span-5 flex-col bg-[#f9f9f9] py-4 px-4">
              <h2 className="text-[#202124] Montserrat-m font-bold">
                Super cute in black
              </h2>
              <RatingStar rating={4} setRating={() => {}} setHover={() => {}} />
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
