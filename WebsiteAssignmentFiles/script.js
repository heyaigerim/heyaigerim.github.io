fetch('list_data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const itemList = document.getElementById('item-list');
        itemList.innerHTML = ''; // Clear loading message

        if (data.favorites && data.favorites.length > 0) {
            data.favorites.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';
                itemDiv.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
                itemList.appendChild(itemDiv);
            });
        } else {
            itemList.innerHTML = '<p>No favorite items found.</p>';
        }
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
        const itemList = document.getElementById('item-list');
        itemList.innerHTML = `<p>Failed to load favorite items: ${error.message}</p>`;
    });
