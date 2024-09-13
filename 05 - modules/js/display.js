function displayRandom(text){
    const hue = Math.round( Math.random()*360 );
    const size = Math.round(Math.random()*32)+12;
    const p = document.createElement('p');
    p.style.fontSize = `${size}px`;
    p.style.color = `hsl(${hue}, 80%, 70%)`;
    p.innerText = text;
    document.body.append(p);
}

export {displayRandom};