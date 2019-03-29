import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
    ListItem, Thumbnail, Text, Left, Body, Right, Button
} from "native-base";



export default class Post extends Component {
    
    render(){
        return(<Text>{this.props.nome}</Text>)
    }
}