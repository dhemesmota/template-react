import React from 'react';
import { FiLoader } from 'react-icons/fi';

import PropTypes from 'prop-types';

import { Btn, Loading } from './styles';

export default function Button({
  title,
  color,
  outline,
  disabled,
  loading,
  children,
  style,
  ...rest
}) {
  return (
    <Btn
      color={color}
      outline={outline}
      disabled={disabled || loading}
      style={style}
      {...rest}
    >
      {loading ? (
        <Loading>
          <FiLoader size={20} />
        </Loading>
      ) : (
        <>{children ?? title}</>
      )}
    </Btn>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.string,
  ]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Button.defaultProps = {
  title: null,
  color: null,
  outline: false,
  disabled: false,
  loading: false,
  children: null,
  style: {},
};
