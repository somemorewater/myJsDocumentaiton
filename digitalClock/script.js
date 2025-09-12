function time() {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    // console.log(`${hour}:${minute}:${second}`);
    document.querySelector(
      "#digitalClock"
    ).innerHTML = `${hour}:${minute}:${second}`;
}
let clock = setInterval(time, 1000)
console.log(clock)