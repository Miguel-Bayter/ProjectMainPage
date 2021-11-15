$(function () {
    $('.filter').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'all') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    //para los enlaces
    let equipo = $('#equipo').offset().top,
        logros = $('#logros').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;
    
    //para restablecer los enlaces en el responsive
    window.addEventListener('resize', function(){
        let equipo = $('#equipo').offset().top,
        logros = $('#logros').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;
    });

    //enlaces
    $('#enlaces-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlaces-equipo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo -100
        },600);
    });

    $('#enlaces-logros').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: logros -100
        },600);
    });

    $('#enlaces-trabajo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo -100
        },600);
    });

    $('#enlaces-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});