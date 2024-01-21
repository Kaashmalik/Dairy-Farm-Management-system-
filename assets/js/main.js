// Your existing arrays to store records
let dailyMilkRecords = [];
let diseaseRecords = [];
let matingRecords = [];
let animalRecords = [];
let expensesRecords = [];
let users = []; // Added array to store user records

// Your existing arrays for report calculations
const sheds = [];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dailyIncome = 0;

// Function to record disease treatment
async function recordTreatment() {
    const cowId = document.getElementById("diseaseCowId").value;
    const treatmentInfo = document.getElementById("treatmentInfo").value;

    try {
        const response = await fetch('/record-treatment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cowId, treatmentInfo }),
        });

        const data = await response.json();

        if (data.success) {
            diseaseRecords.push({ cowId, treatmentInfo, date: new Date() });
            updateDiseaseInfo();
        } else {
            console.error('Error recording treatment:', data.message);
        }
    } catch (error) {
        console.error('Error recording treatment:', error);
    }
}

// Function to update UI with disease treatment information
function updateDiseaseInfo() {
    // Placeholder logic for updating UI with disease treatment information
    // Replace with your actual UI update logic
    console.log("Updating UI with disease treatment information:", diseaseRecords);
}

// Function to record animal mating date
async function recordMating() {
    const cowId = document.getElementById("matingCowId").value;
    const matingDate = new Date(document.getElementById("matingDate").value);

    try {
        const response = await fetch('/record-mating', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cowId, matingDate }),
        });

        const data = await response.json();

        if (data.success) {
            matingRecords.push({ cowId, matingDate, date: new Date() });
            updateMatingInfo();
        } else {
            console.error('Error recording mating:', data.message);
        }
    } catch (error) {
        console.error('Error recording mating:', error);
    }
}

// Function to update UI with mating information
function updateMatingInfo() {
    // Placeholder logic for updating UI with mating information
    // Replace with your actual UI update logic
    console.log("Updating UI with mating information:", matingRecords);
}

// Function to record individual animal information
async function recordAnimalInfo() {
    const cowId = document.getElementById("animalInfoCowId").value;
    const animalPrice = parseFloat(document.getElementById("animalPrice").value);

    try {
        const response = await fetch('/record-animal-info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cowId, animalPrice }),
        });

        const data = await response.json();

        if (data.success) {
            animalRecords.push({ cowId, animalPrice, date: new Date() });
            updateAnimalInfo();
        } else {
            console.error('Error recording animal information:', data.message);
        }
    } catch (error) {
        console.error('Error recording animal information:', error);
    }
}

// Function to update UI with individual animal information
function updateAnimalInfo() {
    // Placeholder logic for updating UI with individual animal information
    // Replace with your actual UI update logic
    console.log("Updating UI with individual animal information:", animalRecords);
}

// Function to record expenses
async function recordExpenses() {
    const expenseType = document.getElementById("expenseType").value;
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

    try {
        const response = await fetch('/record-expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ expenseType, expenseAmount }),
        });

        const data = await response.json();

        if (data.success) {
            expensesRecords.push({ expenseType, expenseAmount, date: new Date() });
            updateExpensesInfo();
        } else {
            console.error('Error recording expenses:', data.message);
        }
    } catch (error) {
        console.error('Error recording expenses:', error);
    }
}

// Function to update UI with expenses information
function updateExpensesInfo() {
    // Placeholder logic for updating UI with expenses information
    // Replace with your actual UI update logic
    console.log("Updating UI with expenses information:", expensesRecords);
}

// Function to record milk production
async function recordMilk() {
    // ... (existing code)
}

// Function to update UI with milk production information
function updateMilkInfo() {
    // ... (existing code)
}

// Function to calculate total calf count
function calculateTotalCalfCount() {
    // Placeholder logic for calculating total calf count
    // Replace with your actual logic
    return matingRecords.length;
}

