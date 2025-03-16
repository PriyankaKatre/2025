import './styles.css'
import aboutImage from './assets/aboutImage.jpg'
import logo from './assets/react.svg'

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <img src={aboutImage} width="400" height="200" />
      <img src={logo} width="400" height="200" />
    </>
  );
};
