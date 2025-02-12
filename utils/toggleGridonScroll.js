
function updateMaskOnScroll() {
    const scrollY = window.scrollY; 
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight; 
    const scrollProgress = scrollY / totalHeight; 


    const maskValue = `linear-gradient(${-20 + scrollProgress * 50}deg, transparent ${40 + scrollProgress * 40}%, white)`;


    document.documentElement.style.setProperty('--mask-gradient', maskValue);
}


window.addEventListener('scroll', updateMaskOnScroll);

updateMaskOnScroll();