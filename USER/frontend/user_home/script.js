// Data extracted from your HTML table
const data = {
    name: 'SUGUMAARAN PARAKULLIL',
    shopName: 'KUDATHIL',
    shopID: '1123SFDGF',
    dateJoined: '10-11-2023'
  };
  
  // Function to create DOM elements and append them to a parent element
  function createTable(data) {
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('table1');
  
    const table = document.createElement('table');
  
    for (const key in data) {
      const tr = document.createElement('tr');
  
      const td1 = document.createElement('td');
      const p1 = document.createElement('p');
      p1.classList.add(getClassForField(key));
      p1.textContent = `${getFieldLabel(key)} :`;
      td1.appendChild(p1);
      tr.appendChild(td1);
  
      const td2 = document.createElement('td');
      const p2 = document.createElement('p');
      p2.textContent = data[key];
      td2.appendChild(p2);
      tr.appendChild(td2);
  
      table.appendChild(tr);
    }
  
    tableDiv.appendChild(table);
    document.body.appendChild(tableDiv);
  }
  
  // Helper function to get class name for a field
  function getClassForField(field) {
    switch (field) {
      case 'name':
        return 'name';
      case 'shopName':
        return 'shop-name';
      case 'shopID':
        return 'shop-id';
      case 'dateJoined':
        return 'date-joined';
      default:
        return '';
    }
  }
  
  // Helper function to get label for a field
  function getFieldLabel(field) {
    switch (field) {
      case 'name':
        return 'Name';
      case 'shopName':
        return 'Shop Name';
      case 'shopID':
        return 'Shop ID';
      case 'dateJoined':
        return 'Date Joined';
      default:
        return '';
    }
  }
  
  // Call the createTable function with the data
  createTable(data);
  