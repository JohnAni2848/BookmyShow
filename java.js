var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter > 4){
        counter=1;
    }
},5000);

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  
  $(document).ready(function() {
      $('#autoWidth2').lightSlider({
          autoWidth:true,
          loop:true,
        onSliderLoad: function() {
            $('#autoWidth2').removeClass('cS-hidden2');
        } 
    });  
});

$(document).ready(function() {
  $('#autoWidth3').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth3').removeClass('cS-hidden3');
      } 
  });  
});

$(document).ready(function() {
    $('#autoWidth4').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth4').removeClass('cS-hidden4');
        } 
    });  
  });

  $(document).ready(function() {
    $('#autoWidth5').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth5').removeClass('cS-hidden5');
        } 
    });  
  });

  $(document).ready(function() {
    $('#autoWidth6').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth6').removeClass('cS-hidden6');
        } 
    });  
  });

  $(document).ready(function() {
    $('#autoWidth7').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth7').removeClass('cS-hidden7');
        } 
    });  
  });

  $(document).ready(function() {
    $('#autoWidth8').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth8').removeClass('cS-hidden8');
        } 
    });  
  });
  $(document).ready(function() {
    $('#autoWidth9').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth9').removeClass('cS-hidden9');
        } 
    });  
  });

  $(document).ready(function() {
    $('#autoWidth10').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth10').removeClass('cS-hidden10');
        } 
    });  
  });
  
  $(document).ready(function() {
    $('#autoWidth11').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth11').removeClass('cS-hidden11');
        } 
    });  
  });
