
const username = localStorage.getItem("username");
fetchDataAndDisplayUserDetails(username);


function fetchDataAndDisplayUserDetails(username) {
    fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {

            var welcomeMessage = document.getElementById("welcome-message");
            welcomeMessage.textContent = "Welcome "+data[0].name;

            var tableBody = document.getElementById("table-body");

            var row = tableBody.insertRow();
            row.insertCell(0).textContent = data[0].id;
            row.insertCell(1).textContent = data[0].name;
            row.insertCell(2).textContent = data[0].username;
            row.insertCell(3).textContent = data[0].email;
            row.insertCell(4).textContent = data[0].address.street + ", " + data[0].address.city + ", " + data[0].address.zipcode;
        })
        .catch((error) => {
            console.error("Error fetching JSON data:", error);
        });
}
