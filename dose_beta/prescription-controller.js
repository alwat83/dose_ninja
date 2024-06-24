const express = require('express');
const router = express.Router();
const Prescription = require('./prescription-model');
const MedicationSchedule = require('./medication-schedule-model');

router.get('/prescriptions', async (req, res) => {
  const userId = req.user.id;
  const prescriptions = await Prescription.getAllPrescriptions(userId);
  res.json(prescriptions);
});

router.get('/prescriptions/:id', async (req, res) => {
  const id = req.params.id;
  const prescription = await Prescription.getPrescription(id);
  res.json(prescription);
});

router.post('/prescriptions', async (req, res) => {
  const userId = req.user.id;
  const { medicationName, dosage, frequency, startDate, endDate, refillReminder } = req.body;
  const prescription = await Prescription.createPrescription(userId, medicationName, dosage, frequency, startDate, endDate
