import {Student} from './ImportCA2.mjs';
import readline from 'readline';
const r1 = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

r1.question('Name:', (input1) => {
    r1.question('Matric Number:', (input2) => {
        r1.question('Major:', (input3) => {

            let student = new Student(input1, input2, input3);

           // Students.name = input1;
            //Students.matricNo = input2;
           // Students.major = input3;
           console.log(student);
            r1.close();
            
        });
    });
});
