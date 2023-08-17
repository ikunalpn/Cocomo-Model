document.addEventListener("DOMContentLoaded", function () {
    const modelSelection = document.getElementById("model-selection");
    const inputSection = document.getElementById("input-section");
    const resultSection = document.getElementById("result-section");
    const calculateButton = document.getElementById("calculate-button");

    calculateButton.addEventListener("click", calculateEstimation);

    function calculateEstimation() {
        const selectedModel = modelSelection.querySelector("input[name='model']:checked").value;
        const projectSize = parseFloat(document.getElementById("project-size").value);

        let effort = 0;
        let cost = 0;

        // COCOMO coefficients (simplified for demonstration)
        const aBasic = 2.4;
        const bBasic = 1.05;
        const aIntermediate = 3.0;
        const bIntermediate = 1.12;
        const aAdvanced = 3.6;
        const bAdvanced = 1.20;

        // Effort Adjustment Factor (simplified)
        const eaf = 1.0;

        // Cost per person-month (simplified)
        const costPerPersonMonth = 8000; // Placeholder value

        // Implement COCOMO calculations based on the selected model
        if (selectedModel === "basic") {
            effort = aBasic * Math.pow(projectSize, bBasic);
        } else if (selectedModel === "intermediate") {
            effort = (aIntermediate * Math.pow(projectSize, bIntermediate)) * eaf;
        } else if (selectedModel === "advanced") {
            effort = (aAdvanced * Math.pow(projectSize, bAdvanced)) * eaf;
        }

        // Calculate cost based on effort
        cost = effort * costPerPersonMonth;

        // Update the result section with the calculated effort and cost
        resultSection.innerHTML = `
            <p>Estimated Effort: ${effort.toFixed(2)} person-months</p>
            <p>Estimated Cost: $${cost.toFixed(2)}</p>
        `;
        resultSection.style.display = "block";
    }
});
