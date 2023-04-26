let favNum = 2;
let URL = "http://numbersapi.com";

// 1.

$.getJSON(`${URL}/${favNum}?json`).then(data => {
    console.log(data);
});

// 2.

let favNums = [2, 18, 29];

$.getJSON(`${URL}/${favNums}?json`).then(data => {
    console.log(data)
})

// 3.

Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${URL}/${favNum}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});