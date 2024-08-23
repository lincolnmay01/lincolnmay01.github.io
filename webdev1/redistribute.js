function redistributeImages() {
    const container = document.querySelector('.container');
    const columns = document.querySelectorAll('.collumn');
    const allImages = Array.from(container.querySelectorAll('img'));

    if (window.innerWidth < 1100) {
        columns.forEach(column => column.innerHTML = ''); 

        allImages.forEach((img, index) => {
            columns[index % 2].appendChild(img);
        });

        columns[2].style.display = 'none';
    } else {
        columns.forEach(column => column.innerHTML = '');
        allImages.forEach((img, index) => {
            columns[index % 3].appendChild(img);
        });

        columns[2].style.display = 'flex';
    }
}

redistributeImages();


window.addEventListener('resize', redistributeImages);
