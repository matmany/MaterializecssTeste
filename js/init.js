
(function($){
    $(function(){     
      $(document).ready(function(){
        $('.carousel').carousel({
          fullWidth: true,
          numVisible: 0,
          padding: 0
        });
      });
      $('.sidenav').sidenav();
      $('.parallax').parallax();
      $('.slider').slider({
        indicators: true,
      });
      $( "#ferra" ).click(function() {
        $('.carousel').carousel('set', '0');
      });
      $( "#comp" ).click(function() {
        $('.carousel').carousel('set', '1');
      });
      $( "#exp" ).click(function() {
        $('.carousel').carousel('set', '2');
      });
    }); // end of document ready

  })(jQuery); // end of jQuery name space
  