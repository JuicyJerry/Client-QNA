import styled from "@emotion/styled";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 999;
  max-width: 1140px;
  height: 56px;
  margin: 0 auto;
  transition: transform .3sease-out, background-color .3sease-out;

  a {
    text-decoration: none;
    /* color: #fff; */
    font-size: 15px;
  }
  a.active {
    text-decoration: underline;
    font-weight: bold;
  }

  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: rgba(0, 0, 0, 0.65);
    font-weight: 600;
  }

  .links-logo {
    overflow: hidden;
    max-height: 56px;
  }
  .logo {
    height: 56px;
    max-height: 56px;
    transform: scale(1.8);
  }

  section {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .nav {
    display: flex;
    margin-left: auto;
  }
  .navbar-divider {
    display: inline-block;
    height: 16px;
    width: 1px;
    margin: 0 1rem;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.65);
}
  }
`;

export default {
  NavigationContainer,
};