// Function to calculate profit or loss
function calculateProfitOrLoss() {
    // Placeholder logic for calculating profit or loss
    // Replace with your actual logic
    const totalIncome = dailyIncome * sheds.reduce((total, value) => total + value, 0);
    const totalExpenses = expensesRecords.reduce((total, expense) => total + expense.expenseAmount, 0);

    return totalIncome - totalExpenses;
}

// Function to generate the report
function generateReport() {
    // ... (existing code)

    // Calculate and display total calf count
    const totalCalfCount = calculateTotalCalfCount();
    document.getElementById("totalCalfCount").innerText = totalCalfCount;

    // Calculate and display profit or loss
    const profitOrLoss = calculateProfitOrLoss();
    document.getElementById("profitOrLoss").innerText = profitOrLoss;

    // ... (existing code)
}

// Function to update the report section
function updateReport(data) {
    // ... (existing code)
}

// Function to handle form submissions
function handleSubmit(event) {
    event.preventDefault();
    const formId = event.target.id;

    switch (formId) {
        case "milkForm":
            recordMilk();
            break;
        case "treatmentForm":
            recordTreatment();
            break;
        case "matingForm":
            recordMating();
            break;
        case "animalInfoForm":
            recordAnimalInfo();
            break;
        case "expensesForm":
            recordExpenses();
            break;
        case "reportForm":
            generateReport();
            break;
        default:
            // Handle other form submissions if needed
            break;
    }
}

// Attach the handleSubmit function to form submissions dynamically
document.querySelectorAll('form').forEach(form => {
    form.addEventListener("submit", handleSubmit);
});

// Navbar Handle
document.addEventListener("DOMContentLoaded", function () {
    // Get references to your links
    const logoLink = document.getElementById("logoLink");
    const homeLink = document.getElementById("homeLink");
    const aboutLink = document.getElementById("aboutLink");
    const productsLink = document.getElementById("productsLink");
    const contactLink = document.getElementById("contactLink");
    const loginLink = document.getElementById("loginLink");
    const getStartedLink = document.getElementById("getStartedLink");

    // Add click event listeners
    logoLink.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });

    homeLink.addEventListener("click", function () {
        window.scrollTo(0, document.querySelector(".landing").offsetTop);
    });

    aboutLink.addEventListener("click", function () {
        window.location.href = "/dairy-farm-app/assets/HTML/about.html";
    });

    productsLink.addEventListener("click", function () {
        window.location.href = "/dairy-farm-app/assets/HTML/products.html";
    });

    contactLink.addEventListener("click", function () {
        window.location.href = "/dairy-farm-app/assets/HTML/contact.html";
    });

    loginLink.addEventListener("click", function () {
        toggleForms(); // Toggle login/registration forms
    });

    getStartedLink.addEventListener("click", function () {
        toggleForms(); // Toggle login/registration forms
    });
});

// Function to handle user login
function loginUser() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Check if the provided credentials match any user in your users array or database
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Successfully logged in, perform the necessary actions (e.g., redirect, show user-specific content)
        alert("Login successful!");
    } else {
        alert("Invalid username or password");
    }
}

// Function to handle user registration
function registerUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;

    // Check if the username is unique
    if (users.some(user => user.username === username)) {
        alert("Username is already taken. Please choose another.");
        return;
    }

    // Placeholder logic for user registration
    users.push({ username, email, phoneNumber, password });

    console.log("Registered user:", { username, email, phoneNumber, password });

    // After successful registration, you can redirect or perform other actions
    alert("Registration successful!");
}

// Toggle between login and registration forms
function toggleForms() {
    const loginForm = document.getElementById("loginForm");
    const registrationForm = document.getElementById("registrationForm");

    loginForm.classList.toggle("hidden");
    registrationForm.classList.toggle("hidden");
}

