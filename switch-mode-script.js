const html_element = document.querySelector("html");
const theme_switch = document.getElementById("theme-switch");
const switch_label = document.getElementsByClassName("card__theme-switch")[0];

function setLightTheme(){
    html_element.classList.remove("dark-theme");
    html_element.classList.add("light-theme");
}
function setDarkTheme(){
    html_element.classList.remove("light-theme");
    html_element.classList.add("dark-theme");
}

// If the user prefers light theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    theme_switch.checked = true;
}

// Keep watching for changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    if(newColorScheme === "light"){
        theme_switch.checked = true;
        setLightTheme();
    }
    else{
        theme_switch.checked = false;
        setDarkTheme();
    }
});

// Change the theme with the theme switch
theme_switch.addEventListener("change", function(){
    if(this.checked){
        setLightTheme();
    }
    else{
        setDarkTheme();
    }
});

// Control the theme switch with keyboard
switch_label.addEventListener("keydown", (event) => {
    if(event.code === "Space") {
        event.preventDefault(); // Prevents the page from scrolling when space key is pressed
        if(theme_switch.checked){
            setDarkTheme();
            theme_switch.checked = false;
        }
        else{
            setLightTheme();
            theme_switch.checked = true;
        }
    }
});