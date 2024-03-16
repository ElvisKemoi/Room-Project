// const navbar = $("#navbarSupportedContent");
// const dropdown = $("#navbarSupportedContent");
const searchBar = $(".search");
const startButton = $(".start");
const dropdownItems = $(".nav-item");
const welcomeBox = $(".welcome-box");
const header = $("header");
const mainSection = $("main");

// Menu Reveal
function menuReveal() {
    dropdownItems.on("click", () => {
        dropdown.removeClass("show");
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() <= 1) {
            dropdown.addClass("show");
        } else {
            dropdown.removeClass("show");
        }
    });
}
// menuReveal();

//Search focus
function searchFocus() {
    startButton.on("click", () => {
        searchBar.focus();
    });
}
searchFocus();
