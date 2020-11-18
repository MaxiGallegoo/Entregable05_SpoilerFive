document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* Constantes */
    const BUTTON_TOGGLED_TEXT = "(js_toggled)";
    /* Fin Constantes */


    /* Envent Listeners para "togglear" botones */
    document.querySelectorAll(".js-togglable_button").forEach(button => {
        button.addEventListener("click", () => {
            let image = button.querySelector("img");
            let source = image.src;
            if (source && source.includes(BUTTON_TOGGLED_TEXT)) {
                source = source.replace(BUTTON_TOGGLED_TEXT, "");
            } else {
                let added_toggled = BUTTON_TOGGLED_TEXT + ".svg";
                source = source.replace(".svg", added_toggled);
            }
            image.src = source;
        });
    });

});