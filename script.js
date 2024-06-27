
function createCard(item, container) {
    const itemElement = document.createElement('div');
    itemElement.classList.add('col-md-4');
    itemElement.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Anime-kekkei-genkai</h5>
                <p class="card-text">${JSON.stringify(item)}</p>
            </div>
        </div>
    `;
    container.appendChild(itemElement);
}
function displayData(data) {
    const container = document.getElementById('data-display');
    container.innerHTML = ''; // Clear previous data

        createCard(data, container); 
    
}

function fetchDataFromApi(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('API response:', data);
            displayData(data)
        })
        .catch(error => {
            console.error('Failed to fetch data:', error);
        });
}
// API URL 
const apiUrl = 'https://dattebayo-api.onrender.com/kekkei-genkai';

// Fetch data from the API and display it
const fetchData = fetchDataFromApi(apiUrl);
