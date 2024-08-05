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
  margin: '100px auto',
};

interface SpinnerProps {
  loading: boolean; // Determines if the spinner should be displayed
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
