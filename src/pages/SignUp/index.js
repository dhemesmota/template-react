import React, { useRef } from 'react';
import { FiUser, FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';

import Button from '~/components/Button';
import Form from '~/components/Form';
import Input from '~/components/Form/Input';
import { InputGroup } from '~/components/Form/styles';
import Img from '~/components/Images/ImgDefault';
import Images from '~/config/Images';

export default function SignUp() {
  const formRef = useRef(null);
  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Informe um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
        password_confirmed: Yup.string().when('password', (password, field) =>
          password
            ? field
                .required('Confirmação de senha é óbrigatória')
                .oneOf(
                  [Yup.ref('password')],
                  'A confirmação de senha deve ser igual a senha'
                )
            : field
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed

      console.log(data);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
      <Img source={Images.logo} title="Logo" width="100px" />

      <h1>Bem-vindo ao React</h1>
      <p>Cadastre-se</p>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            name="name"
            type="text"
            placeholder="Seu nome completo"
            icon={<FiUser size={20} />}
          />
        </InputGroup>
        <InputGroup>
          <Input
            name="email"
            type="text"
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
        <InputGroup>
          <Input
            name="password_confirmed"
            type="password_confirmed"
            placeholder="Confirme sua senha"
            icon={<FiLock size={20} />}
          />
        </InputGroup>

        <Button type="submit" style={{ marginTop: '25px' }}>
          Entrar
        </Button>

        <div className="footer">
          <small>Já tem conta?</small>
          <Link to="/">Entrar</Link>
        </div>
      </Form>
    </>
  );
}
