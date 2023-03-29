const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;
    //console.log(numberTemp);

    const tempSelected = document.getElementById('tempDiff');
    const valueTemp =tempDiff.options[tempSelected.selectedIndex].value;
    //console.log(valueTemp);

    const celToFah = (cel) => {
        let fahrenheit = (cel* 9/5) + 32 ;
        return fahrenheit;
    }

    const fahToCel = (fahr) => {
        let celsius = (fahr - 32)* 5/9;
        return celsius;
    }
    
    if (valueTemp == 'cel'){
        //result = celToFah(numberTemp);
        document.getElementById('result').innerHTML= celToFah(inputTemp) + "&#176;Fahrenheit";
    }
    else{
        //result = fahToCel(numberTemp);
        document.getElementById('result').innerHTML= fahToCel(inputTemp) + "&#176; Celsius";
    }
}
