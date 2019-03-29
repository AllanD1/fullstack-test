import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
    ListItem, Thumbnail, Text, Left, Body, Right, Button
} from "native-base";
import { Actions } from "react-native-router-flux";
import StarRating from "react-native-star-rating";
const styles = StyleSheet.create({
  itemRight: {
    backgroundColor:"#EEEEEE",
    width: '100%',
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 0
    
  },
  itemLeft: {
      width: '100%',
      marginLeft: 0,
      paddingLeft: 0,
      paddingRight: 0,
      marginRight: 0
  },
  body: {
    
    marginLeft: 0,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 0
  },
  thumb:{
    width:180,
    height:180
  },
  
});

export default class PostItem extends Component {
    render() {
        let Post = (
          <ListItem
            onPress={() => Actions.post(this.props.obj)}
            thumbnail
            style={styles.itemLeft}
          >
            <Thumbnail
              style={styles.thumb}
              square
              source={{
                uri: this.props.obj.imageUrl
              }}
            />
            <Body style={styles.body}>
              <Left>
                <Text>{this.props.obj.author}</Text>
                <Text numberOfLines={2}>{this.props.obj.title}</Text>
                <Text note numberOfLines={3}>
                  {this.props.obj.article}
                </Text>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={Math.floor(Math.random() * 5)}
                  starSize={16}
                  halfStarColor={"#f1a10d"}
                  fullStarColor={"#f1a10d"}
                  emptyStarColor={"#f1a10d"}
                />
              </Left>
            </Body>
          </ListItem>
        );

        if (this.props.ind % 2){
            Post = (
              <ListItem
                style={styles.itemRight}
                onPress={() => Actions.post(this.props.obj)}
                thumbnail
              >
                <Body style={styles.body}>
                  <Right>
                    <Text>{this.props.obj.author}</Text>
                    <Text numberOfLines={2}>
                      {this.props.obj.title}
                    </Text>
                    <Text note numberOfLines={3}>
                      {this.props.obj.article}
                    </Text>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={Math.floor(Math.random() * 5)}
                      starSize={16}
                      halfStarColor={"#f1a10d"}
                      fullStarColor={"#f1a10d"}
                      emptyStarColor={"#f1a10d"}
                    />
                  </Right>
                </Body>

                <Thumbnail
                  style={styles.thumb}
                  square
                  source={{
                    uri: this.props.obj.imageUrl
                  }}
                />
              </ListItem>
            );
        }
        return (
            Post
        );
    }
}