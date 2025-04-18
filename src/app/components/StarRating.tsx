import React from "react";

const Star = ({ filled, index }: any) => {
  if (filled === "full") {
    return (
      <svg
        key={index}
        className="w-4.5 h-4.5"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="#facc15"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 
        0l1.285 3.948a1 1 0 00.95.69h4.148c.969 
        0 1.371 1.24.588 1.81l-3.36 2.444a1 1 
        0 00-.364 1.118l1.285 3.947c.3.922-.755 
        1.688-1.54 1.118l-3.36-2.444a1 1 
        0 00-1.175 0l-3.36 2.444c-.785.57-1.84-.196-1.54-1.118l1.285-3.947a1 
        1 0 00-.364-1.118L2.077 
        9.375c-.783-.57-.38-1.81.588-1.81h4.148a1 
        1 0 00.95-.69l1.285-3.948z" />
      </svg>
    );
  }

  if (filled === "half") {
    const gradientId = `halfGrad-${index}`;
    return (
      <svg
        key={index}
        className="w-4.5 h-4.5"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId}>
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="50%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gradientId})`}
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 
          0l1.285 3.948a1 1 0 00.95.69h4.148c.969 
          0 1.371 1.24.588 1.81l-3.36 2.444a1 1 
          0 00-.364 1.118l1.285 3.947c.3.922-.755 
          1.688-1.54 1.118l-3.36-2.444a1 1 
          0 00-1.175 0l-3.36 2.444c-.785.57-1.84-.196-1.54-1.118l1.285-3.947a1 
          1 0 00-.364-1.118L2.077 
          9.375c-.783-.57-.38-1.81.588-1.81h4.148a1 
          1 0 00.95-.69l1.285-3.948z"
        />
      </svg>
    );
  }

  return (
    <svg
      key={index}
      className="w-4.5 h-4.5"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="#e5e7eb"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 
      0l1.285 3.948a1 1 0 00.95.69h4.148c.969 
      0 1.371 1.24.588 1.81l-3.36 2.444a1 1 
      0 00-.364 1.118l1.285 3.947c.3.922-.755 
      1.688-1.54 1.118l-3.36-2.444a1 1 
      0 00-1.175 0l-3.36 2.444c-.785.57-1.84-.196-1.54-1.118l1.285-3.947a1 
      1 0 00-.364-1.118L2.077 
      9.375c-.783-.57-.38-1.81.588-1.81h4.148a1 
      1 0 00.95-.69l1.285-3.948z" />
    </svg>
  );
};

const StarRating = ({ rating }: any) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push("full");
    } else if (rating >= i - 0.5) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }

  return (
    <div className="flex items-center space-x-1 bg-yellow-300">
      <p className="pr-2 pt-1">{rating} of 5</p>
      {stars.map((type, idx) => (
        <Star key={idx} filled={type} index={idx} />
      ))}
    </div>
  );
};

export default StarRating;
