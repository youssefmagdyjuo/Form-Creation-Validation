async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = ''
        const userList = document.createElement('ul');
        users.forEach(user => {
            const useItem = document.createElement('li');
            useItem.textContent = `${user.name}`;
            userList.appendChild(useItem);
        })
        dataContainer.appendChild(userList);
    } catch (error) {
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run fetchUserData after DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);