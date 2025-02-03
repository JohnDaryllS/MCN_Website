function showMoreMembers(buttonIndex) {
    const hiddenMembers = document.querySelectorAll('.members.hidden');
    const seeMoreContainers = document.querySelectorAll('.see-more-container.hidden');
    let count = 0;
    hiddenMembers.forEach(member => {
        if (count < 15) {
            member.classList.remove('hidden');
            count++;
        }
    });
    if (seeMoreContainers[buttonIndex - 1]) {
        seeMoreContainers[buttonIndex - 1].classList.remove('hidden');
    }
    document.getElementById('seeMoreBtn' + buttonIndex).style.display = 'none';
}