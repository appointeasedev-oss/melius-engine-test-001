import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/page2');
  };

  return (
    <div className="page1">
      <h1>Page 1</h1>
      <button onClick={handleClick}>Go to Page 2</button>
    </div>
  );
}

export default Page1;
# Auto improvement by Melius