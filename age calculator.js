function calculateAge() {
  const dobInput = document.getElementById("dob");
  const resultDiv = document.getElementById("result");
  const dob = new Date(dobInput.value);
  const today = new Date();

  if (!dobInput.value) {
    resultDiv.textContent = "Please select a valid date!";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.textContent = `You are ${years} years, 
  ${months} months, 
  and ${days} days old.`;
}
