$(document).ready(function () {

  var totalPrice = 13;
  $('.price strong').html('$' + totalPrice);

// Intentarlo con esto ->  var totalPrice = parseInt($('.price strong').text().match(/\d+/)[0], 10);



  $('.controls .btn-pepperonni').click(function(){
    if ($(this).hasClass('active') === true) {
      $(this).toggleClass('active');
      $('.pep').css('display', 'none');
      $('.price ul li:first-child').css('display', 'none');
      totalPrice = totalPrice - 1;
      $('.price strong').html('$' + totalPrice);
    } else {
      $(this).toggleClass('active');
      $('.pep').css('display', 'block');
      $('.price ul li:first-child').css('display', 'block');
      totalPrice = totalPrice + 1;
      $('.price strong').html('$' + totalPrice);
    }
  });

  $('.controls .btn-mushrooms').click(function(){
    if ($(this).hasClass('active') === true) {
      $(this).toggleClass('active');
      $('.mushroom').css('display', 'none');
      $('.price ul li:nth-child(2)').css('display', 'none');
      totalPrice = totalPrice - 1;
      $('.price strong').html('$' + totalPrice);
    } else {
      $(this).toggleClass('active');
      $('.mushroom').css('display', 'block');
      $('.price ul li:nth-child(2)').css('display', 'block');
      totalPrice = totalPrice + 1;
      $('.price strong').html('$' + totalPrice);
    }
  });

  $('.controls .btn-green-peppers').click(function(){
    if ($(this).hasClass('active') === true) {
      $(this).toggleClass('active');
      $('.green-pepper').css('display', 'none');
      $('.price ul li:nth-child(3)').css('display', 'none');
      totalPrice = totalPrice - 1;
      $('.price strong').html('$' + totalPrice);
    } else {
      $(this).toggleClass('active');
      $('.green-pepper').css('display', 'block');
      $('.price ul li:nth-child(3)').css('display', 'block');
      totalPrice = totalPrice + 1;
      $('.price strong').html('$' + totalPrice);
    }
  });

  $('.controls .btn-sauce').toggleClass('active');
  $('.crust .sauce').removeClass('sauce-white');
  $('.price ul li:nth-last-of-type(-n+2)').css('display', 'none');

  $('.controls .btn-sauce').click(function(){
    if ($(this).hasClass('active') === false) {
      $(this).toggleClass('active');
      $('.crust .sauce').addClass('sauce-white');
      $('.price ul li:nth-child(4)').css('display', 'block');
      totalPrice = totalPrice + 3;
      $('.price strong').html('$' + totalPrice);
    } else {
      $(this).toggleClass('active');
      $('.crust .sauce').removeClass('sauce-white');
      $('.price ul li:nth-child(4)').css('display', 'none');
      totalPrice = totalPrice - 3;
      $('.price strong').html('$' + totalPrice);
    }
  });

  $('.controls .btn-crust').toggleClass('active');
  $('.crust').removeClass('crust-gluten-free');

  $('.controls .btn-crust').click(function(){
    if ($(this).hasClass('active') === false) {
      $(this).toggleClass('active');
      $('.crust').addClass('crust-gluten-free');
      $('.price ul li:last-child').css('display', 'block');
      totalPrice = totalPrice + 5;
      $('.price strong').html('$' + totalPrice);
    } else {
      $(this).toggleClass('active');
      $('.crust').removeClass('crust-gluten-free');
      $('.price ul li:last-child').css('display', 'none');
      totalPrice = totalPrice - 5;
      $('.price strong').html('$' + totalPrice);
    }
  });

});
