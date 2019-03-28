import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Right, Body, Icon, Text, List} from 'native-base';
import PostItem from './PostItem'
import axios from "axios";

const styles = StyleSheet.create({
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  header: {
    backgroundColor: "#EDEDED",
    color: "#333333"
  },
  footer: {
    backgroundColor: "#333333",
    
  },
  icon: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#f2994a",
    color: "#f2994a",
    fontSize: 30,
    lineHeight: 30,
    backgroundColor: "#FFFFFF",
    width: 30,
    height: 30
  },
  iconFooter: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#f2994a",
    color: "#f2994a",
    fontSize: 20,
    lineHeight: 35,
    backgroundColor: "#FFFFFF",
    width: 35,
    height: 35,
    textAlign:'center'
  },
  iconFooterInative: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#DDDDDD",
    color: "#DDDDDD",
    fontSize: 20,
    lineHeight: 35,
    backgroundColor: "#FFFFFF",
    width: 35,
    height: 35,
    textAlign:'center'
  }
});

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { serverposts: [] };
    }
    componentDidMount() {
        axios
          .get(
            "https://stormy-shelf-93141.herokuapp.com/articles?_page=1&_limit=10"
          )
          .then(response => {
              console.log(Response)
            this.setState({ serverposts: response.data });
          })
          .catch(function(error) {
            console.log(error);
          });
    }

    tabRow() {
        return this.state.serverposts.map(function (object, i) {
            return <PostItem obj={object} ind={i} />;
        });
    }
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.header}>Posts</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                style={styles.icon}
                type="MaterialCommunityIcons"
                name="plus"
              />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            {this.tabRow()}
          </List>
        </Content>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>
            <Button transparent>
              <Icon
                style={styles.iconFooter}
                type="FontAwesome"
                name="newspaper-o"
              />
            </Button>
          </FooterTab>
          <FooterTab style={styles.footer}>
            <Button transparent>
              <Icon
                style={styles.iconFooterInative}
                type="MaterialCommunityIcons"
                name="comment-text-multiple"
              />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}