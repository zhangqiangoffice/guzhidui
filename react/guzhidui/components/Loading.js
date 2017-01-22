import React from 'react';

const Loading = ({showLoading}) => {
  if (!showLoading) {
    return null;
  }

  return (
    <div className="loading">
      <img src='/static/img/public/loading.gif' />
    </div>
  );
}

export default Loading