/**
 * Spinner Component
 *
 * This component renders a loading spinner using the ClipLoader from 'react-spinners'.
 *
 * Props:
 * - loading: boolean - Determines if the spinner should be displayed.
 *
 * Example:
 * <Spinner loading={true} />
 */

import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

interface SpinnerProps {
  loading: boolean; // Determines if the spinner should be displayed
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <div className="sweet-loading">
    <ClipLoader
      color='#4338ca'
      loading={true} 
      cssOverride={override}
      size={150}
    />
    </div>
  );
};

export default Spinner;
