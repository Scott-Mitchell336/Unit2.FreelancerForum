const freelancers = [
  { name: "Alex Brown", price: 25, occupation: "Gardener" },
  { name: "Susie Johnson", price: 51, occupation: "Programmer" },
];

const occupations = [
  "Web Developer",
  "Graphic Designer",
  "Teacher",
  "Driver",
  "Gardener",
  "Programmer",
  "Data Analyst",
  "Data Scientist",
  "Software Engineer",
  "Business Analyst",
  "Project Manager",
  "Product Manager",
  "UX Designer",
  "UI Designer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];
const firstNames = [
  "John",
  "Jane",
  "Alex",
  "Chris",
  "Pat",
  "Taylor",
  "Paul",
  "Susie",
  "Dale",
  "Kim",
];
const lastNames = [
  "Doe",
  "Smith",
  "Johnson",
  "Brown",
  "Williams",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
];

let currentFreelancerIndex = 0;

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomFreelancer() {
  const name = `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
  const occupation = getRandomElement(occupations);
  const price = Math.random() * 100; // Random price between 0 and 100
  return { name, occupation, price: parseFloat(price) };
}

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
  //console.log(tableBody);
  const row = document.createElement("tr");

  const name = document.createElement("td");
  name.textContent = freelancer.name;
  row.appendChild(name);

  const occupation = document.createElement("td");
  occupation.textContent = freelancer.occupation;
  row.appendChild(occupation);

  const price = document.createElement("td");
  const roundedPrice = Math.floor(freelancer.price);
  price.textContent = `$${roundedPrice.toFixed(2)}`; // Format price as $xx.00
  row.appendChild(price);

  tableBody.appendChild(row);
}

function updateAveragePrice() {
  // Calculate average price
  let total = 0;
  //console.log("currentFreelancerIndex = ", currentFreelancerIndex);
  for (let i = 0; i <= currentFreelancerIndex; i++) {
    //console.log("index = ", i);
    const freelancer = freelancers[i];
    total += freelancer.price;
    //console.log("total = ", total);
  }
  const averagePrice = total / (currentFreelancerIndex + 1);
  //console.log(`Average Price: $${averagePrice.toFixed(2)}`);

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
  //console.log(freeLancer);
  addFreelancer(freeLancer);
  updateAveragePrice();
  // if (currentFreelancerIndex === freelancers.length - 1) {
  //   clearInterval(addFreelancerIntervalId);
  // }
  currentFreelancerIndex++;
}, 5000);

const createFreelancerIntervalId = setInterval(() => {
  const freeLancer = generateRandomFreelancer();
  console.log("new freelancer = ", freeLancer);
  freelancers.push(freeLancer);
}, 5000);
