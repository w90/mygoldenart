var content;

$(function() {

    content = {
        contact: {
            element: $('.mga-section__card--about'),
            height: null,
            cover: $('.mga-section--gallery')
        },
        gallery: {
            element: $('.mga-section__card--gallery'),
            height: null,
            cover: $('.mga-section--contact')
        },
        about: {
            element: $('.mga-section__card--contact'),
            height: null,
            cover: $('.mga-section--footer-cover')
        },
        fn: {
            getHeights(section) {
                let key = content[section];
                let calculatedHeight = key.element.height();
                key.height = calculatedHeight;
            },
            updateHeights() {
                const keys = Object.keys( content );
                keys.forEach( () => {
                    content[ this ].height = content.fn.getHeights( this );
                })
            }
        }
    };





    const timeline = new TimelineLite();

    timeline
        .from( content.contact.element, 1, { y: 500, autoAlpha: 0, ease: Power1.easeOut } );

});