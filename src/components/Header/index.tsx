import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Container, Header, StyledMenu } from './styles';
import { useOnClickOutside } from '../../hooks/Menu';
import Hamburger from '../Hamburguer';

const Menu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));
  return (
    <Container>
      <Header ref={node}>
        <p>HEALTHY RECIPES</p>
        <HashLink to="#pag-1" type="submit">
          HEALTHY RECIPES
        </HashLink>
        <HashLink to="#pag-2" type="submit">
          BLOG
        </HashLink>
        <Link to="/join" type="submit">
          JOIN
        </Link>
        <Link to="/register" type="submit">
          REGISTER
        </Link>
        <StyledMenu open={open}>
          <HashLink to="#pag-1" onClick={() => close()}>
            HEALTHY RECIPES
          </HashLink>
          <HashLink to="#pag-2" onClick={() => close()}>
            BLOG
          </HashLink>
          <Link to="/contacts" onClick={() => close()}>
            JOIN
          </Link>
          <Link to="/signUp" onClick={() => close()}>
            REGISTER
          </Link>
        </StyledMenu>
        <Hamburger open={open} setOpen={setOpen} />
      </Header>
    </Container>
  );
};
export default Menu;
