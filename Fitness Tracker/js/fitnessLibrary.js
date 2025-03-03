const FitnessLibrary = {
    calculateBMI: function (weight, height) {
        return (weight / (height * height)).toFixed(2);
    },

    calculateBPM: function (age, restingHR) {
        return Math.round(220 - age - restingHR);
    },

    calculateCaloriesFromWeightAndDuration: function (weight1, duration) {
        return Math.round((weight1 * duration) * 0.07);
    }
};
