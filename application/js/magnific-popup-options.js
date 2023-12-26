$(document).ready(function () {
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Chargement de l'image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">L\'image #%curr%</a> ne peut pas être chargée.',
      titleSrc: function (item) {
        return item.el.attr("title");
      },
    },
  });
});
