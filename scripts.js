(function () {
  $(document).on('pageinit', '#home', function () {
    var itemy;
    $('#content-bg').css({
      'height': ($('#home').height() - 220) + 'px'
    });
    $('.list1').on('click', function () {
      $(this).attr('show-this', 'true');
      itemy = $(this).offset().top;

      $('#top-b').fadeIn(250).animate({
        'margin-top': '-10px'
      }, {
        duration: 250,
        queue: false
      });
      $('#header1').fadeOut(250).animate({
        'margin-top': '-10px'
      }, {
        duration: 250,
        queue: false
      });
      $('#content-bg').fadeOut(250);
      setTimeout(function () {
        $('#search').fadeOut(250).animate({
          'margin-top': '-10px'
        }, {
          duration: 250,
          queue: false
        });
      }, 20);
      setTimeout(function () {
        $('#list-content .list1').not('.list1[show-this=true]').fadeOut(250).animate({
          'margin-top': '-10px'
        }, {
          duration: 250,
          queue: false
        });
        $('.list1[show-this=true]').animate({
          'top': '-45px'
        }, 250).css({
          'background': 'rgba(0,0,0,.2)',
          'color': '#fff',
          'font-size': '20px'
        });
      }, 40);
      setTimeout(function () {
        $('#add-icon').fadeOut(250).animate({
          'bottom': '0px',
        }, {
          duration: 250,
          queue: false
        });
      }, 60);

      $('#banner').css({
        'top': '-40px',
        'opacity': '1'
      });

      $('#detail-item paper-item').css({
        'margin-top': '0px',
        'opacity': '1'
      });

      $('#detail-header paper-icon-button').css({
        '-webkit-transform': 'scale(1)',
        'fill': 'rgba(255,255,255,.7)'
      });
    });

    //detail button

    $('#back-btn').on('click', function () {

      $('#top-b').fadeIn(250).animate({
        'margin-top': '0px'
      }, {
        duration: 250,
        queue: false
      });
      $('#header1').fadeIn(250).animate({
        'margin-top': '0px'
      }, {
        duration: 250,
        queue: false
      });
      $('#content-bg').fadeIn(250);
      setTimeout(function () {
        $('#search').fadeIn(250).animate({
          'margin-top': '0px'
        }, {
          duration: 250,
          queue: false
        });
      }, 20);
      setTimeout(function () {
        $('#list-content .list1').fadeIn(250).animate({
          'margin-top': '0px'
        }, {
          duration: 250,
          queue: false
        });
        $('.list1[show-this=true]').animate({
          'top': (itemy - 136) + 'px'
        }, 250);
        $('.list1').removeAttr('show-this').css({
          'background': 'rgba(0,0,0,0)',
          'color': '#333',
          'font-size': '15px'
        });
      }, 40);
      setTimeout(function () {
        $('.list1').removeAttr('show-this').css({
          'background': 'rgba(255,255,255,1)'
        });
      }, 50);
      setTimeout(function () {
        $('#add-icon').fadeIn(250).animate({
          'bottom': '15px'
        }, {
          duration: 250,
          queue: false
        });
      }, 60);

      $('#banner').css({
        'top': '0',
        'opacity': '0'
      });

      $('#detail-item paper-item').css({
        'margin-top': '10px',
        'opacity': '0'
      });

      $('#detail-header paper-icon-button').css({
        '-webkit-transform': 'scale(.5)',
        'fill': 'rgba(255,255,255,.2)'
      });
    });
  });
})();
tapHandler: function() {
			this.$.dialog.toggle();
		}