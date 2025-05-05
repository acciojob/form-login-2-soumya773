 document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const emailId = document.getElementById('emailId').value;

      // Alert with expected format
      alert(
        `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`
      );
    });
  });