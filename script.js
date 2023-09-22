// Define variables to store references to DOM elements
const recordForm = document.querySelector('#recordForm');
const dateInput = document.querySelector('#date');
const timeInput = document.querySelector('#time');
const foodAmountInput = document.querySelector('#foodAmount');
const waterAmountInput = document.querySelector('#waterAmount');
const birdStateInput = document.querySelector('#birdState');
const BirdsinattentionInput = document.querySelector('#Birdsinattention');
const specificProblemInput = document.querySelector('#specificProblem');
const attentionRoomInput = document.querySelector('#attentionRoom');
const weatherInput = document.querySelector('#weather');
const deathsInput = document.querySelector('#deaths');
const recommendationInput = document.querySelector('#recommendation');
const nextButton = document.querySelector('#nextButton');


// Input Costs variables
const feedsQuantityInput = document.querySelector('#feedsQuantity');
const feedsUnitPriceInput = document.querySelector('#feedsUnitPrice');
const feedsTotalInput = document.querySelector('#feedsTotal');

const drugsQuantityInput = document.querySelector('#drugsQuantity');
const drugsUnitPriceInput = document.querySelector('#drugsUnitPrice');
const drugsTotalInput = document.querySelector('#drugsTotal');

const vaccinesQuantityInput = document.querySelector('#vaccinesQuantity');
const vaccinesUnitPriceInput = document.querySelector('#vaccinesUnitPrice');
const vaccinesTotalInput = document.querySelector('#vaccinesTotal');

const buildingMaterialsQuantityInput = document.querySelector('#buildingMaterialsQuantity');
const buildingMaterialsUnitPriceInput = document.querySelector('#buildingMaterialsUnitPrice');
const buildingMaterialsTotalInput = document.querySelector('#buildingMaterialsTotal');

const othersQuantityInput = document.querySelector('#othersQuantity');
const othersUnitPriceInput = document.querySelector('#othersUnitPrice');
const othersTotalInput = document.querySelector('#othersTotal');

// Output variables
const eggSalesInput = document.querySelector('#eggSales');
const chickSalesInput = document.querySelector('#chickSales');
const birdSalesInput = document.querySelector('#birdSales');
const manureSalesInput = document.querySelector('#manureSales');
const totalSalesInput = document.querySelector('#totalSales');

// Add input event listeners for input cost calculations
const totalInputCostsInput = document.querySelector('#totalInputCosts');

feedsQuantityInput.addEventListener('input', calculateInputCosts);
feedsUnitPriceInput.addEventListener('input', calculateInputCosts);

drugsQuantityInput.addEventListener('input', calculateInputCosts);
drugsUnitPriceInput.addEventListener('input', calculateInputCosts);

vaccinesQuantityInput.addEventListener('input', calculateInputCosts);
vaccinesUnitPriceInput.addEventListener('input', calculateInputCosts);

buildingMaterialsQuantityInput.addEventListener('input', calculateInputCosts);
buildingMaterialsUnitPriceInput.addEventListener('input', calculateInputCosts);

othersQuantityInput.addEventListener('input', calculateInputCosts);
othersUnitPriceInput.addEventListener('input', calculateInputCosts);

feedsTotalInput.addEventListener('input', calculateTotalInputCosts);
drugsTotalInput.addEventListener('input', calculateTotalInputCosts);
vaccinesTotalInput.addEventListener('input', calculateTotalInputCosts);
buildingMaterialsTotalInput.addEventListener('input', calculateTotalInputCosts);
othersTotalInput.addEventListener('input', calculateTotalInputCosts);


// Add input event listeners for sales calculations
eggSalesInput.addEventListener('input', calculateSales);
chickSalesInput.addEventListener('input', calculateSales);
birdSalesInput.addEventListener('input', calculateSales);
manureSalesInput.addEventListener('input', calculateSales);

// Event listener for form submission
recordForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Perform form validation here (e.g., check if numeric fields contain valid numbers)
  if (!validateForm()) {
    return;
  }

  // Retrieve form input values
  const date = dateInput.value;
  const time = timeInput.value;
  const foodAmount = foodAmountInput.value;
  const waterAmount = waterAmountInput.value;
  const birdState = birdStateInput.value;
  const Birdsinattention = BirdsinattentionInput.value;
  const specificProblem = specificProblemInput.value;
  const attentionRoom = attentionRoomInput.value;
  const weather = weatherInput.value;
  const deaths = deathsInput.value;
  const recommendation = recommendationInput.value;

  // Calculate the Total Cost of Inputs
  const totalInputCosts =
    parseFloat(feedsTotalInput.value) +
    parseFloat(drugsTotalInput.value) +
    parseFloat(vaccinesTotalInput.value) +
    parseFloat(buildingMaterialsTotalInput.value) +
    parseFloat(othersTotalInput.value);

  // Create a farm state record object
  const record = {
    date,
    time,
    foodAmount,
    waterAmount,
    birdState,
    Birdsinattention,
    specificProblem,
    attentionRoom,
    weather,
    deaths,
    recommendation,
    totalInputCosts,
    // Add more fields as needed
  };

  // Save the record to local storage
  saveFarmStateRecord(record);

  // Clear the form
  recordForm.reset();

  // Update the list of records
  updateRecordsList();
});

