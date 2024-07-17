const character = document.getElementById('character');
const item = document.getElementById('item');
let characterPosition = 175;
let itemPosition = { x: Math.random() * 370, y: 0 };
let score = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && characterPosition > 0) {
        characterPosition -= 10;
    } else if (e.key === 'ArrowRight' && characterPosition < 350) {
        characterPosition += 10;
    }
    character.style.left = characterPosition + 'px';
});

function dropItem() {
    itemPosition.y += 5;
    item.style.top = itemPosition.y + 'px';
    item.style.left = itemPosition.x + 'px';

    if (itemPosition.y > 570) {
        if (Math.abs(itemPosition.x - characterPosition) < 50) {
            score++;
            alert('Score: ' + score);
        }
        resetItem();
    }
    requestAnimationFrame(dropItem);
}

function resetItem() {
    itemPosition = { x: Math.random() * 370, y: 0 };
    item.style.top = itemPosition.y + 'px';
}

dropItem();

