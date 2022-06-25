/* 
Create a program with the name classloop01.js


create a variable that contains the names of the following classmates (first names only)

Samuel
Hannah
Grethel
Ben
Tanya
Art
Derrel
Camron


Create an output so that the second letter of each classmate's name appears on a line by itself.  Do not output the entire array to the terminal.   
Hint: use a loop */
classmates = ["Samuel", "Hannah", "Grethel", "Ben", "Tanya", "Art", "Derrel", "Camron"]
 for (i = 0; i < classmates.length; i++) {
    console.log(classmates[i][1])
 }


// The for loop and nexted for loops (and its 4 parts and execution order) is the most important thing to understand, practice and master when you first learn computer programming. READ THAT AGAIN.
// for (iterator variable(a); loop condition(b); auto increment(d)) {
    // executes your lines of code(c)
// }

// .length begins counting using Element position (starts with 1)
// index operations begin indexing at [0]