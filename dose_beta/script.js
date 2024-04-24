const prescriptionList = document.getElementById('prescription-list');
const medicationScheduleList = document.getElementById('medication-schedule-list');
const addPrescriptionBtn = document.getElementById('add-prescription-btn');

// fetch prescriptions from API
fetch('/api/prescriptions')
    .then(response => response.json())
    .then(prescriptions => {
        prescriptions.forEach(prescription => {
            const prescriptionListItem = document.createElement('li');
            prescriptionListItem.textContent = prescription.medicationName;
            prescriptionList.appendChild(prescriptionListItem);
        });
    });

// fetch medication schedule from API
fetch('/api/medication-schedule')
    .then(response => response.json())
    .then(medicationSchedule => {
        medicationSchedule.forEach(schedule => {
            const medicationScheduleListItem = document.createElement('li');
            medicationScheduleListItem.textContent = schedule.doseDate;
            medicationScheduleList.appendChild(medicationScheduleListItem);
        });
    });

// add event listener to add prescription button
addPrescriptionBtn.addEventListener('click', () => {
    // create a new prescription form
    const prescriptionForm = document.createElement('form');
    prescriptionForm.innerHTML = `
        <label for="medication-name">Medication Name:</label>
        <input type="text" id="medication-name" name="medication-name"><br><br>
        <label for="dosage">Dosage:</label>
        <input type="text" id="dosage" name="dosage"><br><br>
        <label for="frequency">Frequency:</label>
       
