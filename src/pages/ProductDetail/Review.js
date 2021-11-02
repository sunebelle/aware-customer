import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import month from "../../utils/month";
import Pagination from "../../components/Pagination/Pagination";
import RatingStar from "../../components/RatingStar/RatingStar";
import Button from "../../components/UI/Button";
import {
  createAReview,
  getAllReviews,
  deleteAReview,
} from "../../actions/review";
import { useDispatch } from "react-redux";
const Review = ({ product }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  // const [editReview, setEditReview] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const { reviews } = useSelector((state) => state.review);
  const userReview = reviews.find(
    (review) => review.user._id === user?.data?.user?._id
  ); //return value
  const filteredReviews = reviews.filter(
    (review) => review.user._id !== user?.data?.user?._id
  ); //return array
  const dispatch = useDispatch();

  console.log("Review", reviews);
  console.log("Review - filter", filteredReviews);

  useEffect(() => {
    dispatch(getAllReviews(product._id));
  }, [product, dispatch]);

  const handleReview = (e) => {
    e.preventDefault();
    dispatch(createAReview({ title, rating, review }, product._id));
    // setEditReview(true);
  };
  return (
    <div className="w-full px-24">
      {!user ? (
        reviews?.length > 0 ? (
          <>
            {reviews.map((review) => (
              <div
                key={review._id}
                className="grid grid-cols-6 py-4  border-review border-opacity-50 "
              >
                <div className="col-span-1 py-4">
                  <h2 className="text-[#202124] Montserrat-m font-bold">
                    {review.user.name}
                  </h2>
                  <p className="Montserrat-m font-normal text-[#808080]">{`${new Date(
                    review.createdAt
                  ).getDate()} ${
                    month[new Date(review.createdAt).getMonth()]
                  }`}</p>
                </div>
                <div className=" flex col-span-5 flex-col bg-[#f9f9f9] py-4 px-4">
                  <h2 className="text-[#202124] Montserrat-b ">
                    {review.title}
                  </h2>
                  <RatingStar
                    rating={review.rating}
                    setRating={() => {}}
                    setHover={() => {}}
                  />
                  {review.review && (
                    <p className="Montserrat-m text-[#4d4d4d] font-normal pt-5">
                      {review.review}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="Montserrat-m font-normal text-[#b7b7b7] text-center py-20">
            No reviews
          </div>
        )
      ) : userReview ? (
        <>
          {/* edit and filterReview */}
          <div className="grid grid-cols-6 py-4 border-b border-solid border-[#cccccc] border-opacity-50 ">
            <div className="col-span-1 py-4 ">
              <h2 className="text-[#202124] Montserrat-m font-bold">You</h2>
              <p className="Montserrat-s font-normal text-[#202124] ">
                <span className="cursor-pointer pr-1">Edit</span>|
                <span
                  className="cursor-pointer pl-1"
                  onClick={() => dispatch(deleteAReview(userReview._id))}
                >
                  Delete
                </span>
              </p>
              {/* <p className="Montserrat-s font-normal text-[#202124] ">Edit | Delete</p> */}
            </div>
            <div className=" flex col-span-5 flex-col bg-[#f9f9f9] py-4 px-4">
              <h2 className="text-[#202124] Montserrat-m font-bold">
                {userReview.title}
              </h2>
              <RatingStar
                rating={userReview.rating}
                setRating={() => {}}
                setHover={() => {}}
              />
              {userReview.review && (
                <p className="Montserrat-m text-[#4d4d4d] font-normal pt-5">
                  {userReview.review}
                </p>
              )}
            </div>
          </div>
          {filteredReviews?.map((review) => (
            <div
              key={review._id}
              className="grid grid-cols-6 py-4  border-review border-opacity-50 "
            >
              <div className="col-span-1 py-4">
                <h2 className="text-[#202124] Montserrat-m font-bold">
                  {review.user.name}
                </h2>
                <p className="Montserrat-m font-normal text-[#808080]">{`${new Date(
                  review.createdAt
                ).getDate()} ${
                  month[new Date(review.createdAt).getMonth()]
                }`}</p>
              </div>
              <div className=" flex col-span-5 flex-col bg-[#f9f9f9] py-4 px-4">
                <h2 className="text-[#202124] Montserrat-b ">{review.title}</h2>
                <RatingStar
                  rating={review.rating}
                  setRating={() => {}}
                  setHover={() => {}}
                />
                {review.review && (
                  <p className="Montserrat-m text-[#4d4d4d] font-normal pt-5">
                    {review.review}
                  </p>
                )}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {/* form and reviews */}
          <form
            onSubmit={handleReview}
            className="grid grid-cols-6 py-4 border-b border-solid border-[#cccccc] border-opacity-50 "
          >
            <div className="col-span-1 py-4">
              <h2 className="text-[#202124] Montserrat-m font-bold">You</h2>
            </div>
            <div className=" flex col-span-5 flex-col bg-[#f9f9f9] py-4 px-8 space-y-2">
              <div className="w-full ">
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="TITLE"
                  className="w-full py-2 px-5 Montserrat-b text-[#b7b7b7] border-none focus:outline-none "
                />
              </div>
              <textarea
                onChange={(e) => setReview(e.target.value)}
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
          {reviews.map((review) => (
            <div
              key={review._id}
              className="grid grid-cols-6 py-4  border-review border-opacity-50 "
            >
              <div className="col-span-1 py-4">
                <h2 className="text-[#202124] Montserrat-m font-bold">
                  {review.user.name}
                </h2>
                <p className="Montserrat-m font-normal text-[#808080]">{`${new Date(
                  review.createdAt
                ).getDate()} ${
                  month[new Date(review.createdAt).getMonth()]
                }`}</p>
              </div>
              <div className=" flex col-span-5 flex-col bg-[#f9f9f9] py-4 px-4">
                <h2 className="text-[#202124] Montserrat-b ">{review.title}</h2>
                <RatingStar
                  rating={review.rating}
                  setRating={() => {}}
                  setHover={() => {}}
                />
                {review.review && (
                  <p className="Montserrat-m text-[#4d4d4d] font-normal pt-5">
                    {review.review}
                  </p>
                )}
              </div>
            </div>
          ))}
        </>
      )}

      {/* {reviews.length === 0 ? (
        <div className="Montserrat-m font-normal text-[#b7b7b7] text-center py-20">
          No reviews
        </div>
      ) : (
        <div className="px-24 ">
          {user ? (
            userReview ? (
              <div className="grid grid-cols-6 py-4 border-b border-solid border-[#cccccc] border-opacity-50 ">
                <div className="col-span-1 py-4 ">
                  <h2 className="text-[#202124] Montserrat-m font-bold">You</h2>
                  <p className="Montserrat-s font-normal ">Edit | Delete</p>
                </div>
                <div className=" flex col-span-5 flex-col bg-[#f9f9f9] py-4 px-4">
                  <h2 className="text-[#202124] Montserrat-m font-bold">
                    {userReview.title}
                  </h2>
                  <RatingStar
                    rating={userReview.rating}
                    setRating={() => {}}
                    setHover={() => {}}
                  />
                  {userReview.review && (
                    <p className="Montserrat-m text-[#4d4d4d] font-normal pt-5">
                      {userReview.review}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <>
                <form
                  onSubmit={handleReview}
                  className="grid grid-cols-6 py-4 border-b border-solid border-[#cccccc] border-opacity-50 "
                >
                  <div className="col-span-1 py-4">
                    <h2 className="text-[#202124] Montserrat-m font-bold">
                      You
                    </h2>
                  </div>
                  <div className=" flex col-span-5 flex-col bg-[#f9f9f9] py-4 px-8 space-y-2">
                    <div className="w-full ">
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="TITLE"
                        className="w-full py-2 px-5 Montserrat-b text-[#b7b7b7] border-none focus:outline-none "
                      />
                    </div>
                    <textarea
                      onChange={(e) => setReview(e.target.value)}
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
                {filteredReviews?.map((review) => (
                  <div
                    key={review._id}
                    className="grid grid-cols-6 py-4  border-review border-opacity-50 "
                  >
                    <div className="col-span-1 py-4">
                      <h2 className="text-[#202124] Montserrat-m font-bold">
                        {review.user.name}
                      </h2>
                      <p className="Montserrat-m font-normal text-[#808080]">{`${new Date(
                        review.createdAt
                      ).getDate()} ${
                        month[new Date(review.createdAt).getMonth()]
                      }`}</p>
                    </div>
                    <div className=" flex col-span-5 flex-col bg-[#f9f9f9] py-4 px-4">
                      <h2 className="text-[#202124] Montserrat-b ">
                        {review.title}
                      </h2>
                      <RatingStar
                        rating={review.rating}
                        setRating={() => {}}
                        setHover={() => {}}
                      />
                      {review.review && (
                        <p className="Montserrat-m text-[#4d4d4d] font-normal pt-5">
                          {review.review}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )
          ) : (
            reviews.map((review) => (
              <div
                key={review._id}
                className="grid grid-cols-6 py-4  border-review border-opacity-50 "
              >
                <div className="col-span-1 py-4">
                  <h2 className="text-[#202124] Montserrat-m font-bold">
                    {review.user.name}
                  </h2>
                  <p className="Montserrat-m font-normal text-[#808080]">{`${new Date(
                    review.createdAt
                  ).getDate()} ${
                    month[new Date(review.createdAt).getMonth()]
                  }`}</p>
                </div>
                <div className=" flex col-span-5 flex-col bg-[#f9f9f9] py-4 px-4">
                  <h2 className="text-[#202124] Montserrat-b ">
                    {review.title}
                  </h2>
                  <RatingStar
                    rating={review.rating}
                    setRating={() => {}}
                    setHover={() => {}}
                  />
                  {review.review && (
                    <p className="Montserrat-m text-[#4d4d4d] font-normal pt-5">
                      {review.review}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}

          <div className="flex justify-end pb-16">
            <Pagination page={1} setPage={200} />
            {/* {data?.length === 20 && (
              <Pagination page={page} setPage={setPage} />
            )} */}
      {/* </div>
        </div>
      )} */}
    </div>
  );
};

export default React.memo(Review);
