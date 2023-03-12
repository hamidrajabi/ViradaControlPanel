const $ = document;
const radioInputs = $.querySelectorAll(".radio-input")

let preForm = {
    1: null,
    2: null,
    3: null,
};

// let form = null

radioInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
        const inputSelected = event.target;
        // form = $.querySelector(`[data-form='${inputSelected.dataset.inputId}']`)

        console.log();
        // if(inputSelected.dataset.inputId === form.dataset.form){
            if(preForm[inputSelected.id] !== null && preForm[inputSelected.id].dataset.input !== inputSelected.id){
                preForm.classList.add("hidden")
            }
                
            $.querySelector(`[data-input='${inputSelected.id}']`).classList.remove('hidden')
            preForm[inputSelected.id] = $.querySelector(`[data-input='${inputSelected.id}']`)
        // } else {

        // }
            
    })
})