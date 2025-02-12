const tech = ["Javascript","ReactJS", "NodeJS", "MERN", "PHP", "Laravel", "ASP.NET", "C#",".NET", "C","CPP", "MongoDB"];

function marqueeInit () {
    const marqueeContainer = document.getElementById('marquee');

    const appendMarquee = (el) => {
        const item = document.createElement('div');
        item.className ='marquee-item';
        const img = document.createElement('img');
        const h2 = document.createElement('p');
        let src = "";
        if(el.includes(".")) {
            src = `./assets/icons/${el.replace(".", "DOT")}.png`;
            console.log(src);
        }
        else if(el.includes("#")) {
            src = `./assets/icons/${el.replace("#", "Sharp")}.png`;
        }
        else
        {
            src = `./assets/icons/${el}.png`;
        }
        img.src = src;
        h2.textContent = el;
        item.appendChild(img);
        item.appendChild(h2);
        marqueeContainer.appendChild(item);
    }

    tech.forEach(el => {
        appendMarquee(el);
    });
    tech.forEach(el => {
        appendMarquee(el);
    });   
    tech.forEach(el => {
        appendMarquee(el);
    });

}
marqueeInit();