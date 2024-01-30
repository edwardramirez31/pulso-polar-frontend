import React, { useState } from 'react';
import { StarFilled, StarOutlined } from '@ant-design/icons';

interface Props {
  setRate: (number: number) => void
}

const StarRating = ({setRate}: Props) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onSaveRating = (index: number) => {
    setRating(index);
    setRate(index)
  };

  return (
    <div>
      <label
        htmlFor="rate"
        className="block text-sm font-medium text-gray-700"
      >
        Calificación
      </label>
      <div className="flex mt-1">
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <button
              key={index}
              className="p-1"
              style={{
                fontSize: '22px',
                color:
                  index <= (hoverRating || rating)
                    ? 'rgb(234, 179, 8 ,1)'
                    : 'white',
              }}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={onMouseLeave}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSaveRating(index);
              }}
            >
              {index <= (hoverRating || rating) ? (
                <StarFilled />
              ) : (
                <StarOutlined style={{ color: 'rgb(234, 179, 8 ,1)' }} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
