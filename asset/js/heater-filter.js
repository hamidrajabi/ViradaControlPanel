const radioInputs = document.querySelectorAll(".radio-input")// 
const checkboxs = document.querySelectorAll(".checkbox")
const buttons = document.querySelectorAll(".submit-form")

// container previous forms inputs
let preForm = {1: null, 2: null};

// function for switch forms
function switchForm(event){
    const inputSelected = event.target ?? event;
    const inputId = inputSelected.dataset.inputId;

    if(preForm[inputId] !== null && preForm[inputId].id !== inputSelected.id){
        // hidden previous form inputs 
        preForm[inputId].classList.add("hidden")
    }
    
    // show form inputs
    document.querySelector(`[data-input='${inputSelected.id}']`).classList.remove('hidden')

    // add last radio input selected
    preForm[inputId] = document.querySelector(`[data-input='${inputSelected.id}']`)
}

let preState = null
// fucntion for fetch data
const fetchData = async () => {
    const apiData = {
        switchName: {outlet_id: event.target.id, state:event.target.value},
        radioInput: "time-2",
        inputData: {1: "15:03", 2:"10:11"},
    }
    // await fetch("https://viradaco.ir/get/data-switch")
    // .then(response => response.json())
    // .then(data => apiData=data)

    // selected previous radio input
    const input = document.querySelector(`#${apiData.radioInput}`);
    input.click();// click input radio selected
    switchForm(input)// show form with radio input selected

    // set previous data
    document.querySelector(`#turn-on-${apiData.radioInput}`).value = apiData.inputData[1];
    document.querySelector(`#turn-off-${apiData.radioInput}`).value = apiData.inputData[2];

    // turn on switch selected
    if(apiData.switchName)
    document.querySelector(`#${apiData.switchName}`).click()
    document.querySelector(`#${apiData.switchName}`).value = 1;
}

// events

radioInputs.forEach((input) => {
    input.addEventListener("change", switchForm)
})

// send switch data clicked
checkboxs.forEach((checkbox) => {
    checkbox.addEventListener("change", async (event) => {
        const value = +event.target.value;
        if(value){
            event.target.value = 0
        } else {
            event.target.value = 1
        }

        // await fetchData("https://viradaco.ir/get/data-switch", {
        //     methods: "POST",
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8'
        //     },
        //     body: JSON.stringify({outlet_id: event.target.id, state:event.target.value})
        // })
    })
})

buttons.forEach((button) => {
    button.addEventListener("click", async () => {

        if(preForm[button.id]!== null){
            let dataInputs = {
                id: null,
                turnOn: null,
                turnOff: null,
                type: null
            }
            
            function setNullValue(selector, type){
                document.querySelector(`#turn-on-${type}-${selector}`).value= null;
                document.querySelector(`#turn-off-${type}-${selector}`).value= null;
            }

            function setTurnOnTurnOff(id, type){
                dataInputs.type = type;
                dataInputs.id = id;
                dataInputs.turnOn = document.querySelector(`#turn-on-${type}-${id}`).value;
                dataInputs.turnOff = document.querySelector(`#turn-off-${type}-${id}`).value;
            }

            if(preForm[button.id].dataset.input.includes("time")){
                setNullValue(button.id, "temperature");
                setTurnOnTurnOff(button.id, "time")
            } else {
                setNullValue(button.id, "time");
                setTurnOnTurnOff(button.id, "temperature")
            }

            // await fetchData("https://viradaco.ir/get/data-switch", {
            //     methods: "POST",
            //     headers: {
            //         'Content-type': 'application/json; charset=UTF-8'
            //     },
            //     body: JSON.stringify(dataInputs)
            // })
        }
    })
})


setInterval(fetchData, 1000)