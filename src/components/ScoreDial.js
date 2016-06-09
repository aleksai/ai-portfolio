import React from 'react';

const ScoreDial = ({value, color}) => {
  const dialCass = `score-dial-outer ${color}`;
  return (
    <div className={dialCass}>
      <div className="score-dial-inner">{value}</div>
    </div>
  );
};

export default ScoreDial;