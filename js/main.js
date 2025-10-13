document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded and parsed");
  try {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburgerMenu && mobileNav) {
      console.log("Hamburger menu and mobile nav found");
      hamburgerMenu.addEventListener('click', () => {
        console.log("Hamburger menu clicked");
        mobileNav.classList.toggle('is-open');
        hamburgerMenu.classList.toggle('is-open');
      });
    } else {
      console.error("Hamburger menu or mobile nav not found");
    }
  } catch (error) {
    console.error("Error in mobile menu script:", error);
  }
});