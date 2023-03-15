let temp = 10;

const handleTemp = async () => {
    
    // await fetch("https://viradaco.ir/getapi/tanker")
    // .then(response => response.json())
    // .then(data => temp=data)


    function changeColorIndicator(){
        if(temp>50 && temp < 100){
            document.documentElement.style.setProperty('--range', '#eab308');
            document.documentElement.style.setProperty('--bg-range', '#fef08a');
        } else if(temp>=100) {
            document.documentElement.style.setProperty('--range', '#ef4444');
            document.documentElement.style.setProperty('--bg-range', '#fca5a5');
        } else {
            document.documentElement.style.setProperty('--range', '#22c55e');
            document.documentElement.style.setProperty('--bg-range', '#bbf7d0');
        }
    }

    function setIndicator(){
        return $("#handle1").roundSlider({
            sliderType: "min-range",
            editableTooltip: false,
            radius: 105,
            width: 16,
            max: 150,
            value: temp,
            handleSize: 0,
            handleShape: "square",
            circleShape: "pie",
            startAngle: 315,
            readOnly: true,
        });
    }

    setIndicator()
    changeColorIndicator()

}



handleTemp()
// setInterval(handleTemp, 1000)