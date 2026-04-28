export class Header {
    init() {
        this.HeaderHover();
        this.HeaderFixed();
    }

    HeaderHover() {
        $(document).ready(function () {
            function HeaderDeskResize() {
                let HeaderResize = $(window).width();
                if (HeaderResize >= 1024) {
                    $(".header-link").off("mouseenter mouseleave").hover(
                        function () {
                            $(".header-link").addClass("hover-active");
                            $(".header-main").addClass("header-active");
                            $("html").addClass("overflow-hidden")
                        },
                        function () {
                            $(".header-link").removeClass("hover-active");
                            $(".header-main").removeClass("header-active");
                            $("html").removeClass("overflow-hidden")
                        }
                    )
                }
            }
            HeaderDeskResize();
        })
    }

    HeaderFixed() {
        // header fixed js
        var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        $(window).scroll(function () {
            var sticky = $(".header"),
                scroll = $(window).scrollTop();
            if (scroll >= 50) {
                sticky.addClass("header-fixed");
                sticky.removeClass("header-fixed-os");
            }
            else {
                sticky.removeClass("header-fixed");
                sticky.addClass("header-fixed-os");
            }
            var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
                $(".header").removeClass("hidden");
            } else {
                $(".header").addClass("hidden");
            }
            prevScrollPos = currentScrollPos;
        });
    }
}