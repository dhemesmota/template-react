import { Form } from '@unform/web';
import styled from 'styled-components';

const FormReact = styled(Form)`
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    font-weight: 500;
    color: #28272c;
  }

  .group svg {
    position: absolute;
    top: 12px;
    left: 15px;
    color: #28272c;
  }

  span {
    margin-top: 4px;
    color: #ee4d64;
  }
`;

export default FormReact;
