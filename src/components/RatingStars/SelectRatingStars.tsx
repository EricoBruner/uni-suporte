import { useState } from "react";
import styled from "styled-components";

const SelectRatingStars = ({ maxRating }: any) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleStarClick = (starValue: any) => {
    setSelectedRating(starValue);
  };

  const starElements = [];

  for (let i = 1; i <= maxRating; i++) {
    const isChecked = i <= selectedRating;
    starElements.push(
      <SCStarLabel
        key={i}
        className={`star-label ${isChecked ? "yellow" : ""}`}
      >
        <SCInput
          type="checkbox"
          checked={isChecked}
          onChange={() => handleStarClick(i)}
        />
        <SCStar>&#9733;</SCStar>
      </SCStarLabel>
    );
  }

  return <SCStarContainer>{starElements}</SCStarContainer>;
};

export default SelectRatingStars;

const SCStarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

const SCStar = styled.span`
  font-size: 20px;
  color: #848484;
`;

const SCInput = styled.input`
  display: none;
`;

const SCStarLabel = styled.label`
  cursor: pointer;

  &.yellow {
    ${SCStar} {
      color: #fcc419;
    }
  }
`;
