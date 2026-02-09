import React from 'react';
import Card from './Card';
import { CardProvider } from '../context/Context';

const CardPage = () => {
  return (
    <CardProvider>
      <div className="card-page">
        <Card />
      </div>
    </CardProvider>
  );
};

export default CardPage;