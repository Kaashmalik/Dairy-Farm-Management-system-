const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Replace 'your-mongodb-uri' with your actual MongoDB URI
const uri = 'mongodb+srv://zuhairaslamdairies:8699051zuhair@cluster0.pma6pq8.mongodb.net/dairy-farm-app?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
connection.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

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
