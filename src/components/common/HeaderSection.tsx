import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const HeaderSection = (props: any) => {
  return (
    <Container>
    <Header>
      <Left>
        <Button transparent>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>{props.headerText}</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Right>
    </Header>
  </Container>
  )
};



export default HeaderSection;
