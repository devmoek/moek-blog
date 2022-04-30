import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Image from 'src/components/Image';

const Sunset = () => {
  return (
    <>
      <p>Sunset Image</p>
      <Image
        src="profile-pic.png"
        className="mx-auto shadow-xl"
        alt="Sunset Image"
        style={{
          border: '10px solid green',
        }}
      />
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Sunset;