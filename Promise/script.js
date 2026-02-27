const resolveBtn = document.querySelector(".btn");
const rejectBtn = document.querySelector(".btn2");
const p = new Promise((res, rej) => {
    resolveBtn.addEventListener("click", () => {
        res("Promise resolved.")
    })
    rejectBtn.addEventListener("click", () => {
        rej("Promise resolved.")
    })
})

p.then((data) => { console.log(data) }).catch(() => { console.log("CATCH") })