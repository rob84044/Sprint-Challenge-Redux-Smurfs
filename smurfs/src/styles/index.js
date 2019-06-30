import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

html{
    font-size: 62.5%
}
body {
	box-sizing: border-box;
    margin: 0;
  padding: 0;
  background: #7be6f7;
  background-image: url('https://cdn.wallpapersafari.com/5/0/tDo9ea.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  @import url('https://fonts.googleapis.com/css?family=Oswald:200,400|Pacifico');
  @media (max-width: 375px) {
    background-repeat: repeat;
    background-size: 50%;
    background-position: right;
  }
}
`;
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

export const H1 = styled.h1`
  font-size: 6rem;
  color: black;
  font-family: 'Pacifico', cursive;
  font-weight: bolder;
  margin-bottom: 1%;
  text-align: center;
  text-shadow: 1px 1px #f9fbff;
  @media (max-width: 375px) {
    font-size: 3rem;
  }
`;

export const Main = styled.main`
  border-radius: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  width: 600px;
  padding: 2.5% 2.5% 9%;
  border: 5px solid #f9fbff;
  background: #f9fbff;
  @media (max-width: 375px) {
    width: 200px;
    border-radius: 40%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: space-between;
  width: 90%;
  padding: 0;
  position: relative;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  background: #7be6f7;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #373f51;
  border-radius: 50%;
  padding: 2.5% 0;
  width: 400px;
  height: 200px;
  margin: 0 0 2.5%;
  font-family: 'Oswald', sans-serif;
`;

export const Input = styled.input`
  width: 50%;
  border: 1px solid black;
  text-align: center;
  margin: 0.5%;
  border-radius: 5px;
  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: ${props => (props.mode === 'form' ? '75px' : '30%')};
  background: #f9fbff;
  padding: 2.5%;
  margin-top: 2.5%;
  border: 2px solid #373f51;
  border-radius: 50%;
  color: #373f51;
  font-family: 'Oswald', sans-serif;
  text-align: center;
  :hover {
    color: #f9fbff;
    background: #373f51;
    cursor: pointer;
    border: 2px solid #f9fbff;
  }
  :focus {
    outline: none;
  }
`;
export const Div = styled.div`
  border: ${props => (props.column ? '2px solid #373F51;' : 'none')};
  display: flex;
  flex-flow: ${props => (props.column ? 'column nowrap' : 'row nowrap')};
  justify-content: space-around;
  align-items: center;
  background: #7be6f7;
  padding: 5%;
  margin: 1% 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  @media (max-width: 375px) {
    width: 65px;
    border-radius: 40%;
    padding: 10%;
    margin: 5% 0;
  }
`;
export const H2 = styled.h2`
  font-size: 1.8rem;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  padding: 3%;
  width: 100%;
  text-align: center;
  color: #373f51;
`;

export const H3 = styled.h3`
  display: ${props => (props.mode === 'Add' ? 'none' : null)};
  color: #373f51;
  margin: 1% 0;
  font-size: 1.4rem;
  font-family: 'Oswald', sans-serif;
  :hover {
    cursor: ${props => (props.form === 'form' ? 'pointer' : null)};
  }
`;
