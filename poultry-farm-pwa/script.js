// Define variables to store references to DOM elements
const form = document.querySelector('#recordForm'); // Updated form ID
const dateInput = document.querySelector('#date');
const timeInput = document.querySelector('#time'); // Added time input
const foodAmountInput = document.querySelector('#foodAmount');
const waterAmountInput = document.querySelector('#waterAmount');
const birdStateInput = document.querySelector('#birdState');
const attentionBirdInput = document.querySelector('#attentionBird');
const birdProblemInput = document.querySelector('#birdProblem');
const attentionRoomInput = document.querySelector('#attentionRoom');
const weatherInput = document.querySelector('#weather');
const eggsInput = document.querySelector('#eggs');
const deathsInput = document.querySelector('#deaths');
const manureInput = document.querySelector('#manure');
const birdsSoldInput = document.querySelector('#birdsSold');
const recommendationInput = document.querySelector('#recommendation');
const recordsList = document.querySelector('#records-list');

// Event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Retrieve form input values
  const date = dateInput.value;
  const time = timeInput.value; // Added time
  const foodAmount = foodAmountInput.value;
  const waterAmount = waterAmountInput.value;
  const birdState = birdStateInput.value;
  const attentionBird = attentionBirdInput.checked;
  const birdProblem = birdProblemInput.value;
  const attentionRoom = attentionRoomInput.value;
  const weather = weatherInput.value;
  const eggs = eggsInput.value;
  const deaths = deathsInput.value;
  const manure = manureInput.checked;
  const birdsSold = birdsSoldInput.value;
  const recommendation = recommendationInput.value;

  // Create a farm state record object
  const record = {
    date,
    time, // Added time
    foodAmount,
    waterAmount,
    birdState,
    attentionBird,
    birdProblem,
    attentionRoom,
    weather,
    eggs,
    deaths,
    manure,
    birdsSold,
    recommendation,
    // Add more fields as needed
  };

  // Save the record to local storage
  saveFarmStateRecord(record);

  // Clear the form
  form.reset();

  // Update the list of records
  updateRecordsList();
});

// Function to save a farm state record to local storage
function saveFarmStateRecord(record) {
  let records = JSON.parse(localStorage.getItem('farmStateRecords')) || [];
  records.push(record);
  localStorage.setItem('farmStateRecords', JSON.stringify(records));
}

// Function to update the list of farm state records in the UI
function updateRecordsList() {
  const records = JSON.parse(localStorage.getItem('farmStateRecords')) || [];
  recordsList.innerHTML = '';

  records.forEach((record, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>Record ${index + 1}:</strong> Date: ${record.date}, Time: ${record.time}, Food Amount: ${record.foodAmount} kg, Water Amount: ${record.waterAmount} liters, Bird State: ${record.birdState}, Needs Attention: ${record.attentionBird ? 'Yes' : 'No'}, Bird Problem: ${record.birdProblem}, Birds in Attention Room: ${record.attentionRoom}, Weather: ${record.weather}, Number of Eggs: ${record.eggs}, Number of Deaths: ${record.deaths}, Manure Collected: ${record.manure ? 'Yes' : 'No'}, Number of Birds Sold: ${record.birdsSold}, Recommendation: ${record.recommendation}
      <!-- Add more fields as needed -->
    `;
    recordsList.appendChild(listItem);
  });
}

// Initialize the list of farm state records when the page loads
updateRecordsList();
