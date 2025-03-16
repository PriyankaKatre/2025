// script.js
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  let currentStepIndex = 0;

  const updateStep = (index) => {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });
  };

  // Move to next step
  const goToStep = (index) => {
    currentStepIndex = index;
    updateStep(currentStepIndex);
  };

  // Start Booking Button
  document.getElementById("startBooking").addEventListener("click", () => {
    goToStep(1); // Service Selection
  });

  // Service Selection
  document.querySelectorAll("#services li").forEach((service) => {
    service.addEventListener("click", (e) => {
      localStorage.setItem("service", e.target.dataset.service);
      goToStep(2); // Date & Time Selection
    });
  });

  // Date & Time Selection
  document.getElementById("datePicker").addEventListener("change", (e) => {
    const selectedDate = e.target.value;
    const timeSlots = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"];
    const timeSlotsContainer = document.getElementById("timeSlots");

    timeSlotsContainer.innerHTML = "";
    timeSlots.forEach((time) => {
      const btn = document.createElement("button");
      btn.textContent = time;
      btn.addEventListener("click", () => {
        localStorage.setItem("date", selectedDate);
        localStorage.setItem("time", time);
        goToStep(3); // Personal Details
      });
      timeSlotsContainer.appendChild(btn);
    });
  });

  // Personal Details
  document.getElementById("detailsForm").addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
    goToStep(4); // Review & Confirm
  });

  // Review & Confirm
  document.getElementById("reviewConfirm").addEventListener("click", () => {
    const reviewDetails = `
            Service: ${localStorage.getItem("service")}<br>
            Date: ${localStorage.getItem("date")}<br>
            Time: ${localStorage.getItem("time")}<br>
            Name: ${localStorage.getItem("name")}<br>
            Email: ${localStorage.getItem("email")}<br>
            Phone: ${localStorage.getItem("phone")}
        `;
    document.getElementById("reviewDetails").innerHTML = reviewDetails;
    goToStep(4); // Confirmation
  });

  // Confirm Booking
  document.getElementById("confirmBooking").addEventListener("click", () => {
    const confirmationDetails = `
            Your booking is confirmed!<br>
            Service: ${localStorage.getItem("service")}<br>
            Date: ${localStorage.getItem("date")}<br>
            Time: ${localStorage.getItem("time")}
        `;
    document.getElementById("confirmationDetails").innerHTML =
      confirmationDetails;
    goToStep(5); // Final Confirmation
  });

  // Initialize the first step
  updateStep(currentStepIndex);
});
