const button = document.querySelector('.button');
const time = document.querySelector('.time');
const input =  document.querySelector('.cityInput');

window.addEventListener('load', function (e) {
    button.classList.add('active');
});

window.addEventListener('load', function (e) {
    time.classList.add('active');
});

window.addEventListener('load', function (e) {
    input.classList.add('active');
});

button.addEventListener('click', function (e) {
    const xhttp = new XMLHttpRequest();


    xhttp.responseType = 'json'

    xhttp.onload = function () {
        let timeFromServer = this.response.datetime;
        let currentTime = timeFromServer.replaceAll('-', ' ') + ` ${input.value}`;
        console.log(currentTime)
        time.insertAdjacentHTML('afterbegin', `
          <div class="time-content">${currentTime}</div>
          <div class="time-line"></div>
       `)
        console.log(this.response);
    }


    xhttp.open("GET", `https://timezone.abstractapi.com/v1/current_time/?api_key=33bdd36c74e44375842f0b7e7d997375&location=${input.value}`);

    xhttp.send();
});