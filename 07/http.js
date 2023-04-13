fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    const { title } = json;
    document.querySelector("#title").innerHTML = title;
  });
