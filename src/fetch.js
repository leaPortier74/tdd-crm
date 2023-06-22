export default function getUsers() {
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
    const users = data.data;
    let id = 1
    
    users.forEach(user => {
        user.id = id
        id++
    });
    })
    .catch(error => console.error(error));
}