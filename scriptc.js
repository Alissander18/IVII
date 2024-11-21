// Crear la línea que sigue al cursor
document.addEventListener('mousemove', (e) => {
    const linea = document.querySelector('.linea-cursor');
    if (!linea) {
        const lineaElement = document.createElement('div');
        lineaElement.className = 'linea-cursor';
        document.body.appendChild(lineaElement);
    }
    const lineaElement = document.querySelector('.linea-cursor');
    lineaElement.style.left = e.pageX + 'px';
    lineaElement.style.top = e.pageY + 'px';
    lineaElement.style.transform = `translate(-50%, -50%) rotate(${Math.atan2(e.movementY, e.movementX)}rad)`; // Rota la línea según el movimiento
});
