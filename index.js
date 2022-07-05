const secHand = document.getElementById('second');
const minHand = document.getElementById('minute');
const hrHand = document.getElementById('hour');

const getDegrees = () => {
    const now = new Date();
    document.getElementById('currentTime').innerHTML = now;
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds*6);
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins*6));
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360);
    hrHand.style.transform = `rotate(${hoursDegrees}deg)`;
    // console.log(now);
}
setInterval(getDegrees, 1000);
