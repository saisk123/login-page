
function fetchDataAndDisplayTable() {
    fetch("data.json") 
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Get a reference to the table body
            var tableBody = document.getElementById("table-body");

            // Iterate through the JSON data and create table rows
            data.forEach((item) => {
                var row = tableBody.insertRow();
                row.insertCell(0).textContent = item.id;
                row.insertCell(1).textContent = item.name;;
                row.insertCell(2).textContent = item.username;;
                row.insertCell(3).textContent = item.email;
                row.insertCell(4).textContent = item.address.street + ", " + item.address.city + ", " +item.address.zipcode;
            });
        })
        .catch((error) => {
            console.error("Error fetching JSON data:", error);
        });
}

fetchDataAndDisplayTable();
