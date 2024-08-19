let shareBlock = document.getElementById('shareBlock'),
    shareButton = document.getElementById('shareButton'),
    shareButtonSmall = document.getElementById('shareButtonSmall'),
    articleBottom = document.getElementById('articleBottom'),
    shareBlock1 = document.getElementById('shareBlock1');

function handleResizeFirst() {
    if (window.matchMedia('(min-width: 580px)').matches) {
        shareButton.addEventListener('click', bigCheckBlock);
    } else {
        shareButton.removeEventListener('click', bigCheckBlock);
    }
}

function bigCheckBlock() {
    if (shareBlock.style.display === 'none' || shareBlock.style.display === '') {
        shareBlock.style.display = 'flex';
        shareButton.style.backgroundColor = 'hsl(214, 17%, 51%)';
    } else {
        shareBlock.style.display = 'none';
        shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)';
    }
};

function handleResizeSecond() {
    if (window.matchMedia('(max-width: 580px)').matches) {
        shareButton.addEventListener('click', toggleShareBlock);
    } else {
        shareButton.removeEventListener('click', toggleShareBlock);
    }
}

function toggleShareBlock() {
        shareBlock1.style.display = 'flex';
        articleBottom.style.display = 'none';
};

shareButtonSmall.addEventListener('click', function() {
    shareBlock1.style.display = 'none';
    articleBottom.style.display = 'flex';
})

handleResizeFirst();
handleResizeSecond();

window.addEventListener('resize', handleResizeFirst);
window.addEventListener('resize', handleResizeSecond);