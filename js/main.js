

let option = 1;

while (option !== 0 ) {

    let option = parseInt(prompt("Enter 1 to calculate the area of a square\n 2 to calculate the area of a triangle\n 3 to calculate the area of a circle\n 0 to quit."));
    if (option === 1) {
        let side = parseFloat(prompt("Enter the length of a side of the square:"));
        if (!validateInput(side)) {
            alert("Invalid input, please enter a number.");
            continue;
        }
        let area = side * side;
        alert("The area of the square is " + area);
    }
    else if (option === 2) {
        let base = parseFloat(prompt("Enter the length of the base of the triangle:"));
        if (!validateInput(base)) {
            alert("Invalid input, please enter a number.");
            continue;
        }
        let height = parseFloat(prompt("Enter the height of the triangle:"));
        let area = (base * height) / 2;
        if (!validateInput(height)) {
            alert("Invalid input, please enter a number.");
            continue;
        }
        alert("The area of the triangle is " + area);
    }
    else if (option === 3) {
        let radius = parseFloat(prompt("Enter the radius of the circle:"));
        if (!validateInput(radius)) {
            alert("Invalid input, please enter a number.");
            continue;
        }
        let area = Math.PI * radius * radius;
        alert("The area of the circle is " + area);
    }
    else if (option === 0) {
        alert("Goodbye!");
        break;
    }
    else {
        alert("Invalid option");
    }

}

function validateInput(input) {
    if (input === "" || isNaN(input)) {
        return false;
    }
    return true;
}