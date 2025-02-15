const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

let currentFreelancerIndex = 0;

function createTable() {
  const table = document.createElement("table");
  table.setAttribute("class", "freelancerTable");

  const tableHeader = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Name", "Occupation", "Staring Price"];
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
  console.log(tableBody);
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
  console.log("currentFreelancerIndex = ", currentFreelancerIndex);
  for (let i = 0; i <= currentFreelancerIndex; i++) {
    console.log("index = ", i);
    const freelancer = freelancers[i];
    total += freelancer.price;
    console.log("total = ", total);
  }
  const averagePrice = total / (currentFreelancerIndex + 1);
  console.log(`Average Price: $${averagePrice.toFixed(2)}`);

  // Update the average price in the DOM
  const averagePriceElement = document.querySelector(".averagePrice");
  averagePriceElement.textContent = `The average starting price is $${averagePrice.toFixed(
    2
  )}`;
}

const table = createTable();
const container = document.querySelector(".centerContainer");

container.appendChild(table);

const addFreelancerIntervalId = setInterval(() => {
  const freeLancer = freelancers[currentFreelancerIndex];
  console.log(freeLancer);
  addFreelancer(freeLancer);
  updateAveragePrice();
  if (currentFreelancerIndex === freelancers.length - 1) {
    clearInterval(addFreelancerIntervalId);
  }
  currentFreelancerIndex++;
}, 5000);

// const freeLancer = freelancers[currentFreelancerIndex];
// console.log(freeLancer);
// addFreelancer(freeLancer);
// updateAveragePrice();
// currentFreelancerIndex++;
