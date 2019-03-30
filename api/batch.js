require("dotenv").config();
const mongoose = require("./config/db");
const Post = require("./modules/posts/model")
const request = require("request")

const insert = (arr,i)=>{
    if(i >= arr.length){
        return true
    }
    let post = arr[i]
    post.imageUrl = post.imageUrl.replace("trees","rock-concert-"+i);
    Post.create(post)
    .then((res)=>{
        console.log(i,res)
        i++
        insert(arr,i)
    })
    .catch((err) => {
        console.log(err)
    })
}


request("https://stormy-shelf-93141.herokuapp.com/articles", function (error, response, body) {
    let resp = JSON.parse(body)
    insert(resp,0)
})