// Function to perform form validation
function validateForm() {
  // Implement form validation logic here, e.g., check if numeric fields contain valid numbers
  // Return true if the form is valid, otherwise return false

  // Example: Check if foodAmount is a valid number
  const foodAmountValue = parseFloat(foodAmountInput.value);
  if (isNaN(foodAmountValue) || foodAmountValue < 0) {
    alert('Food Amount must be a valid positive number.');
    return false;
  }

  // Add more validation as needed

  return true; // Form is valid
}

// Function to calculate total input costs
function calculateInputCosts() {
  // Calculate the total for feeds
  const feedsQuantity = parseFloat(feedsQuantityInput.value) || 0;
  const feedsUnitPrice = parseFloat(feedsUnitPriceInput.value) || 0;
  const feedsTotal = feedsQuantity * feedsUnitPrice;
  feedsTotalInput.value = feedsTotal.toFixed(2); // Display with two decimal places

  // Calculate the total for drugs
  const drugsQuantity = parseFloat(drugsQuantityInput.value) || 0;
  const drugsUnitPrice = parseFloat(drugsUnitPriceInput.value) || 0;
  const drugsTotal = drugsQuantity * drugsUnitPrice;
  drugsTotalInput.value = drugsTotal.toFixed(2);

  // Calculate the total for vaccines
  const vaccinesQuantity = parseFloat(vaccinesQuantityInput.value) || 0;
  const vaccinesUnitPrice = parseFloat(vaccinesUnitPriceInput.value) || 0;
  const vaccinesTotal = vaccinesQuantity * vaccinesUnitPrice;
  vaccinesTotalInput.value = vaccinesTotal.toFixed(2);

  // Calculate the total for building materials
  const buildingMaterialsQuantity = parseFloat(buildingMaterialsQuantityInput.value) || 0;
  const buildingMaterialsUnitPrice = parseFloat(buildingMaterialsUnitPriceInput.value) || 0;
  const buildingMaterialsTotal = buildingMaterialsQuantity * buildingMaterialsUnitPrice;
  buildingMaterialsTotalInput.value = buildingMaterialsTotal.toFixed(2);

  // Calculate the total for others
  const othersQuantity = parseFloat(othersQuantityInput.value) || 0;
  const othersUnitPrice = parseFloat(othersUnitPriceInput.value) || 0;
  const othersTotal = othersQuantity * othersUnitPrice;
  othersTotalInput.value = othersTotal.toFixed(2);
  // Calculate the overall total input cost
  const totalInputCosts =
    feedsTotal + drugsTotal + vaccinesTotal + buildingMaterialsTotal + othersTotal;
  totalInputCostsInput.value = totalInputCosts.toFixed(2);
}

function calculateTotalInputCosts() {
  const feedsTotal = parseFloat(feedsTotalInput.value) || 0;
  const drugsTotal = parseFloat(drugsTotalInput.value) || 0;
  const vaccinesTotal = parseFloat(vaccinesTotalInput.value) || 0;
  const buildingMaterialsTotal = parseFloat(buildingMaterialsTotalInput.value) || 0;
  const othersTotal = parseFloat(othersTotalInput.value) || 0;

  const totalInputCosts = feedsTotal + drugsTotal + vaccinesTotal + buildingMaterialsTotal + othersTotal;
  totalInputCostsInput.value = totalInputCosts.toFixed(2);
}

calculateTotalInputCosts();

// Function to calculate total sales
function calculateSales() {
  const eggSales = parseFloat(eggSalesInput.value) || 0;
  const chickSales = parseFloat(chickSalesInput.value) || 0;
  const birdSales = parseFloat(birdSalesInput.value) || 0;
  const manureSales = parseFloat(manureSalesInput.value) || 0;
  const totalSales = eggSales + chickSales + birdSales + manureSales;
  totalSalesInput.value = totalSales.toFixed(2);
}

// Function to save a farm state record to local storage
function saveFarmStateRecord(record) {
  let records = JSON.parse(localStorage.getItem('farmStateRecords')) || [];
  records.push(record);
  localStorage.setItem('farmStateRecords', JSON.stringify(records));
}

// Function to update the list of farm state records in the UI
function updateRecordsList() {
  const records = JSON.parse(localStorage.getItem('farmStateRecords')) || [];

  // Select the list element in your HTML where you want to display records
  const recordsList = document.querySelector('#recordsList');

  // Clear previous records
  recordsList.innerHTML = '';

  // Loop through records and add them to the list
  records.forEach((record, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>Record ${index + 1}:</strong> Date: ${record.date}, Time: ${record.time}, Food Amount (kg): ${record.foodAmount}, Water Amount (liters): ${record.waterAmount}, Bird State: ${record.birdState}, Birds in Attention: ${record.Birdsinattention}, Specific Problem: ${record.specificProblem}, Birds in Attention Room: ${record.attentionRoom}, Weather: ${record.weather}, Number of Deaths: ${record.deaths}, Recommendation: ${record.recommendation}, Total Input Costs: ${record.totalInputCosts.toFixed(2)}
      <!-- Add more fields as needed -->
    `;
    recordsList.appendChild(listItem);
  });
}

// Function to navigate to the next form section
function nextSection() {
  // You can add logic here to navigate to the next form section if needed
  // For now, it's just clearing the form
  recordForm.reset();
}

// Function to navigate to the next subsection
function nextSubsection() {
  // You can add logic here to navigate to the next subsection if needed
  // For now, it's just clearing the form
  recordForm.reset();
}

// Initialize the list of farm state records when the page loads
updateRecordsList();
