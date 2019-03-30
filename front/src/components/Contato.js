import React, { Component } from "react";
import {
    Dimensions,
    View,
    ScrollView,
    Image,
    StyleSheet,
    Animated
} from "react-native";

import {
  Container,
  Header,
  Item,
  Content,
  Input,
  Textarea,
  Form,
  Body,
  Title,
  Right,
  Button,
  Icon,
  Text
} from "native-base";

import { Actions } from "react-native-router-flux";
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#EDEDED",
        color: "#333333"
    },
    icon: {
        
        color: "#f2994a",
        fontSize: 30,
        lineHeight: 30,
        width: 30,
        height: 30
    },
    item:{
        borderWidth: 4 ,
        borderColor: "#f2994a",
        marginBottom:10
    }

});
export default class Contato extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            mensage: '',
        }
    }
    
    render() {
        
        return (
          <Container>
            <Header style={styles.header}>
              <Body>
                <Title style={styles.header}>Contact</Title>
              </Body>
              <Right>
                <Button onPress={() => Actions.pop()} transparent>
                  <Icon
                    style={styles.icon}
                    type="AntDesign"
                    name="close"
                  />
                </Button>
              </Right>
            </Header>
            <Content>
              <Form style={{ padding: 15 }}>
                <Text>Name</Text>
                <Item style={styles.item} regular>
                            <Input onChangeText={(name) => { this.setState({ name }); }}
                                value={this.state.name} placeholder="Fill your Name" />
                </Item>
                <Text>E-mail</Text>
                <Item style={styles.item} regular>
                            <Input onChangeText={(email) => { this.setState({ email }); }}
                                value={this.state.email}placeholder="Fill your E-mail " />
                </Item>
                <Text>Phone</Text>
                <Item style={styles.item} regular>
                            <Input onChangeText={(phone) => { this.setState({ phone }); }}
                                value={this.state.phone} placeholder="Fill your Phone" />
                </Item>

                <Text>Mensage</Text>
                <Textarea
                  style={styles.item}
                  rowSpan={7}
                  bordered
                  placeholder="Hello ..."
                            onChangeText={(mensage) => { this.setState({ mensage }); }}
                            value={this.state.mensage}
                />
                

                <Button block warning iconLeft>
                    <Icon type="FontAwesome" name="paper-plane" />
                    <Text>Submit</Text>
                </Button>
                
              </Form>
            </Content>
          </Container>
        );
    }
}
