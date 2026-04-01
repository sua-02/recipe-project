$(function(){
    $("#header .tab").click((e)=>{
        e.preventDefault();
        $("body").addClass("fixed");
        $("#mobile-menu").addClass("active");
        $(".dim").addClass("active");
    });

    $(".dim").click(function(){
        $("body").removeClass("fixed");
        $("#mobile-menu").removeClass("active");
        $(".dim").removeClass("active");
    });

    $(".icon .close").click((e)=>{
        e.preventDefault();
        $(".dim").trigger("click");
    });

    let mainSwiper = new Swiper("#main-slider .swiper-container", {
        navigation: {
            nextEl: "#main-slider .swiper-button-next",
            prevEl: "#main-slider .swiper-button-prev"
        },
        pagination: {
            el: "#main-slider .swiper-pagination",
            type: "fraction"
        }
    });

    $(".sub-slider .swiper-container").each(function (_, element) {
        new Swiper(element, {
            slidesPerView: 1.5,
            spaceBetween: 10,
            breakpoints: {
                640: {
                    slidesPerView: 3.5,
                    spaceBetween: 5
                }
            }
        });
    });

    let bannerSwiper2 = new Swiper("#best-collection .swiper-container", {
        slidesPerView: 4,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: "#best-collection .swiper-button-next",
            prevEl: "#best-collection .swiper-button-prev",
        },
    });

    let bannerSwiper3 = new Swiper("#honor-recipe .swiper-container", {
        slidesPerView: 4,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: "#honor-recipe .swiper-button-next",
            prevEl: "#honor-recipe .swiper-button-prev",
        },
    });
});