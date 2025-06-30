import styled from 'styled-components';
import imagee from './imagee.jpg'

export const HomeContainer = styled.section`
  background-image: url(${imagee});
  background-size: cover;
  background-position: center;
  color: #000;
  height:100vh;
  margin-top:10vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  text-align: cenetr;
  padding: 50px 0;
`;


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentColumn = styled.div`
  flex: 1;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 3rem;
  font-weight:bold;
  margin-bottom: 15px;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

export const PrimaryButton = styled.button`
  padding: 20px 40px;
  font-size: 26px;
  font-family:'Bree Serif';
  border-radius:50px;
  font-weight:bold;
  background-color:rgb(239, 15, 172);
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color:rgb(239, 7, 92); /* Darker pink for hover */
  }
`;