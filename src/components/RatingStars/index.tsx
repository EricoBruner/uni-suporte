import styled from "styled-components";

const RatingStars = ({ rating }: any) => {
  const maxRating = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  const starElements = [];

  for (let i = 1; i <= fullStars; i++) {
    starElements.push(
      <SCYellowStar key={i} className="star full-star">
        &#9733;
      </SCYellowStar> // Estrela cheia (★)
    );
  }

  if (halfStar) {
    starElements.push(
      <SCGrayStar key="half" className="star half-star">
        &#9733;
      </SCGrayStar> // Meia estrela (★)
    );
  }

  const remainingStars = maxRating - starElements.length;

  for (let i = 1; i <= remainingStars; i++) {
    starElements.push(
      <SCGrayStar key={i + fullStars} className="star empty-star">
        &#9733;
      </SCGrayStar> // Estrela vazia (☆)
    );
  }

  return <div className="rating-stars">{starElements}</div>;
};

export default RatingStars;

const SCGrayStar = styled.span`
  color: #848484;
`;

const SCYellowStar = styled.span`
  color: #fcc419;
`;
