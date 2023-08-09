const close_btn = document.querySelector(".modal-form-close-btn");
const form_box = document.querySelector(".header-modal-form-box");
const header_main_button_second =
  document.getElementsByClassName("header-button-main")[1];
const burger = document.getElementsByTagName("details")[0];
const burger_section = document.querySelector(".burger-menu");
const burger_menu_logo_box = document.querySelector(".burger-menu-logo");
const burger_close_btn = document.querySelector(".burger-menu-close-btn");
const burger_lists = document.getElementsByClassName(
  "burger-menu-list-link"
)[0];

burger_lists.onclick = () => {
  burger.open = false;
};

burger_close_btn.onclick = () => {
  burger.open = false;
  // burger_section.style.display = "none";
};

// burger_btn.onclick = () => {
//   if (document.body.style.overflow == "hidden") {
//     document.body.style.overflow = "visible";
//   } else {
//     document.body.style.overflow == "hidden";
//   }
// };

header_main_button_second.onclick = () => {
  form_box.style.display = "flex";
  document.body.style.overflow = "hidden";
};

close_btn.onclick = () => {
  form_box.style.display = "none";
  document.body.style.overflow = "visible";
};
