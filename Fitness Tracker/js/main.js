$(document).ready(function () {
    // Step counter functionality
    let stepCount = 0;
    $("#add-step").click(function () {
        stepCount += 10;
        $("#stepCount").text(stepCount + " Steps");
        $("#caloriesBurned").text("Calories Burned: " + FitnessLibrary.calculateCaloriesFromWeightAndDuration(stepCount) + " kcal");
    });

    // Calories burned calculator functionality

    $("#calculateCalories").click(function () {
        // Get weight and duration input values
        let weight1 = parseFloat($("#weight1").val());  // Weight in kg
        let duration = parseFloat($("#duration").val());  // Duration in minutes

        // Check if weight and duration are valid numbers and greater than 0
        if (isNaN(weight1) || weight1 <= 0 || isNaN(duration) || duration <= 0) {
            $("#caloriesResult").text("Please enter valid values for weight and duration.");
            return;
        }

        // Use the calculateCaloriesFromWeightAndDuration function to calculate calories burned
        let caloriesBurned = FitnessLibrary.calculateCaloriesFromWeightAndDuration(weight1, duration);

        // Display the calories burned
        $("#caloriesResult").text("Calories Burned: " + caloriesBurned + " kcal");

        // Assuming 0.04 calories burned per step (you can adjust this based on your calculation)
        const caloriesPerStep = 0.04;

        // Calculate step count from calories burned
        let stepCount = Math.round(caloriesBurned / caloriesPerStep);

        // Display the step count
        $("#stepCountResult").text("Step Count: " + stepCount + " steps");
    });



    // BMI calculator functionality
    $("#calculateBMI").click(function () {
        let weight = parseFloat($("#weight").val());
        let height = parseFloat($("#height").val());
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            $("#bmiResult").text("Please enter valid weight and height.");
            return;
        }
        let bmi = FitnessLibrary.calculateBMI(weight, height);
        $("#bmiResult").text("Your BMI: " + bmi);
    });

    // BPM calculator functionality
    $("#calculateBPM").click(function () {
        let age = parseInt($("#age").val());
        let restingHR = parseInt($("#restingHR").val());
        if (isNaN(age) || isNaN(restingHR) || age <= 0 || restingHR <= 0) {
            $("#bpmResult").text("Please enter valid age and resting heart rate.");
            return;
        }
        let bpm = FitnessLibrary.calculateBPM(age, restingHR);
        $("#bpmResult").text("Your BPM: " + bpm);
    });


    // Contact Form Validation & Local Storage
    $("#contactForm").submit(function (event) {
        event.preventDefault(); // Prevent form submission

        // Get values from form
        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();

        // Simple validation: Ensure all fields are filled
        if (!name || !email || !message) {
            $("#contactResponse").text("All fields are required.");
            $("#contactResponse").css("color", "red");
            return; // Stop the form from being submitted if validation fails
        }

        // If validation passes, store data in localStorage
        const contactData = {
            name: name,
            email: email,
            message: message,
        };

        let storedData = JSON.parse(localStorage.getItem("contactMessages")) || [];
        storedData.push(contactData);

        localStorage.setItem("contactMessages", JSON.stringify(storedData));

        // Show success message and clear the form
        $("#contactResponse").text("Message sent successfully!");
        $("#contactResponse").css("color", "green");

        // Reset form fields
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
    });

    $('.gallery img').hover(function () {
        $(this).css('transform', 'scale(1.1)');
    }, function () {
        $(this).css('transform', 'scale(1)');
    });
});
