/*
const express = require('express');
const { MongoClient } = require("mongodb");
const bodyParser = require('body-parser');
const app = express();

// Rest of the code...

const port = process.env.PORT || 3000;

/////////////
/*
// Replace these values with your MongoDB Atlas credentials
const username = 'zuhairaslamdairies';
const password = '8699051zuhair';
const clusterName = 'dairyfarm';
const dbName = 'dairyFarm';

// MongoDB Atlas connection string
const uri = `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const mongoose = require('mongoose');
/*
const uri = "mongodb://zuhairaslamdairies:8699051zuhair@154.80.55.225/32:27017,154.80.49.173/32:27017,154.80.50.192/32:27017/dairyFarm?ssl=true&replicaSet=atlas-i3is5n-shard-0&authSource=admin&retryWrites=true&w=majority";
const uri ="mongodb://zuhairaslamdairies:8699051zuhair@ac-tolaa1i-shard-00-00.pma6pq8.mongodb.net:27017,ac-tolaa1i-shard-00-01.pma6pq8.mongodb.net:27017,ac-tolaa1i-shard-00-02.pma6pq8.mongodb.net:27017/?ssl=true&replicaSet=atlas-i3is5n-shard-0&authSource=admin&retryWrites=true&w=majority";
// Mongoose connection options
const options = {
  useNewUrlParser: true,        // Use new URL parser
  useUnifiedTopology: true,  
    // Use new Server Discover and Monitoring engine
    
    serverSelectionTimeoutMS: 5000, // Set the timeout to a higher value (e.g., 5000 milliseconds)
  // Use new Server Discover and Monitoring engine
};

// Connect to MongoDB Atlas
mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Start your application logic here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
    console.log('Retrying connection in 5 seconds...');
      setTimeout(connectWithRetry, 5000);
  });

// Optional: listen for Mongoose connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Gracefully close the Mongoose connection when the Node.js process is terminated
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection closed due to Node.js process termination');
    process.exit(0);
  });
});


// Replace these values with your MongoDB Atlas credentials

// Replace the uri string with your connection string.
/*
const uri = "mongodb://zuhairaslamdairies:8699051zuhair@ac-tolaa1i-shard-00-00.pma6pq8.mongodb.net:27017,ac-tolaa1i-shard-00-01.pma6pq8.mongodb.net:27017,ac-tolaa1i-shard-00-02.pma6pq8.mongodb.net:27017/dairyFarm?ssl=true&replicaSet=atlas-i3is5n-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,  // Add this line
  });
  
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Replace 'your-mongodb-uri' with your actual MongoDB URI
// Your application logic goes here...

// Rest of the code remains unchanged

// Your application logic goes here...

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
app.use(bodyParser.json());

// Define Mongoose schemas and models
const dailyMilkSchema = new mongoose.Schema({
    cowId: String,
    milkAmount: Number,
    date: Date,
});

const diseaseTreatmentSchema = new mongoose.Schema({
    cowId: String,
    treatmentInfo: String,
    date: Date,
});

const animalMatingSchema = new mongoose.Schema({
    cowId: String,
    matingDate: Date,
    date: Date,
});

const animalInfoSchema = new mongoose.Schema({
    cowId: String,
    animalPrice: Number,
    date: Date,
});

const expensesSchema = new mongoose.Schema({
    expenseType: String,
    expenseAmount: Number,
    date: Date,
});

const DailyMilk = mongoose.model('DailyMilk', dailyMilkSchema);
const DiseaseTreatment = mongoose.model('DiseaseTreatment', diseaseTreatmentSchema);
const AnimalMating = mongoose.model('AnimalMating', animalMatingSchema);
const AnimalInfo = mongoose.model('AnimalInfo', animalInfoSchema);
const Expenses = mongoose.model('Expenses', expensesSchema);

// Endpoint to handle recording daily milk production
app.post('/record-milk', async (req, res) => {
    try {
        const { cowId, milkAmount } = req.body;
        const record = new DailyMilk({ cowId, milkAmount, date: new Date() });
        await record.save();
        res.json({ success: true, message: 'Milk recorded successfully' });
    } catch (error) {
        console.error('Error recording milk:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Endpoint to handle recording disease treatment
app.post('/record-treatment', async (req, res) => {
    try {
        const { cowId, treatmentInfo } = req.body;
        const record = new DiseaseTreatment({ cowId, treatmentInfo, date: new Date() });
        await record.save();
        res.json({ success: true, message: 'Treatment recorded successfully' });
    } catch (error) {
        console.error('Error recording treatment:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Endpoint to handle recording animal mating
app.post('/record-mating', async (req, res) => {
    try {
        const { cowId, matingDate } = req.body;
        const record = new AnimalMating({ cowId, matingDate, date: new Date() });
        await record.save();
        res.json({ success: true, message: 'Mating recorded successfully' });
    } catch (error) {
        console.error('Error recording mating:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Endpoint to handle recording animal information
app.post('/record-animal-info', async (req, res) => {
    try {
        const { cowId, animalPrice } = req.body;
        const record = new AnimalInfo({ cowId, animalPrice, date: new Date() });
        await record.save();
        res.json({ success: true, message: 'Animal information recorded successfully' });
    } catch (error) {
        console.error('Error recording animal information:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Endpoint to handle recording expenses
app.post('/record-expenses', async (req, res) => {
    try {
        const { expenseType, expenseAmount } = req.body;
        const record = new Expenses({ expenseType, expenseAmount, date: new Date() });
        await record.save();
        res.json({ success: true, message: 'Expenses recorded successfully' });
    } catch (error) {
        console.error('Error recording expenses:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Add this endpoint to your server.js file
const Excel = require('exceljs');  // Import exceljs library

// ... (other imports and configurations)

// Add this endpoint to your server.js file
app.get('/download-report', async (req, res) => {
    try {
        // Fetch necessary data from the MongoDB collections
        const milkRecords = await DailyMilk.find();
        const diseaseRecords = await DiseaseTreatment.find();
        const matingRecords = await AnimalMating.find();
        const animalRecords = await AnimalInfo.find();
        const expensesRecords = await Expenses.find();

        // Create a new Excel workbook and add a worksheet
        const workbook = new Excel.Workbook();
        const worksheet = workbook.addWorksheet('Report');

        // Add headers to the worksheet
        worksheet.addRow(['Date', 'Milk Amount']);
        // Add data to the worksheet
        milkRecords.forEach(record => worksheet.addRow([record.date, record.milkAmount]));

        // Add more sheets and data based on your requirements
        // ...

        // Set response headers for downloading the Excel file
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');

        // Pipe the Excel workbook to the response
        await workbook.xlsx.write(res);
        res.end();

    } catch (error) {
        console.error('Error generating report:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
*/

const mongoose = require('mongoose');
const express = require('express');
const { MongoClient } = require("mongodb");
const bodyParser = require('body-parser');
const app = express();

// Rest of the code...

const port = process.env.PORT || 3000;

// MongoDB Atlas connection string
const username = 'zuhairaslamdairies';
const password = '8699051zuhair';
const clusterName = 'dairyfarm';
const dbName = 'dairyFarm';

const uri = `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Mongoose connection options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    // Remove the usefindandmodify option
  };
  

// Function to connect with retry
const connectWithRetry = () => {
  mongoose.connect(uri, options)
    .then(() => {
      console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB Atlas:', error);
      console.log('Retrying connection in 5 seconds...');
      setTimeout(connectWithRetry, 5000);
    });
};

// Connect to MongoDB Atlas
connectWithRetry();

// Optional: listen for Mongoose connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Rest of the code remains unchanged...

// Define Mongoose schemas and models
// ... (your existing schema and model definitions)

// Endpoint to handle recording daily milk production
// ... (your existing endpoint definitions)

// Endpoint to handle downloading the report
// ... (your existing endpoint for downloading the report)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
