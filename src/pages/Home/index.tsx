import React from 'react';
import { Form } from '@unform/web';
import { FiClipboard, FiSearch, FiMail } from 'react-icons/fi';
import comida_1 from '../../assets/comida_1.svg';
import comida_2 from '../../assets/comida_2.svg';
import comida_3 from '../../assets/comida_3.svg';
import comida_4 from '../../assets/comida_4.svg';
import bloco_1 from '../../assets/bloco_image_2.svg';
import bloco_2 from '../../assets/blog_image_1.svg';
import bloco_3 from '../../assets/bloco_image_3.svg';
import bloco_4 from '../../assets/bloco_image_4.svg';
import {
  Container,
  Background,
  Pag1,
  AnimationContainer,
  Content,
  Pag2,
  Box,
  Pag3,
  Pag4,
  Box2,
  Footer,
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
        <Pag1>
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
                  style={{ width: '55px', height: '50px' }}
                  icon={FiSearch}
                />
              </Form>
            </Content>
          </AnimationContainer>
        </Pag1>
        <Background />
      </Container>
      <Pag2 id="pag-1">
        <h1>Our Best Recipes</h1>
        <h2>Far far away, behind the word mountains, far from the countries</h2>
        <h2>Vokalia and Consonantia, there live the blind texts.</h2>
        <Box>
          <form>
            <img src={comida_1} alt="Comida_1" />
            <div>
              <strong>Broccoli Salad with Bacon</strong>
              <Button type="submit">See Recipe</Button>
            </div>
          </form>
          <form>
            <img src={comida_2} alt="Comida_2" />
            <div>
              <strong>Classic Beef Burgers</strong>
              <Button type="submit">See Recipe</Button>
            </div>
          </form>
        </Box>
        <Box>
          <form>
            <img src={comida_3} alt="Comida_1" />
            <div>
              <strong>Broccoli Salad with Bacon</strong>
              <Button type="submit">See Recipe</Button>
            </div>
          </form>
          <form>
            <img src={comida_4} alt="Comida_2" />
            <div>
              <strong>Classic Beef Burgers</strong>
              <Button type="submit">See Recipe</Button>
            </div>
          </form>
        </Box>
      </Pag2>
      <Pag3>
        <form>
          <div>
            <h1>The best services ready To serve you</h1>
            <h2>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.{' '}
            </h2>
            <h2>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </h2>
            <h2>
              A small river named Duden flows by their place and supplies it the
              necessary regelialia.
            </h2>
            <Button style={{ marginTop: '30px' }} type="submit">
              Know More
            </Button>
          </div>
        </form>
      </Pag3>
      <Pag4 id="pag-2">
        <h1>Read Our Blog</h1>
        <h2>Far far away, behind the word mountains, far from the countries</h2>
        <h2>Vokalia and Consonantia, there live the blind texts.</h2>
        <Box2>
          <form className="first">
            <img src={bloco_2} alt="sobremesa" />
            <div>
              <strong>Nutrition: Tips for Improving Your Health</strong>
              <nav>
                <img
                  src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80"
                  alt="Nome"
                />
                <h3>Kevin Ibrahim</h3>
              </nav>
            </div>
          </form>
          <form>
            <img src={bloco_1} alt="sobremesa" />
            <div>
              <strong>Nutrition: Tips for Improving Your Health</strong>
              <nav>
                <img
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Nome"
                />
                <h3>Mike Jackson</h3>
              </nav>
            </div>
          </form>
          <form>
            <img src={bloco_3} alt="sobremesa" />
            <div>
              <strong>Nutrition: Tips for</strong>
              <strong>Improving Your Health</strong>
              <nav>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="Nome"
                />
                <h3>Bryan McGregor</h3>
              </nav>
            </div>
          </form>
          <form>
            <img src={bloco_4} alt="sobremesa" />
            <div>
              <strong>Nutrition: Tips for Improving Your Health</strong>
              <nav>
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="Nome"
                />
                <h3>Humberto Junior</h3>
              </nav>
            </div>
          </form>
        </Box2>
      </Pag4>
      <Container>
        <Pag1 id="pag-3">
          <Menu />
          <AnimationContainer>
            <Content>
              <h1 className="pag5">Join our membership to get special offer</h1>
              <Form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Input
                  name="Search"
                  icon={FiMail}
                  placeholder="Enter your email address"
                  autoComplete="off"
                  type="text"
                />
                <Button
                  type="submit"
                  style={{ width: '100px', height: '50px' }}
                >
                  Join
                </Button>
              </Form>
            </Content>
          </AnimationContainer>
        </Pag1>
        <Background className="pag5" />
      </Container>
      <Footer>
        <h3>© Copyrights 2019 Stack. All Rights Reserved.</h3>
        <div>
          <a href="/privat">Privacy Policy</a>
          <a href="/Conditions">Terms and Conditions</a>
        </div>
      </Footer>
    </>
  );
};
export default Home;
