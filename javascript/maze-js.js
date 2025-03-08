//CREDITS
 document.getElementById('credit').addEventListener('click', () => {
    // Trigger SweetAlert
    Swal.fire({
        title: 'Credits',
        text: 'This Labyrinth game was made by Tjan Gabrovec. https://github.com/tjangabrovec',
        icon: 'info',
        confirmButtonText: 'Mkay',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.close();
        }
    });
});

// EXIT SCREEN
function exitGame() {
    // Create the fade-to-black div
    const fadeDiv = document.createElement('div');
    fadeDiv.classList.add('fade-to-black');
    document.body.appendChild(fadeDiv);

    //"Goodbye" text
    const goodbyeText = document.createElement('div');
    goodbyeText.classList.add('goodbye-text');
    goodbyeText.innerText = 'Goodbye';
    document.body.appendChild(goodbyeText);

    //fade effect
    setTimeout(() => {
        fadeDiv.style.opacity = 1; // Fade to black
        goodbyeText.style.opacity = 1; // Show goodbye text
    }, 10); // Delay

    // Wait 3 seconds
    setTimeout(() => {
        window.close(); // Close
    }, 2500); // 3 seconds
}
