jQuery(document).ready(listo);


function listo()
    {
        jQuery(".hamb").click(function(e){
            e.preventDefault(); //para bloquear las acciones del numeral
            jQuery("header .container nav").toggleClass("open");
            
            jQuery(".hamb i").toggleClass("fa-times")

        });

        //Para llevar al link del Numeral
        //toggle es para abrir y remove es para cerrar
        jQuery("header .container nav a").click(function(){
            
            jQuery("header .container nav").removeClass("open");
            jQuery(".hamb i").removeClass("fa-times")
            
            var dev = jQuery(this).attr("href");
            //alert(dev)
            jQuery("html,body").animate(
                {
                    "scrollTop": jQuery(dev).offset().top -76
                }
            )

        })
    }

//<i class="fas fa-times"></i>
