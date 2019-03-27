import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
    ListItem, Thumbnail, Text, Left, Body, Right, Button
} from "native-base";


export default class PostItem extends Component {
   
    
  
    render() {
        let Post = (
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                    uri: this.props.Img
                }}
              />
            </Left>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        );

        if (this.props.ThumbnailRight){
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