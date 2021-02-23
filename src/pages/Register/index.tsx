import React, { useCallback, useRef , useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiCalendar, FiUser, FiMapPin } from 'react-icons/fi';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, Background, AnimationContainer } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';

interface SignUpFormData {
  nome: string;
  date: string;
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}
interface Repository {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}
const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [logradouro, setLogradouro] = useState<string>('');
  const [bairro, setBairro] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [estado, setEstado] = useState<string>('');
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          nome: Yup.string()
            .required('Nome obrigatório')
            .max(50, 'No maximo 50 caracteres')
            .min(10, 'No minimo 10 caracteres'),
          date: Yup.string()
            .required('Data obrigatória')
            .min(7, 'No minimo 10 caracteres'),
          cep: Yup.string()
            .required('Endereço obrigatorio')
            .max(8, 'No maximo 8 caracteres')
            .min(8, 'No minimo 8 caracteres'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        const valor: string = data.cep;
        const response = await api.get<Repository>(`ws/${valor}/json/`);
        const repository= response.data;
        setLogradouro(repository.logradouro);
        setBairro(repository.bairro);
        setCidade(repository.localidade);
        setEstado(repository.uf);

        localStorage.setItem('nome', data.nome);
        localStorage.setItem('data', data.date)
        localStorage.setItem('cep', data.cep);
        localStorage.setItem('bairro', repository.bairro);
        localStorage.setItem('cidade', repository.localidade);
        localStorage.setItem('estado', repository.uf);


      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    }, [],
  );

  return (
    <>
      <Container>
        <Background />
        <Content>
          <AnimationContainer>
            <Form ref={formRef} onSubmit={handleSubmit} >
              <h1>Cadastre-se</h1>
              <Input name="nome" icon={FiUser} placeholder="Nome" />
              <Input
                name="date"
                type="date"
                icon={FiCalendar}
                placeholder="Data de  nascimento"
              />
              <Input
                name="cep"
                type="number"
                icon={FiMapPin}
                placeholder="CEP"
              />
              <Input
                name="logradouro"
                icon={FiMapPin}
                placeholder="Logradouro"
                value={logradouro}
                disabled
              />
              <Input
                name="bairro"
                icon={FiMapPin}
                placeholder="Bairro"
                value={bairro}
                disabled
              />
              <Input
                name="cidade"
                icon={FiMapPin}
                placeholder="Cidade"
                value={cidade}
                disabled
              />
              <Input
                name="estado"
                icon={FiMapPin}
                placeholder="Estado"
                value={estado}
                disabled
              />
              <Button type="submit" style={{ marginTop: '20px' }}>
                Cadastrar
              </Button>
            </Form>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
          </AnimationContainer>
        </Content>
      </Container>
    </>
  );
};
export default Register;
