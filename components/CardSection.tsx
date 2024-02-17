import React from "react";

interface CardSectionProps {
  src: string;
  style?: string;
}

const CardSection = ({ src, style }: CardSectionProps) => {
  return (
    <div className="conatiner mx-auto px-4 py-3">
      <div className="hidden md:block">
        <img src={src} alt="gift" />
      </div>
      <div className={`md:hidden ${style}`}>
        <img src="/assets/images/1.png" alt="return" className="w-full mb-5" />
        <img src="/assets/images/2.png" alt="return" className="w-full" />
      </div>
    </div>
  );
};

export default CardSection;
