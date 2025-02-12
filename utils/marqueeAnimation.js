const tech = ["Javascript","ReactJS", "NodeJS", "MERN", "PHP", "Laravel", "ASP.NET", "C#",".NET", "C","CPP"];

function marqueeInit () {
    const marqueeContainer = document.getElementById('marquee');

    tech.forEach(el => {        
        const item = document.createElement('div');
        item.className = 'marquee-item';
        item.textContent = el;

        marqueeContainer.appendChild(item);
    });
    tech.forEach(el => {
        const item = document.createElement('div');
        item.className = 'marquee-item';
        item.textContent = el;

        marqueeContainer.appendChild(item);
    });
    tech.forEach(el => {
        const item = document.createElement('div');
        item.className = 'marquee-item';
        item.textContent = el;

        marqueeContainer.appendChild(item);
    });

}
marqueeInit();