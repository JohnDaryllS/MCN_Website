function showPopup(imageUrls) {
    const popup = document.getElementById('popup');
    const imagesContainer = document.getElementById('popup-images');

    imagesContainer.innerHTML = '';

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Popup Image';
        imagesContainer.appendChild(img);
    });

    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
