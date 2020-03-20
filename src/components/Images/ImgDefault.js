import React from 'react';

import PropTypes from 'prop-types';

import { ImgContainer } from './styles';

export default function ImgDefault({ source, ...rest }) {
  return <ImgContainer src={source} {...rest} />;
}

ImgDefault.propTypes = {
  source: PropTypes.string.isRequired,
};
