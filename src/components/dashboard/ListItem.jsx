import React from 'react';


const ListItem = ({ icon, title, subtitle }) => {
  return (
    <div className="list-item">
      {icon && <div className="list-item-icon">{icon}</div>}
      <div className="list-item-text">
        <p className="list-item-title">{title}</p>
        <p className="list-item-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default ListItem;
