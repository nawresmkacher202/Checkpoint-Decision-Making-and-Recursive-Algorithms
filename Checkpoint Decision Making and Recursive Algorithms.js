//Ticket Pricing:
const ticketPrice = (age) => {
    if (age <= 12) {
      return "$10"
    } else if (age >= 13 && age <= 17) {
      return "$15"
    } else {
      return "$20"
    }
  }
  const age = parseInt(prompt("Enter your age:"))
  const price = ticketPrice(age)
  alert(`The price of the movie ticket is ${price}.`)

// Weather Clothing Adviser;
const clothingAdvice = (temperature, isRaining) => {
    if (temperature < 50) {
      return "Wear a warm coat."
    } else if (temperature >= 50 && temperature <= 70) {
      return isRaining ? "Carry an umbrella and wear a light jacket." : "Wear a light jacket."
    } else {
      return isRaining ? "Wear a raincoat." : "Wear light clothing, it's warm."
    }
  }
const temp = parseInt(prompt("Enter the current temperature:"))
const rain = prompt("Is it raining? (yes/no):").toLowerCase() === "yes"
const advice = clothingAdvice(temp, rain)
alert(advice)
  
//Fibonacci Sequence
const fibonacci = (n) => {
    if (n <= 1) {
      return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
  
  const n = parseInt(prompt("Enter the Fibonacci position (n):"))
  alert(`The ${n}th Fibonacci number is ${fibonacci(n)}.`)
  












  