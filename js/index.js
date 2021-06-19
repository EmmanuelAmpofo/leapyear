
finder = () => {
    let passvalue = document.getElementById('year').value
    if (((passvalue % 4 === 0 ) && (passvalue % 100 !== 0)) || (passvalue % 400 === 0)){
        document.getElementById('output').innerHTML = passvalue+ " is a Leap year"
        document.getElementById('year').value = ""
    }
    else{
        document.getElementById('output').innerHTML = passvalue+ " is not a Leap year"
        document.getElementById('year').value = ""
    }
}