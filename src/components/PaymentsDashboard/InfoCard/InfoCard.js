import React from "react";

const InfoCard = ({ title, desc, className }) => {
  return (
    <div className={className}>
      <div className="info-title mb-3">{title}</div>
      <div className="info-desc">{desc}</div>
    </div>
  );
};

export default InfoCard;
