$('document').ready(function(){
    if(location.hash){

        switch(location.hash){
            case '#about':
                $('body').css('background', 'url(img/kukoricaMezo.jpg)');
                $('body').css('background-size', 'cover');
                break;
            case '#entries':
                $('body').css('background', 'url(img/pumpkin.jpg');
                $('body').css('background-size', 'cover');
                break;
            default:
                $('body').css('background', 'url(img/petrezselyem.jpg');
                $('body').css('background-size', 'cover');
        }

        $('main').load(`content/content.php ${location.hash}`);
        $(`${location.hash}Menu`).addClass('active');
    }
    else{
        $('body').css('background', 'url(img/petrezselyem.jpg)');
        $('body').css('background-size', 'cover');

        $('main').load('content/content.php #home');
        location.hash = '#home';
        $('#homeMenu').addClass('active');
    }
});



$('.nav-link').each(function(){
    $(this).on({
        click: function(){
            $('main').load(`content/content.php ${$(this).data('hash')}`);

            location.hash = $(this).data('hash');

            switch(location.hash){
                case '#about':
                    $('body').css('background', 'url(img/kukoricaMezo.jpg)');
                    $('body').css('background-size', 'cover');
                    break;
                case '#entries':
                    $('body').css('background', 'url(img/pumpkin.jpg)');
                    $('body').css('background-size', 'cover');
                    break;
                default:
                    $('body').css('background', 'url(img/petrezselyem.jpg)');
                    $('body').css('background-size', 'cover');
            }

            $('.nav-link').each(function(){
                $(this).removeClass('active');
            });

            $(this).addClass('active');
        }
    })
});
