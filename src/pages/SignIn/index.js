import React, { useRef, useState } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';

import Button from '~/components/Button';
import Form from '~/components/Form';
import Input from '~/components/Form/Input';
import { InputGroup } from '~/components/Form/styles';
import Img from '~/components/Images/ImgDefault';
import Images from '~/config/Images';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function handleSubmit(data) {
    setLoading(true);
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Informe um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed

      console.log(data);
      const { email, password } = data;
      dispatch(signInRequest(email, password));
      setLoading(false);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
      setLoading(false);
    }
  }

  return (
    <>
      <Img source={Images.logo} title="Logo" width="100px" />

      <h1>Bem-vindo ao React</h1>
      <p>Informe suas credencias de acesso para continuar</p>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            icon={<FiMail size={20} />}
          />
        </InputGroup>
        <InputGroup>
          <Input
            name="password"
            type="password"
            placeholder="Sua senha"
            icon={<FiLock size={20} />}
          />
        </InputGroup>

        <Button type="submit" loading={loading} style={{ marginTop: '25px' }}>
          Entrar
        </Button>

        <div className="footer">
          <small>Não tem conta?</small>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </Form>
    </>
  );
}
