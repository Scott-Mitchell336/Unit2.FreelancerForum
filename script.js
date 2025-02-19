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

let lastFreelancerShownIndex = 0;
let totalFreeLancersPrice = 0;

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomFreelancer() {
  const name = `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
  const occupation = getRandomElement(occupations);
  const price = Math.round(Math.random() * 100); // Random price between 0 and 100
  return { name, occupation, price: parseFloat(price) };
}

function createInitialHTML() {
  const htmlBody = document.querySelector("body");
  console.log("body = ", htmlBody);
  const scriptElement = document.querySelector("#scriptTag");
  console.log("scriptElement = ", scriptElement);

  const centerContainer = document.createElement("div");
  centerContainer.classList.add("centerContainer");
  centerContainer.style.display = "block";
  centerContainer.style.margin = "0 auto";
  centerContainer.style.width = "50%";
  centerContainer.style.padding = "10px";
  centerContainer.style.border = "2px solid black";
  centerContainer.style.textAlign = "center";

  htmlBody.insertBefore(centerContainer, scriptElement);

  const containerTitle = document.createElement("h1");
  containerTitle.classList.add("containerTitle");
  containerTitle.style.textAlign = "center";
  containerTitle.style.fontSize = "40px";
  containerTitle.style.fontWeight = "bold";
  containerTitle.textContent = "Freelancer Forum";
  centerContainer.appendChild(containerTitle);

  const averagePrice = document.createElement("p");
  averagePrice.classList.add("averagePrice");
  averagePrice.style.textAlign = "center";
  averagePrice.style.margin = "10px";
  averagePrice.style.fontSize = "20px";
  averagePrice.style.fontWeight = "normal";
  centerContainer.appendChild(averagePrice);

  const tableTitle = document.createElement("h1");
  tableTitle.classList.add("availableFreelancers");
  tableTitle.style.textAlign = "center";
  tableTitle.style.fontSize = "30px";
  tableTitle.style.fontWeight = "bold";
  tableTitle.textContent = "Available Freelancers";
  centerContainer.appendChild(tableTitle);
}

function createTable() {
  const table = document.createElement("table");
  table.style.margin = "0 auto";
  table.setAttribute("class", ".freelancerTable");

  const tableHeader = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Name", "Occupation", "Staring Price"];
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    th.style.padding = "8px";
    th.style.fontSize = "20px";
    th.style.fontWeight = "bold";
    th.style.textAlign = "left";
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
  name.style.padding = "8px";
  name.style.textAlign = "left";
  name.style.fontSize = "15px";
  name.style.fontWeight = "normal";
  row.appendChild(name);

  const occupation = document.createElement("td");
  occupation.textContent = freelancer.occupation;
  occupation.style.padding = "8px";
  occupation.style.textAlign = "left";
  occupation.style.fontSize = "15px";
  occupation.style.fontWeight = "normal";
  row.appendChild(occupation);

  const price = document.createElement("td");
  const roundedPrice = Math.floor(freelancer.price);
  price.textContent = `$${roundedPrice.toFixed(2)}`; // Format price as $xx.00
  price.style.padding = "8px";
  price.style.textAlign = "left";
  price.style.fontSize = "15px";
  price.style.fontWeight = "normal";
  row.appendChild(price);

  tableBody.appendChild(row);
}

function updateaveragePrice(freeLancer) {
  //console.log("freeLancer.price = ", freeLancer.price);
  totalFreeLancersPrice += freeLancer.price;
  //console.log("totalFreeLancersPrice = ", totalFreeLancersPrice);
  const averagePrice = totalFreeLancersPrice / lastFreelancerShownIndex;
  //console.log(`Average Price: $${averagePrice.toFixed(2)}`);
  const averagePriceElement = document.querySelector(".averagePrice");
  averagePriceElement.textContent = `The average starting price is $${averagePrice.toFixed(
    2
  )}`;
}

function showInitialFreelancers() {
  for (let i = 0; i < freelancers.length; i++) {
    addFreelancer(freelancers[i]);
    lastFreelancerShownIndex++;
    updateaveragePrice(freelancers[i]);
  }
}

// Main code
createInitialHTML();

const table = createTable();
const container = document.querySelector(".centerContainer");
container.appendChild(table);

showInitialFreelancers();

const addFreelancerIntervalId = setInterval(() => {
  if (lastFreelancerShownIndex <= freelancers.length - 1) {
    //console.log("lastFreelancerShownIndex = ", lastFreelancerShownIndex);
    //console.log("freelancers = ", freelancers);
    const freeLancer = freelancers[lastFreelancerShownIndex];
    //console.log("freelancer = ", freeLancer);
    //console.log(freeLancer);
    addFreelancer(freeLancer);

    lastFreelancerShownIndex++;
    updateaveragePrice(freeLancer);
  }
}, 5000);

const createFreelancerIntervalId = setInterval(() => {
  const freeLancer = generateRandomFreelancer();
  //console.log("new freelancer = ", freeLancer);
  freelancers.push(freeLancer);
}, 5000);
