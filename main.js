const darkModebtn = document.querySelector('.dark-mode');
const lightModebtn = document.querySelector('.light-mode');
const starModebtn = document.querySelector('.star-mode');
const btnZoomIn = document.querySelector('.btn-zoom-in');
const btnZoomOut = document.querySelector('.btn-zoom-out');


const darkMode = {
    textColor: "gray",
    backgroundColor: "#242228",
    themeColor: "#35353D",
    borderBottom: "#454545",
    textColorActive: "#fff",
}

const lightMode = {
    textColor: "gray",
    backgroundColor: "#fff",
    themeColor: "#fafafa",
    borderBottom: "#f0f0f0",
    textColorActive: "black",
}
const starMode = {
    textColor: "gray",
    backgroundColor: "#1b191b",
    themeColor: "#2c2a2c",
    borderBottom: "#454545",
}





// envent click reSize
btnZoomIn.addEventListener('click', () => {
    reSize("giam");

})
btnZoomOut.addEventListener('click', () => {
    reSize("tang");

})




// event click change mode
darkModebtn.addEventListener('click', (e) => {
    changeMode(darkMode, e);
})

lightModebtn.addEventListener('click', (e) => {
    changeMode(lightMode, e)
})
starModebtn.addEventListener('click', (e) => {
    changeMode(starMode, e)
})








const headerTitle = document.querySelector('.header_title');
const headerMode = document.querySelectorAll('.header_item');
const menuItemGroup = document.querySelectorAll('.menu_item-group');
const inputBlock = document.querySelector('.search-input');

const menuTitle = document.querySelectorAll('.menu_item-title');
const menuItem = document.querySelectorAll('.menu_item');
const btnSearch = document.querySelector('.bx-search');

function reSize(text) {
    if (text == "giam") {
        wrapper.style.width = "80px";
        wrapper.style.minWidth = "80px";
        btnZoomIn.style.display = "none";
        btnZoomOut.style.display = "flex";
        for (var item of menuTitle) {
            item.style.transform = "translateX(100px)";
        }
        for (var item of menuItem) {
            item.style.width = "25px";
        }
        btnSearch.style.right = "-16px";
        inputBlock.style.display = "none";


        darkModebtn.style.display = "none";
        starModebtn.style.display = "none";
        headerTitle.style.display = "none";


    } else {
        wrapper.style.width = "20vh";
        wrapper.style.minWidth = "300px";
        btnZoomOut.style.display = "none";
        btnZoomIn.style.display = "flex";

        for (var item of menuTitle) {
            item.style.transform = "translateX(0)";
        }
        for (var item of menuItem) {
            item.style.width = "100%";
        }
        btnSearch.style.right = "10px";
        inputBlock.style.display = "block";


        darkModebtn.style.display = "flex";
        starModebtn.style.display = "flex";
        headerTitle.style.display = "block";
    }
}




const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('.header');
const menu = document.querySelector('.content');

function changeMode(mode, e) {
    // change color ;
    wrapper.style.backgroundColor = mode.backgroundColor;
    header.style.backgroundColor = mode.themeColor;
    menu.style.backgroundColor = mode.themeColor;
    menu.style.color = mode.textColor;
    for (var item of menuItemGroup) {
        item.style.borderBottomColor = mode.borderBottom;
    }
    inputBlock.style.backgroundColor = mode.backgroundColor;


}