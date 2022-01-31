let input = prompt('Enter your Word Name please');
let loCase = input.toLowerCase();
let img = document.getElementById('img');
let photo = ['img-01.png', 'img-02.jpg', 'img-03.jpg', 'img-04.png', 'img-05.jpg', 'img-06.jpg', 'img-07.jpg', 'img-08.jpg', 'img-09.png', 'img-10.png', ];
if (loCase == 'burger') {
    img.src = photo[0];
} else if (loCase == 'egg') {
    img.src = photo[1];
} else if (loCase == 'food') {
    img.src = photo[2]
} else if (loCase == 'mango') {
    img.src = photo[3]
} else if (loCase == 'banana') {
    img.src = photo[4]
} else if (loCase == 'Watermelon') {
    img.src = photo[5]
} else if (loCase == 'orange') {
    img.src = photo[6]
} else if (loCase == 'pineapple') {
    img.src = photo[7]
} else if (loCase == 'watch') {
    img.src = photo[8]
} else {
    img.src = photo[9]
}