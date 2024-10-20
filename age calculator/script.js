document.addEventListener('DOMContentLoaded', function() {
    const ageForm = document.getElementById('age-form');
    const resultDiv = document.getElementById('result');

    // Function to calculate age
    function calculateAge(dob, currentDate) {
        const birthDate = new Date(dob);
        const current = new Date(currentDate);

        let ageYears = current.getFullYear() - birthDate.getFullYear();
        let ageMonths = current.getMonth() - birthDate.getMonth();
        let ageDays = current.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(current.getFullYear(), current.getMonth(), 0).getDate(); // Previous month's days
        }
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        return `${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    }

    // Handle form submission
    ageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const dob = document.getElementById('dob').value;
        const currentDate = document.getElementById('current-date').value;

        if (dob && currentDate) {
            const age = calculateAge(dob, currentDate);
            resultDiv.textContent = `You are ${age}`;
        } else {
            resultDiv.textContent = 'Please fill both dates.';
        }
    });
});
