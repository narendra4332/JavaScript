const person = {
    name: "Narendra",
    email: "nare@gmail.com",
    age: 22,
    city: "Bhopal"
}
// console.log(Object.values(person))

// for (let key in person) {
//     console.log(key, ":", person[key])
// }

Object.entries(person).forEach(([key, values]) => {
    console.log(key + ":" + values)
})