// Data for the table rows
const paymentHistory = [
    { shopID: 'XSDCSDC', amount: 1000, date: '12-02-2024', modeOfPayment: 'online' },
    { shopID: 'XSDCSDC', amount: 1000, date: '12-02-2024', modeOfPayment: 'online' },
    { shopID: 'XSDCSDC', amount: 1000, date: '12-02-2024', modeOfPayment: 'online' },
    { shopID: 'XSDCSDC', amount: 1000, date: '12-02-2024', modeOfPayment: 'online' },
    { shopID: 'XSDCSDC', amount: 1000, date: '12-02-2024', modeOfPayment: 'online' }
  ];
  
  // Function to create table rows
  function createTableRows() {
    const table = document.querySelector('table');
  
    paymentHistory.forEach((payment) => {
      const row = table.insertRow();
  
      const shopIDCell = row.insertCell(0);
      shopIDCell.textContent = payment.shopID;
  
      const amountCell = row.insertCell(1);
      amountCell.textContent = payment.amount;
  
      const dateCell = row.insertCell(2);
      dateCell.textContent = payment.date;
  
      const modeOfPaymentCell = row.insertCell(3);
      modeOfPaymentCell.textContent = payment.modeOfPayment;
    });
  }
  
  // Call the function to create table rows when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', createTableRows);
  