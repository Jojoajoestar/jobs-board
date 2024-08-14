/**
 * Card Component
 *
 * This component renders a card with a specified background color and content.
 *
 * Props:
 * - children: ReactNode - The content to be displayed inside the card.
 * - bg: string (optional) - The background color of the card. Default is 'bg-gray-100'.
 *
 * Example:
 * <Card bg="bg-blue-300">
 *   <h2>Card Title</h2>
 *   <p>Card content goes here...</p>
 * </Card>
 */

import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode; // The content to be displayed inside the card
  bg?: string; // Optional background color of the card
}

const Card: React.FC<CardProps> = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 ${bg}`}>
      {children}
    </div>
  );
};

export default Card;
