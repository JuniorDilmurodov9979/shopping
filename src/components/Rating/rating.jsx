import React from "react";
import { StarFilled } from "@ant-design/icons"; // Assuming you're using Ant Design icons

const RatingStar = ({ rating }) => {
  // Function to determine the color based on the rating
  const getStarColor = (rating) => {
    if (rating >= 4.5) {
      return "green"; // Excellent
    } else if (rating >= 3.5) {
      return "lightgreen"; // Good
    } else if (rating >= 2.5) {
      return "yellow"; // Average
    } else if (rating >= 1.5) {
      return "orange"; // Below Average
    } else {
      return "red"; // Poor
    }
  };

  return (
    <div className="flex items-center">
      <span className="text-lg font-medium">Rating: {rating}</span>
      <StarFilled className="ml-1" style={{ color: getStarColor(rating) }} />
    </div>
  );
};

export default RatingStar;
