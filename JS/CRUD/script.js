let url = document.querySelector('#url')
let addBtn = document.querySelector('#add')
let resultBox = document.querySelector('.resultBox')

let productList = []

addBtn.addEventListener('click', function () {
    if (url.value.trim() === '') {
        alert("Please enter Prodcut Url")
        return
    }

    productList.push({ image: url.value })
    showData()
    url.value

})

function deleteCart(productId) {
    productList.splice(productId, 1)
    showData()
}

function showData() {
    resultBox.innerHTML = ''
    for (let i = 0; i < productList.length; i++) {
        resultBox.innerHTML += `
        <div class="card">
            <div class="img-box">
                <img src="${productList[i].image}" alt="">
            </div>
            <div class="btns-box">
                <button id="delete-btn" onclick="deleteCart(${i})">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <button>
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
            </div>
        </div> 
        `
    }
}
