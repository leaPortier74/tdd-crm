export default function getUsers() {
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
    const users = data.data;
    const tableBody = document.querySelector('#usersTable tbody');
    
    users.forEach(user => {
        const row = document.createElement('tr');
        
        const firstnameCell = document.createElement('td');
        firstnameCell.textContent = user.first_name;
        firstnameCell.classList.add('firstname');
        row.appendChild(firstnameCell);
        
        const lastnameCell = document.createElement('td');
        lastnameCell.textContent = user.last_name;
        lastnameCell.classList.add('lastname');
        row.appendChild(lastnameCell);
        
        const detailsCell = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = 'See details';
        button.classList.add('details');
        detailsCell.appendChild(button);
        row.appendChild(detailsCell);
        
        tableBody.appendChild(row);
    });
    })
    .catch(error => console.error(error));
}