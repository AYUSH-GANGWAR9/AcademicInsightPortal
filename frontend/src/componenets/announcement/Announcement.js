import React from 'react';

const Announcement = ({ title, content }) => {
  return (
    <div className="announcement">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Announcement;
