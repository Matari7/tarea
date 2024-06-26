async function createItem() {
    const name = document.getElementById('createName').value;
    const price = document.getElementById('createPrice').value;
    
    const response = await fetch('/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price }),
    });
    const data = await response.json();
    alert(`Created item: ${JSON.stringify(data)}`);
  }
  
  async function getItem() {
    const name = document.getElementById('getName').value;
    
    const response = await fetch(`/items/${name}`);
    const data = await response.json();
    document.getElementById('getItemResult').innerText = JSON.stringify(data, null, 2);
  }
  
  async function updateItem() {
    const name = document.getElementById('updateName').value;
    const price = document.getElementById('updatePrice').value;
    
    const response = await fetch(`/items/${name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price }),
    });
    const data = await response.json();
    alert(`Updated item: ${JSON.stringify(data)}`);
  }
  
  async function deleteItem() {
    const name = document.getElementById('deleteName').value;
    
    const response = await fetch(`/items/${name}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    alert(data.message);
  }
  
  async function getAllItems() {
    const response = await fetch('/items');
    const data = await response.json();
    document.getElementById('allItemsResult').innerText = JSON.stringify(data, null, 2);
  }
  