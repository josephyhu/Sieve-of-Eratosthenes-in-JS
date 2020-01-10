let n = parseInt(prompt("Enter an integer greater than 1"));
let isPrime = [];
let primes = [];

while (n < 2 || !Number.isInteger(n)) {
  n = parseInt(prompt("Enter an integer greater than 1"));
}

for (let i = 2; i <= n; i += 1) {
  isPrime.push(true);
}

for (let i = 2; i <= Math.sqrt(n); i += 1) {
  if (isPrime[i - 2] === true) {
    for (let j = i ** 2; j <= n; j += i) {
      isPrime[j - 2] = false;
    }
  }
}

for (let i in isPrime) {
  if (isPrime[i] === true) {
    primes.push(parseInt(i) + 2);
  }
}

document.querySelector('#primes').innerHTML = primes.join(', ');