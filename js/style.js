// const list = document.querySelectorAll('.list');
// function activeLink() {
//     list.forEach((item) =>
//     item.classList.remove('active'));
//     this.classList.add('active');
// }

// list.forEach((item) =>
//     item.addEventListener('click', activeLink));


$(function(){
    const menu = $('header .list')
    menu.click(function(e){
        e.preventDefault()
        let listidx = $(this).index()
        let mainidx = $('main section').eq(listidx)
        let sectionDistance = mainidx.offset().top

        $('html,body').animate({
            scrollTop: sectionDistance
        })
    })

    $(window).scroll(function(){
        $('main section').each(function(){
            if($(this).offset().top<=$(window).scrollTop()+50)
            {
                let listidx = $(this).index()
                menu.removeClass('active')
                menu.eq(listidx).addClass('active')
            }
        })
    })

    $('.contact .phonesection .phonetext').click(function(){
        $('.contact .phonesection .phonetext').hide()
        $('.contact .phonesection').addClass('phone')
        $('html,body').delay(100).animate({
            scrollTop: $('main .myprofile').offset().top
        },1000)
        
        
    })
    $(window).scroll(function(){
        if($('main .myprofile').offset().top == $(window).scrollTop())
        {
            $('.contact .phonesection').removeClass('phone')
        }
        else if($('main .contact').offset().top == $(window).scrollTop())
        {
            $('.contact .phonesection .phonetext').show()
        }
    })


    // 디자인요소들
    $('.works .worksum').click(function(e){
        // e.preventDefault()
        $('.workpopup').scrollTop(0)
        $('.workpopup').addClass('on')
        $('.popupclose').addClass('on')
        let workidx = $(this).index()
        let imgSrcidx = ["img/designwork/detailpage1.jpg",
        "img/designwork/detailpage2.jpg",
        "img/designwork/detailpage3.jpg",
        "img/designwork/detailpage4.jpg",
        "img/designwork/redesign1.png",
        "img/designwork/redesign.jpg",
        "img/designwork/logodesign.png",
        "img/designwork/cafe24.jpg",
        "img/designwork/popup.png"]
        // let popupidx = imgSrcidx.eq(workidx)
    
        $('.workpopup .popupimg img').attr('src', imgSrcidx[workidx])

        if($(this).index() == 4){
            $('.popupfigma').addClass('on')
        }
    })


    $('.popupclose').click(function(){
        $('.workpopup').removeClass('on')
        $('.popupclose').removeClass('on')
        $('.popupfigma').removeClass('on')
    })





    // 화이트다크모드
    $('.daynight').click(function(){
        $('*').toggleClass('day')
        $('.clickbutton').toggleClass('on')
        $('.daynight').toggleClass('on')
    })
})