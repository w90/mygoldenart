var mga;

$(function() {

    mga = {

        content: {
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

        },

        fn: {
                updateHeights() {
                    const keys = Object.keys(mga.content);
                    console.log(keys);
                    keys.forEach((item, index) => {
                        mga.content[item].height = mga.content[ item ].element.outerHeight();
                    })
                }
            }

    };

mga.fn.updateHeights();




 var section = mga.content;
 var $cards = $('.mga-section__card');

    const timelineInitialize = new TimelineLite();

    timelineInitialize
        .to( $cards, 0, {  y: '200%', autoAlpha: 0 } )
        .to( section.contact.cover, 0 , { y: -section.contact.height })
        .to( section.gallery.cover, 0 , { y: - ( section.gallery.height + section.contact.height) })
        .to( section.about.cover, 0 , { y: -( section.gallery.height + section.contact.height + section.about.height )  });




$('.mga-header__nav-item').on( 'click', function() {

    var sectionLink = $( this ).data( 'link' );
    console.log(section);

    if ( typeof section !== 'undefined') {
        return false;
    }

    //TweenLite.to( section[ sectionLink ]. )

} );









    const timelineNavItems = new TimelineLite();

    const $navItems = $('.mga-header__nav-item');

    timelineNavItems
        .staggerFrom( $navItems, .3, { y: 30, autoAlpha: 0 , ease: Power1.easeOut }, .1);

});