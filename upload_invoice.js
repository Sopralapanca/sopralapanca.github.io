// Create the file input element
const fileInput = document.createElement('input');
fileInput.setAttribute('type', 'file');
fileInput.setAttribute('id', 'csvFileInput');

// Create the load button
const loadButton = document.createElement('button');
loadButton.textContent = 'Load CSV';
loadButton.addEventListener('click', handleFile);

// Get the parent element where you want to append the HTML code
const parentElement = document.getElementById('parentElementId'); // Replace 'parentElementId' with the actual ID of the parent element

// Append the file input element and load button to the parent element
parentElement.appendChild(fileInput);
parentElement.appendChild(loadButton);
function handleFile() {
    const file = fileInput.files[0];

    const reader = new FileReader();
    reader.onload = async function (e) {
        const csvData = e.target.result;
        // Assuming you have the CSV data stored in a variable called 'csvData'
        const rows = csvData.split('\n'); // Split the CSV into rows

        // Loop through each row (excluding the header row)
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].split(','); // Split the row into columns

            // Click the 'Add Row' button
            const addButton = document.getElementById('addRow'); // Replace 'addRow' with the actual ID or selector of the button
            addButton.click();

            // Wait for the row to be added (you may need to adjust the time delay as needed)
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Fill the fields for the newly added row
            const rowIndex = i - 1;
            const dateInput = document.querySelector(`input[name="entries[${rowIndex}].date"]`);
            const typeSelect = document.querySelector(`select[name="entries[${rowIndex}].type"]`);
            const projectSelect = document.querySelector(`select[name="entries[${rowIndex}].projectId"]`);
            const rateSelect = document.querySelector(`select[name="entries[${rowIndex}].rateId"]`);
            const hoursSelect = document.querySelector(`select[name="entries[${rowIndex}].hours"]`);
            const minutesSelect = document.querySelector(`select[name="entries[${rowIndex}].minutes"]`);

            dateInput.value = row[0]; // Set the date from the CSV column
            // Set other fields accordingly using row data from the CSV
            typeSelect.value = row[1];
            projectSelect.value = row[2];
            rateSelect.value = row[3];
            hoursSelect.value = row[4];
            minutesSelect.value = row[5];
        }
    };
    reader.readAsText(file);
}

