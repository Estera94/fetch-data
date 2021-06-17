
let modal = document.querySelector('.modal')
let modalContent = document.querySelector('.modal-content')
let photoData;
let start = 0
let end = 6


function fetchUrl() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => {
            photoData = data;
            displayData()
        })
}

function displayData() {
    photoData.slice(start, end).forEach(pictures => {
        document.querySelector('#optional').innerHTML +=
            '<div data-url="'+ pictures.url + '" class="titleImages">' +
                 '<p>'+ pictures.title +'</p>'
                 + '<img src="' + pictures.thumbnailUrl + '"class="mainImg" >' +
            '</div>'
    })
    document.querySelectorAll('.titleImages').forEach(div => {
        div.addEventListener('click', e => {
            modalContent.innerHTML = '<img src="' + div.dataset.url + '">'+
                              ' <span class="close-button">×</span>'
            modal.classList.toggle('show-modal')
            document.querySelector(".close-button").addEventListener('click', ()=> {
                modal.classList.toggle('show-modal')
            })
        })
    })
}

document.querySelector('.more').addEventListener('click', (e) => {
    start += 6
    end += 6
    displayData()
})

fetchUrl()

