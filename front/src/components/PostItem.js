import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
    ListItem, Thumbnail, Text, Left, Body, Right, Button
} from "native-base";
import { Actions } from "react-native-router-flux";

export default class PostItem extends Component {
    render() {
        let Post = (
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri: this.props.obj.imageUrl
                }}
              />
            </Left>
            <Body>
              <Text>{this.props.obj.title}</Text>
              <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text>
            </Body>
            <Right>
              <Button
                onPress={() => Actions.post({ nome: "Allan" })}
                transparent
              >
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        );

        if (this.props.ind % 2){
            Post = (
              <ListItem thumbnail>
                    <Left>
                      <Button transparent>
                        <Text>View</Text>
                      </Button>
                    </Left>
                <Body>
                  <Text>Sankhadeep</Text>
                  <Text note numberOfLines={1}>
                    Its time to build a difference . .
                  </Text>
                </Body>
                <Right>
                  <Thumbnail
                    square
                    source={{
                         uri: this.props.Img
                    }}
                  />
                </Right>
              </ListItem>
            );
        }
        return (
            Post
        );
    }
}