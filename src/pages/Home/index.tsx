import React from 'react';
import { Form } from '@unform/web';
import { FiClipboard, FiSearch } from 'react-icons/fi';
import comida_1 from '../../assets/comida_1.svg';
import comida_2 from '../../assets/comida_2.svg';
import comida_3 from '../../assets/comida_3.svg';
import comida_4 from '../../assets/comida_4.svg';
import {
  Container,
  Background,
  Pag1,
  AnimationContainer,
  Content,
  Pag2,
  Box,
} from './styles';
import Input from '../../components/Input';
import Menu from '../../components/Header';
import Button from '../../components/Button';

const Home: React.FC = () => {
  function handleSubmit() {
    console.log(handleSubmit);
  }
  return (
    <>
      <Container>
        <Pag1 id="pag-1">
          <Menu />
          <AnimationContainer>
            <Content>
              <h1>Ready for Trying a new recipe?</h1>
              <Form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Input
                  name="Search"
                  icon={FiClipboard}
                  placeholder="Search healthy recipes"
                  autoComplete="off"
                  type="text"
                />
                <Button
                  type="submit"
                  style={{ width: '60px' }}
                  icon={FiSearch}
                />
              </Form>
            </Content>
          </AnimationContainer>
        </Pag1>
        <Background />
      </Container>
      <Pag2>
        <h1 id="pag-2">Our Best Recipes</h1>
        <h2>Far far away, behind the word mountains, far from the countries</h2>
        <h2>Vokalia and Consonantia, there live the blind texts.</h2>
        <Box>
          <form>
            <img src={comida_1} alt="Comida_1" />
            <div>
              <strong>Broccoli Salad with Bacon</strong>
              <Button type="submit" style={{ width: '130px', height: '40px' }}>
                See Recipe
              </Button>
            </div>
          </form>
          <form>
            <img src={comida_2} alt="Comida_2" />
            <div>
              <strong>Classic Beef Burgers</strong>
              <Button type="submit" style={{ width: '130px', height: '40px' }}>
                See Recipe
              </Button>
            </div>
          </form>
        </Box>
        <Box>
          <form>
            <img src={comida_3} alt="Comida_1" />
            <div>
              <strong>Broccoli Salad with Bacon</strong>
              <Button type="submit" style={{ width: '130px', height: '40px' }}>
                See Recipe
              </Button>
            </div>
          </form>
          <form>
            <img src={comida_4} alt="Comida_2" />
            <div>
              <strong>Classic Beef Burgers</strong>
              <Button type="submit" style={{ width: '130px', height: '40px' }}>
                See Recipe
              </Button>
            </div>
          </form>
        </Box>
      </Pag2>
    </>
  );
};
export default Home;
