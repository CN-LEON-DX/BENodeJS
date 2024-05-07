const fetchApi = async (linkApi) => {
    const response = await fetch(linkApi);
    const data = await response.json();
    return data;
}
fetchApi("http://localhost:3000/products").then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})