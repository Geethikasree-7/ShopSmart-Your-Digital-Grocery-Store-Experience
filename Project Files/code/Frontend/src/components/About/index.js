import _React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #F5F5F5;
  padding: 40px 0;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #1B1B1B;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const About = () => {
    return (
        <AboutContainer>
            <div className='container shadow p-4'>
                <Heading>About Us</Heading>
                <Paragraph>
                    Welcome to ShopSmart, your one-stop destination for hassle-free and smart grocery shopping!

At ShopSmart, we believe that buying groceries should be simple, fast, and enjoyable. Our mission is to bring the freshest products, best deals, and seamless delivery to your fingertips — whether you're stocking up on daily essentials or exploring new favorites.

We're committed to:

Quality: Sourcing only the best products from trusted vendors.

Convenience: Easy-to-use app experience and lightning-fast delivery.

Savings: Regular deals and discounts to help you shop smarter.

With ShopSmart, you're not just shopping — you're upgrading your lifestyle.


                </Paragraph>
                <Paragraph>🧺 Smart. Fresh. Delivered</Paragraph>
            </div>
        </AboutContainer>
    );
};

export default About;
