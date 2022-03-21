// Programming Quantum Computers
//   by Eric Johnston, Nic Harrigan and Mercedes Gimeno-Segovia
//   O'Reilly Media

// To run this online, go to http://oreilly-qc.github.io?p=2-2

// QRNG - Quantum Random Number Generator

var array = [];
var max = 50; //max of random number
var total = 6; //quantity of random number
var qubits = 6; // using six unentangled qubits.
qc.reset(qubits); // allocate 2^n qubits

for(var i = 0; i < total; i++){
  // generate a set of non-duplicate number
   validNumber();
}

function validNumber(){
  var random = getNumber();
  if(random === 0 || random > max || array.includes(random)){
      validNumber();
  }else{
    array.push(random);
  }
}
function getNumber(){
  qc.write(0); // write the value zero
  qc.had(); // place them all into superposition of 0 and 1
  return qc.read();
}

qc.print('result: ' + array + '\n');
