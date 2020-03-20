import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({ name, label, icon, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,

      ref: inputRef.current,

      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label ? (
        <>
          <label htmlFor={name}>{label}</label>
          <Container
            label
            className={error ? 'has-error' : ''}
            error={error || false}
          >
            {icon}
            <input
              id={name}
              ref={inputRef}
              defaultValue={defaultValue}
              {...rest}
            />
          </Container>
        </>
      ) : (
        <label htmlFor={name}>
          <Container
            className={error ? 'has-error' : ''}
            error={error || false}
          >
            {icon}
            <input
              id={name}
              ref={inputRef}
              defaultValue={defaultValue}
              {...rest}
            />
          </Container>
        </label>
      )}
      {error && <span className="error">{error}</span>}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.element,
};

Input.defaultProps = {
  label: null,
  icon: null,
};