// Update the getStartedLink event listener to handle user registration
getStartedLink.addEventListener("click", function () {
    toggleForms(); // Toggle login/registration forms
});
async function generateReport() {
    try {
        const response = await fetch('/fetch-report-data');
        const data = await response.json();

        if (data.success) {
            // ... (existing code)

            // Calculate profit or loss
            const totalIncome = calculateTotalIncome(milkTotal);
            const profitOrLoss = totalIncome - totalExpenses;

            // Update UI with calculated values
            document.getElementById('milkTotal').innerText = milkTotal;
            document.getElementById('diseaseCount').innerText = diseaseCount;
            document.getElementById('matingCount').innerText = matingCount;
            document.getElementById('totalAnimalValue').innerText = totalAnimalValue;
            document.getElementById('totalExpenses').innerText = totalExpenses;
            document.getElementById('profitOrLoss').innerText = profitOrLoss;

            updateReport(data); // Pass the calculated data to update the report section
        } else {
            console.error('Error fetching report data:', data.message);
        }
    } catch (error) {
        console.error('Error generating report:', error);
    }
}
        
    

// Add your specific calculation functions here
function calculateTotalMilk(milkRecords) {
    return milkRecords.reduce((total, record) => total + record.milkAmount, 0);
}

function calculateTotalAnimalValue(animalRecords) {
    return animalRecords.reduce((total, record) => total + record.animalPrice, 0);
}

function calculateTotalExpenses(expensesRecords) {
    return expensesRecords.reduce((total, record) => total + record.expenseAmount, 0);
}

function calculateTotalIncome(milkTotal) {
    // You can add more sources of income here if needed
    return milkTotal;
}
async function downloadReport() {
    try {
        const response = await fetch('/download-report');
        const blob = await response.blob();

        // Create a link element and trigger the download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'report.pdf';
        link.click();
    } catch (error) {
        console.error('Error downloading report:', error);
    }
}
function updateReport(data) {
    // Clear existing report content
    const reportBody = document.querySelector('.report-body');
    reportBody.innerHTML = '';

    // Add new report values for each frequency
    addReportItem('daily', `Your daily income is ${calculateDailyIncome(data.milkRecords)} Kenyan shillings`);
    addReportItem('weekly', `Your weekly income is ${calculateWeeklyIncome(data.milkRecords)} Kenyan shillings`);
    addReportItem('monthly', `Your income for the current month is ${calculateMonthlyIncome(data.milkRecords)} Kenyan shillings`);
    addReportItem('yearly', `Your income for the current year is ${calculateYearlyIncome(data.milkRecords)} Kenyan shillings`);
}

// Helper function to add a report item
function addReportItem(frequency, text) {
    const reportItem = document.createElement('div');
    reportItem.classList.add(frequency);
    reportItem.innerHTML = `<p class="report-item">${text}</p>`;
    document.querySelector('.report-body').appendChild(reportItem);
}
function calculateDailyIncome(milkRecords) {
    // Calculate daily income logic here
    // Example: Sum of milk amounts for the day
    const today = new Date().toISOString().split('T')[0];
    return milkRecords
        .filter(record => record.date.toISOString().split('T')[0] === today)
        .reduce((total, record) => total + record.milkAmount, 0);
}

function calculateWeeklyIncome(milkRecords) {
    // Calculate weekly income logic here
    // Example: Sum of milk amounts for the week
    const today = new Date();
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const lastDayOfWeek = new Date(today.setDate(firstDayOfWeek.getDate() + 6));

    return milkRecords
        .filter(record => record.date >= firstDayOfWeek && record.date <= lastDayOfWeek)
        .reduce((total, record) => total + record.milkAmount, 0);
}

function calculateMonthlyIncome(milkRecords) {
    // Calculate monthly income logic here
    // Example: Sum of milk amounts for the month
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    return milkRecords
        .filter(record => record.date >= firstDayOfMonth && record.date <= lastDayOfMonth)
        .reduce((total, record) => total + record.milkAmount, 0);
}

function calculateYearlyIncome(milkRecords) {
    // Calculate yearly income logic here
    // Example: Sum of milk amounts for the year
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const lastDayOfYear = new Date(today.getFullYear(), 11, 31);

    return milkRecords
        .filter(record => record.date >= firstDayOfYear && record.date <= lastDayOfYear)
        .reduce((total, record) => total + record.milkAmount, 0);
}
