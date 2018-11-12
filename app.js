const http = new easyHTTP;

// Get Posts
//  http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
//      if(err) {
//          console.log(err);
//      } else {
//          console.log(posts);
//      }
// });

// Get single post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Post Request //
// Create data
const data = {
    title: "Custom Post",
    body: "This is a custom post"
};

// Create post
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, post) {
//     if(err) {
//          console.log(err);
//      } else {
//          console.log(post);
//      }
// });

// Update POST
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(err, post) {
//     if(err) {
//          console.log(err);
//      } else {
//          console.log(post);
//      }
// });

// DELETE POST
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, response) {
     if(err) {
         console.log(err);
     } else {
         console.log(response);
     }
});







