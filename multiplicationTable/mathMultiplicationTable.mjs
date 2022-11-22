let multiplication = [];
const numvalue = 11;
for (let i = 0; i < numvalue; i++) {
    let temporay = [];
    for (let j = 0; j < numvalue; j++) {
        temporay.push(i*j);
        
    }
    multiplication.push(temporay)
}
console.table(multiplication)