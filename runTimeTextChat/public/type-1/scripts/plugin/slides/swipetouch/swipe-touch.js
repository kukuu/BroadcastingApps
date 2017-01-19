// JavaScript source code
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

var gallery,
    el,
    i,
    page,
    dots = document.querySelectorAll('#nav li'),
    slides = [
        {
            img: 'images/thumbnails/tuttons-london-1.jpg',
            width: 300,
            height: 213,
            desc: 'Tuttons - London'
        },
        {
            img: 'images/thumbnails/the-ritz-restaurant-london-1.jpg',
            width: 300,
            height: 164,
            desc: 'The Ritz - London'
        },
        {
            img: 'images/thumbnails/the-ritz-restaurant-london-1.jpg',
            width: 300,
            height: 213,
            desc: ''
        },
        {
            img: 'images/thumbnails/the-ritz-restaurant-london-1.jpg',
            width: 147,
            height: 220,
            desc: ''
        },
        {
            img: 'images/thumbnails/the-ritz-restaurant-london-1.jpg',
            width: 300,
            height: 213,
            desc: ''
        },
        {
            img: 'images/thumbnails/the-ritz-restaurant-london-1.jpg',
            width: 165,
            height: 220,
            desc: ''
        }
    ];

gallery = new SwipeView('#wrapper', { numberOfPages: slides.length });

// Load initial data
for (i = 0; i < slides.length; i++) {
    page = i == 0 ? slides.length - 1 : i - 1;
    el = document.createElement('img');
    el.className = 'loading';
    el.src = slides[page].img;
    el.width = slides[page].width;
    el.height = slides[page].height;
    el.onload = function () { this.className = ''; }
    gallery.masterPages[i].appendChild(el);

    el = document.createElement('span');
    el.innerHTML = slides[page].desc;
    gallery.masterPages[i].appendChild(el)
}

gallery.onFlip(function () {
    var el,
        upcoming,
        i;

    for (i = 0; i < 3; i++) {
        upcoming = gallery.masterPages[i].dataset.upcomingPageIndex;

        if (upcoming != gallery.masterPages[i].dataset.pageIndex) {
            el = gallery.masterPages[i].querySelector('img');
            el.className = 'loading';
            el.src = slides[upcoming].img;
            el.width = slides[upcoming].width;
            el.height = slides[upcoming].height;

            el = gallery.masterPages[i].querySelector('span');
            el.innerHTML = slides[upcoming].desc;
        }
    }

    document.querySelector('#nav .selected').className = '';
    dots[gallery.pageIndex + 1].className = 'selected';
});

gallery.onMoveOut(function () {
    gallery.masterPages[gallery.currentMasterPage].className = gallery.masterPages[gallery.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, '');
});

gallery.onMoveIn(function () {
    var className = gallery.masterPages[gallery.currentMasterPage].className;
    /(^|\s)swipeview-active(\s|$)/.test(className) || (gallery.masterPages[gallery.currentMasterPage].className = !className ? 'swipeview-active' : className + ' swipeview-active');
});
