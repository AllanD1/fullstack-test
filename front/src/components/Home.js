import React, { Component } from 'react';
import {
  Dimensions,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Right, Body, Icon, Text, List,ListItem}  from 'native-base';
import PostItem from './PostItem'
import axios from "axios";

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
const { width, height } = Dimensions.get("window");
export default class Home extends Component {
  
  state = {
    data: [],
    page: 1,
    loading: true,
    loadingMore: false,
    filtering: false,
    refreshing: false,
    error: null
  };
  
  componentDidMount() {
    this._fetchAllBeers();
  }
  
  _fetchAllBeers = () => {
    const { page } = this.state;
    const URL = `https://stormy-shelf-93141.herokuapp.com/articles?_page=${page}&_limit=10`;
    
    axios.get(URL)
    .then(response => {
      this.setState((prevState, nextProps) => ({
        data:
        page === 1
        ? Array.from(response.data)
        : [...this.state.data, ...response.data],
        loading: false,
        loadingMore: false,
        refreshing: false
      }));
    })
    .catch(error => {
      this.setState({ error, loading: false });
    });
  };
  
  _handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      },
      () => {
        this._fetchAllBeers();
      }
      );
    };
    
    _handleLoadMore = () => {
      this.setState(
        (prevState, nextProps) => ({
          page: prevState.page + 1,
          loadingMore: true
        }),
        () => {
          this._fetchAllBeers();
        }
        );
      };
      
      _renderFooter = () => {
        if (!this.state.loadingMore) return null;
        
        return (
          <View
          style={{
            position: 'relative',
            width: width,
            height: height,
            paddingVertical: 20,
            borderTopWidth: 1,
            marginTop: 10,
            marginBottom: 10,
            borderColor: "#eeee33"
          }}
          >
          <ActivityIndicator animating size="large" />
          </View>
          );
        };
        
      _tabRow = ()=>{
          return !this.state.loading ? (
            <FlatList
             
              data={this.state.data}
              renderItem={({ item, index }) => (
                <PostItem obj={item} ind={index} />
              )}
              keyExtractor={item => item.id.toString()}
           
              ListFooterComponent={this._renderFooter}
              onRefresh={this._handleRefresh}
              refreshing={this.state.refreshing}
              onEndReached={this._handleLoadMore}
              onEndReachedThreshold={0.5}
              initialNumToRender={10}
            />
          ) : (
            <View>
              <Text style={{ alignSelf: "center" }}>Get Posts</Text>
              <ActivityIndicator />
            </View>
          );
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
                     
                      {this._tabRow()}
                  
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
            
            
