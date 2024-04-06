let marks1 = Number(prompt(`Enter your Physics marks`));
let marks2 = Number(prompt(`Enter your Chemistry marks`)); 
let marks3 = Number(prompt(`Enter your Biology marks`)); 
let marks4 = Number(prompt(`Enter your Mathematics marks`)); 
let marks5 = Number(prompt(`Enter your Computer marks`)); 

let totalMarks = marks1 + marks2 + marks3 +  marks4 + marks5;

let percentage = (totalMarks/500)*100;

if (percentage >= 90) {
    alert(`Percentage: ${percentage} Grade: A`)
    console.log(`Percentage: ${percentage} Grade: A`)

}
else if (percentage >= 80) {
    alert(`Percentage: ${percentage} Grade: B`)
    console.log(`Percentage: ${percentage} Grade: B`)

}
else if (percentage >= 70){
    alert(`Percentage: ${percentage} Grade: C`)
    console.log(`Percentage: ${percentage} Grade: C`)     

}
else if (percentage >= 60){
    alert(`Percentage: ${percentage} Grade: D`)
        console.log(`Percentage: ${percentage} Grade: D`)
}
else if (percentage >= 40){
    alert(`Percentage: ${percentage} Grade: E`)
    console.log(`Percentage: ${percentage} Grade: E`)
}
else{
    alert(`Percentage: ${percentage} Grade: F`)
    console.log(`Percentage: ${percentage} Grade: F`)
}
