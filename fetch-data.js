async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById('api-data');

    // Handle the fetching process and potential errors
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();  // Convert the response to JSON
        console.log(users);

        // Clear container's initial content
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the list of users
        const userList = document.createElement("ul");

        // Loop through the users array
        users.forEach(user => {
            let userListItem = document.createElement("li");

            // Set the text content of the <li> to the user's name
            userListItem.textContent = user.name;
            userList.appendChild(userListItem);
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
