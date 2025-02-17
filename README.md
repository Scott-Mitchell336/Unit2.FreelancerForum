const occupations = ["Web Developer", "Graphic Designer", "Teacher", "Driver", "Gardener", "Programmer"];
const firstNames = ["John", "Jane", "Alex", "Chris", "Pat", "Taylor"];
const lastNames = ["Doe", "Smith", "Johnson", "Brown", "Williams", "Jones"];

function getRandomElement(arr) {
return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomFreelancer() {
const name = `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
const occupation = getRandomElement(occupations);
const price = (Math.random() \* 100).toFixed(2); // Random price between 0 and 100
return { name, occupation, price: parseFloat(price) };
}

function createTable() {
const table = document.createElement("table");
table.setAttribute("class", "freelancerTable");

const tableHeader = document.createElement("thead");
const headerRow = document.createElement("tr");
const headers = ["Name", "Occupation", "Price"];
headers.forEach((header) => {
const th = document.createElement("th");
th.textContent = header;
headerRow.appendChild(th);
});
tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);

const tableBody = document.createElement("tbody");
tableBody.setAttribute("id", "freeLancerTableBody");
table.appendChild(tableBody);

return table;
}

function addFreelancer(freelancer) {
const tableBody = document.querySelector("#freeLancerTableBody");
const row = document.createElement("tr");

const name = document.createElement("td");
name.textContent = freelancer.name;
row.appendChild(name);

const occupation = document.createElement("td");
occupation.textContent = freelancer.occupation;
row.appendChild(occupation);

const price = document.createElement("td");
price.textContent = `$${freelancer.price.toFixed(2)}`; // Format price as $xx.xx
row.appendChild(price);

tableBody.appendChild(row);
}

function updateAveragePrice() {
// Calculate average price
let total = 0;
for (let i = 0; i < currentFreelancerIndex; i++) {
const freelancer = freelancers[i];
total += freelancer.price;
}
const averagePrice = total / currentFreelancerIndex;
console.log(`Average Price: $${averagePrice.toFixed(2)}`);

// Update the average price in the DOM
const averagePriceElement = document.querySelector(".averagePrice");
averagePriceElement.textContent = `The average starting price is $${averagePrice.toFixed(2)}`;
}

const freelancers = [];
let currentFreelancerIndex = 0;

const table = createTable();
const container = document.querySelector(".centerContainer");
container.appendChild(table);

const addFreelancerIntervalId = setInterval(() => {
const freelancer = generateRandomFreelancer();
freelancers.push(freelancer);
addFreelancer(freelancer);
updateAveragePrice();
currentFreelancerIndex++;

if (currentFreelancerIndex === 10) { // Stop after adding 10 freelancers
clearInterval(addFreelancerIntervalId);
}
}, 1000);
