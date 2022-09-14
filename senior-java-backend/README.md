# Java Backend Engineer Challenge (Senior)

In this challenge, we would like to get to know your personal understanding of modern architecture & design. Besides getting your hands dirty and having some fun, this challenge consists of:

- Analyzing the given show case
- Conceptualizing the solution architecture and design
- Implementing (partially) working software
  ​

Time: 4-6 hours. Please do not spend more than this on this challenge. If you do not complete it we will assess what you manage to achieve.

## Show Case

### Description

​
The task in this challenge is to implement a coffee machine API that takes orders from customers, and then translates the orders to command the magic drink maker. The coffee machine can serve coffee, tea and chocolate.
​
The product owner delivered to you the following stories:

- The magic drink maker should receive the correct instructions so it can produce my coffee
- I want to send instructions to the drink maker to specify if I want sugar and/or milk
- Once my coffee is ready, I want to get notified

### Guidelines

- Java or Kotlin as the JVM language of choice
- List with major technologies and description why they have been selected
- Follow cloud-native pillars: Modern design, Microservices, Containers, Automation
- Usage of messaging for coordination
- Developer readme on how to setup and run the application

### Assumptions

- To represent outgoing notifications, you may provide a mock component as you wish
- You are free how to represent incoming customer orders, domain model, commands etc.
- There can be many orders a day, but the magic drink maker is slow and needs time for drink production

## What we`re looking for

- Minimal, but still good enough conceptual documentation
- Wise decomposition of functionality into building blocks
- Proper use of language/framework idioms, patterns and principles ([Clean code](https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073/) and [architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164/))
- Usage of external libraries as needed

### Bonus

- Concept documentation using the [C4 model](https://c4model.com/)
- Automated base env setup to demo the application
- Reactive programming style and/or event first
