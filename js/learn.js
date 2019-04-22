
$(document).ready(function(){
   
    //bai 1
    $('.tabs').find('.tab_link:first').addClass('current');
    $('.tabs').find('.tab_content:first').addClass('current');

    $(document).on('click','.tab_link',function (e) {
        e.preventDefault();
        var tab_id = $(this).attr('data-tab');
        var parent = $(this).closest(".tabs");
        parent.find('.tab_link').removeClass('current');
        parent.find('.tab_content').removeClass('current');
        $(this).addClass('current');
        parent.find('.content_' + tab_id).addClass('current');
    });

    //bai 2
    $(document).on('click', '.link-modal, .modal-toggle', function(e){
        e.stopPropagation();
    });    

    $(document).on('click', '.link-modal', function(e){
        $('body').off('cus.toggle');
       // $(this).closest(".li-link").siblings().find('.modal-toggle').hide(200);
        $(this).closest(".li-link").find('.modal-toggle').toggle(200).end().siblings().find('.modal-toggle').hide(200); 
        
        $('body').on('cus.toggle', function(e){
            $('.modal-toggle').hide();
            console.log('dasas');
            $(this).off('cus.toggle');
        })
    })

    $(document).on('click', 'body', function(){
        $(this).trigger('cus.toggle');
    })

    //bai 3
    $('.slider-list').find('.slide-item:first').addClass('active').show();

    $(document).on('click', '.btn-next', function(){
        if($('.slide-item.active').next().length){
            var itemActive = $('.slide-item.active');
            itemActive.removeClass('active').hide();
            itemActive.next().addClass('active').show();
        } else {
            $(this).addClass('disable');
        }
        $('.btn-prev').removeClass('disable');
    })

    $(document).on('click', '.btn-prev', function(){
        if($('.slide-item.active').prev().length){
            var itemActive = $('.slide-item.active');
            itemActive.removeClass('active').hide();
            itemActive.prev().addClass('active').show();
        } else {
            $(this).addClass('disable');
        }
        $('.btn-next').removeClass('disable');
    })


})