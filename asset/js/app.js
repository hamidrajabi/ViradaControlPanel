const $ = document;
const radioInputs = $.querySelectorAll(".radio-input")

// container previous forms inputs
let preForm = {
    1: null,
    2: null,
    3: null,
};


radioInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
        const inputSelected = event.target;
        const inputId = inputSelected.dataset.inputId;

        if(event.target.value){
            const inputId = event.target.dataset.inputId;
            $.querySelector(`[data-button-id='${inputId}']`).type="submit";
            $.querySelector(`[data-button-id='${inputId}']`).classList.remove("cursor-not-allowed")
            $.querySelector(`[data-button-id='${inputId}']`).classList.remove("opacity-50")
        }

        if(preForm[inputId] !== null && preForm[inputId].id !== inputSelected.id){
            // hidden previous form inputs 
            preForm[inputId].classList.add("hidden")

            if(inputSelected.id.includes("temperature")){
                // null inputs time
                $.querySelector(`#turn-on-${inputId}`).value = null;
                $.querySelector(`#turn-off-${inputId}`).value = null;


            } else {
                // null inputs temperature
                $.querySelector(`#turn-on-temperature-${inputId}`).value = null;
                $.querySelector(`#turn-off-temperature-${inputId}`).value = null;
            }
        }
        
        // show form inputs
        $.querySelector(`[data-input='${inputSelected.id}']`).classList.remove('hidden')

        preForm[inputId] = $.querySelector(`[data-input='${inputSelected.id}']`)
    })
})