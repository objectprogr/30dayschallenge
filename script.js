// get data and change to json object and display in console
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json));

  //get data parse to json and display specific informations
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then( response => response.json())
    .then(response =>{
        response.forEach(post => {
            console.log(`${post.id}`);
            console.log(`${post.title}`);
            console.log(`${post.body}`);
        });
    });



