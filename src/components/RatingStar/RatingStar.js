import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

const RatingStar = ({ rating, setRating, hover, setHover }) => {
  //   const [rating, setRating] = useState(null);
  //   const [hover, setHover] = useState(null);
  //   console.log(rating);
  return (
    <div className="flex flex-row">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={Math.random() * 30}>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <div
              style={{
                color: `${
                  ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }`,
              }}
            >
              <StarRateIcon
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                fontSize="small"
              />
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default RatingStar;
