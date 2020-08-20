import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default (props) => {
    return (
        <Container>
            <Header />
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Body>
                            <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />
                            <Text>{props.description}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-github" />
                                <Text>1,926 stars</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}
