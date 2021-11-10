jQuery(document).ready(function () {
    //cambio de texto breadcrumb tyc
    changeText();

    jQuery(window).resize(function () {
        changeText();
        var windowWidth = jQuery(window).width();
        if (windowWidth > 767) {
            jQuery(".breadcrumb li a").text("Términos y condiciones")
        }
    });
    //lista acordión tyc
    jQuery(".accordion-titulo").click(function (e) {
        e.preventDefault();
        var contenido = jQuery(this).next(".accordion-content");
        if (contenido.css("display") == "none") { //open		
            contenido.slideDown(250);
            jQuery(this).addClass("open");
        }
        else { //close		
            contenido.slideUp(250);
            jQuery(this).removeClass("open");
        }
    });
})

function changeText() {
    var txtNav = jQuery(".warpper .radio:checked ~ .tabs .tab").text();
    var windowWidth = jQuery(window).width();

    jQuery(".warpper .radio ~ .tabs .tab").click(function () {
        txtNav = jQuery(this).text();
        if (windowWidth > 767) {
            jQuery(".breadcrumb .active").text(txtNav)
        }
    });
}