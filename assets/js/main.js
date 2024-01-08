// Your existing arrays to store records
let dailyMilkRecords = [];
let diseaseRecords = [];
let matingRecords = [];
let animalRecords = [];
let expensesRecords = [];


// Function to record daily milk production
function recordMilk() {
    const cowId = document.getElementById("cowIdInput").value;
    const milkAmount = parseFloat(document.getElementById("milkAmountInput").value);

    dailyMilkRecords.push({ cowId, milkAmount, date: new Date() });

    // Update the UI with daily milk records
    updateDailyMilkInfo();
}

// Function to update UI with daily milk records
function updateDailyMilkInfo() {
    // Placeholder logic for updating UI with daily milk records
    // Replace with your actual UI update logic
    console.log("Updating UI with daily milk records:", dailyMilkRecords);
}

// Function to record disease treatment
function recordTreatment() {
    const cowId = document.getElementById("diseaseCowId").value;
    const treatmentInfo = document.getElementById("treatmentInfo").value;

    diseaseRecords.push({ cowId, treatmentInfo, date: new Date() });

    // Update the UI with disease treatment information
    updateDiseaseInfo();
}

// Function to update UI with disease treatment information
function updateDiseaseInfo() {
    // Placeholder logic for updating UI with disease treatment information
    // Replace with your actual UI update logic
    console.log("Updating UI with disease treatment information:", diseaseRecords);
}

// Function to record animal mating date
function recordMating() {
    const cowId = document.getElementById("matingCowId").value;
    const matingDate = new Date(document.getElementById("matingDate").value);

    matingRecords.push({ cowId, matingDate, date: new Date() });

    // Update the UI with mating information
    updateMatingInfo();
}

// Function to update UI with mating information
function updateMatingInfo() {
    // Placeholder logic for updating UI with mating information
    // Replace with your actual UI update logic
    console.log("Updating UI with mating information:", matingRecords);
}

// Function to record individual animal information
function recordAnimalInfo() {
    const cowId = document.getElementById("animalInfoCowId").value;
    const animalPrice = parseFloat(document.getElementById("animalPrice").value);

    animalRecords.push({ cowId, animalPrice, date: new Date() });

    // Update the UI with individual animal information
    updateAnimalInfo();
}

// Function to update UI with individual animal information
function updateAnimalInfo() {
    // Placeholder logic for updating UI with individual animal information
    // Replace with your actual UI update logic
    console.log("Updating UI with individual animal information:", animalRecords);
}

// Function to record expenses
function recordExpenses() {
    const expenseType = document.getElementById("expenseType").value;
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

    expensesRecords.push({ expenseType, expenseAmount, date: new Date() });

    // Update the UI with expenses information
    updateExpensesInfo();
}

// Function to update UI with expenses information
function updateExpensesInfo() {
    // Placeholder logic for updating UI with expenses information
    // Replace with your actual UI update logic
    console.log("Updating UI with expenses information:", expensesRecords);
}

// Function to generate the report
function generateReport() {
    // Placeholder logic for generating the report
    // Replace with your actual report generation logic
    console.log("Generating report...");

    // Your existing report generation logic
    var sheds = [];
    // get input values
    sheds[0] = parseInt(document.getElementById("a").value);
    sheds[1] = parseInt(document.getElementById("b").value);
    sheds[2] = parseInt(document.getElementById("c").value);
    sheds[3] = parseInt(document.getElementById("d").value);

    // calculate income values
    var dayTotal = sheds[0] + sheds[1] + sheds[2] + sheds[3];

    var price = parseInt(document.getElementById("price").value);

    var dailyIncome = price * dayTotal;
    var weeklyIncome = dailyIncome * 7;
    var januaryIncome = dailyIncome * 31;
    var februaryIncome = dailyIncome * 28;
    var febLeapIncome = dailyIncome * 29;
    var marchIncome = dailyIncome * 31;
    var aprilIncome = dailyIncome * 30;
    var mayIncome = dailyIncome * 31;
    var juneIncome = dailyIncome * 30;
    var julyIncome = dailyIncome * 31;
    var augustIncome = dailyIncome * 31;
    var septemberIncome = dailyIncome * 30;
    var octoberIncome = dailyIncome * 31;
    var novemberIncome = dailyIncome * 30;
    var decemberIncome = dailyIncome * 31;

    var leapYearIncome =
        januaryIncome +
        febLeapIncome +
        marchIncome +
        aprilIncome +
        mayIncome +
        juneIncome +
        julyIncome +
        augustIncome +
        septemberIncome +
        octoberIncome +
        novemberIncome +
        decemberIncome;
    var nonLeapYearIncome =
        januaryIncome +
        februaryIncome +
        marchIncome +
        aprilIncome +
        mayIncome +
        juneIncome +
        julyIncome +
        augustIncome +
        septemberIncome +
        octoberIncome +
        novemberIncome +
        decemberIncome;

    // hide placeholder text on the report
    document.getElementById("placeholder").classList.add("hidden");

    // show report values
    document.getElementById("report-a").innerText = sheds[0];
    document.getElementById("report-b").innerText = sheds[1];
    document.getElementById("report-c").innerText = sheds[2];
    document.getElementById("report-d").innerText = sheds[3];
    document.getElementById("daily").innerText = dailyIncome;
    document.getElementById("weekly").innerText = weeklyIncome;

    document.getElementById("january").innerText = januaryIncome;
    document.getElementById("february").innerText = februaryIncome;
    document.getElementById("feb-leap").innerText = febLeapIncome;
    document.getElementById("march").innerText = marchIncome;
    document.getElementById("april").innerText = aprilIncome;
    document.getElementById("may").innerText = mayIncome;
    document.getElementById("june").innerText = juneIncome;
    document.getElementById("july").innerText = julyIncome;
    document.getElementById("august").innerText = augustIncome;
    document.getElementById("september").innerText = septemberIncome;
    document.getElementById("october").innerText = octoberIncome;
    document.getElementById("november").innerText = novemberIncome;
    document.getElementById("december").innerText = decemberIncome;
    document.getElementById("leap-year").innerText = leapYearIncome;
    document.getElementById("non-leap-year").innerText = nonLeapYearIncome;

    // show report text
    document.getElementById("report-values").classList.remove("hidden");
}

// Function to update the report section
function updateReport(data) {
    // Placeholder logic for updating the report section
    // Replace with your actual report update logic
    console.log("Updating report section with data:", data);
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
        // showLoginModal();
    });

    getStartedLink.addEventListener("click", function () {
        window.location.href = "/dairy-farm-app/assets/HTML/get_started.html";
    });
});

/// Your existing arrays to store records
let users = [];

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

    // After successful registration, you can redirect or perform any other actions
    // For example, you can show a success message or hide the registration modal
    alert("Registration successful!");
}
