/* eslint-disable no-unused-vars */
import { useState, CSSProperties } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};
const Loader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');

  return (
    <div style={{ marginTop: '150px' }}>
      <div className="sweet-loading text-center">
        <BeatLoader
          color="#0d6efd"
          loading={loading}
          cssOverride=""
          size={20}
        />
      </div>
    </div>
  );
};

export default Loader;
