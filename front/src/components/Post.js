import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Body, Icon, Text, List, ListItem, Right } from 'native-base';
import { Actions } from "react-native-router-flux";
import SlidePost from './SlidePost'
import StarRating from "react-native-star-rating";
import HTML from "react-native-render-html";
const styles = StyleSheet.create({

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
        textAlign: 'center'
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
        textAlign: 'center'
    },
    h1: {
        color: "#f1a10d",
        fontWeight: "700",
        fontSize: 24
    },
    h3: {
        fontSize: 12,
        marginTop:15,
        marginBottom:15
    },
    h3b: {
        fontSize: 12,
        fontWeight: "700"
    }
    

});

export default class Post extends Component {
     
    render(){
    
        return (
          <Container>
            <Header style={styles.header}>
              <Left>
                <Button onPress={() => Actions.pop()} transparent>
                  <Icon
                    style={styles.header}
                    type="FontAwesome5"
                    name="chevron-left"
                  />
                </Button>
              </Left>
              <Body>
                <Title style={styles.header}>Post</Title>
              </Body>
              <Right />
            </Header>

            <Content>
              <SlidePost />
              <View style={{ padding: 15 }}>
                <Text style={styles.h1}>{this.props.title}</Text>
                <Text style={styles.h3}>
                  Posted By:
                  <Text style={styles.h3b}>{this.props.author}</Text>
                </Text>
                <View style={{ width: 140 }}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={Math.floor(Math.random() * 5)}
                    starSize={16}
                    halfStarColor={"#f1a10d"}
                    fullStarColor={"#f1a10d"}
                    emptyStarColor={"#f1a10d"}
                  />
                </View>
                <HTML html={this.props.article} />
              </View>
            </Content>

            <Footer style={styles.footer}>
              <FooterTab style={styles.footer}>
                <Button onPress={() => Actions.home()} transparent>
                  <Icon
                    style={styles.iconFooter}
                    type="FontAwesome"
                    name="newspaper-o"
                  />
                </Button>
              </FooterTab>
              <FooterTab style={styles.footer}>
                <Button onPress={() => Actions.contato()} transparent>
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
