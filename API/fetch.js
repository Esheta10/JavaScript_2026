async function fetchData(){

    let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    console.log(response.json());
}

fetchData();

