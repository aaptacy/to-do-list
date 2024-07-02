{
    const calculateExchange = (amount, exchangeRate) => {
        return calculatedValue = (amount * exchangeRate).toFixed(2);
    }

    const innerText = (amount, calculatedValue) => {
        const selectElement = document.querySelector(".js-form-select");
        const selectedOption = selectElement.selectedOptions[0];
        const nameAttribute = selectedOption.getAttribute("name");
        const output = document.querySelector(".form__output");
        return output.innerHTML = `${amount} ${nameAttribute} = ${calculatedValue} PLN`;
    }

    const resultPreparation = (event) => {
        event.preventDefault();

        const exchangeRate = document.querySelector(".js-form-select").value;
        const amount = document.querySelector(".js-form-input").value;
        const calculatedResult = calculateExchange(amount, exchangeRate);

        innerText(amount, calculatedResult);

    };


    const result = () => {
        const form = document.querySelector(".form");

        form.addEventListener("submit", resultPreparation);
    }

    result();
}
