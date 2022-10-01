document.addEventListener("DOMContentLoaded", function() {
    var $grid = $('.grid1').isotope({
        itemSelector: '.t4s_ds_home_main_item',
        layoutMode: 'fitRows'
      });
      setTimeout(function(){  
        $grid.isotope('layout') 
      }, 300);
      setTimeout(function(){  
        $grid.isotope('layout') 
      }, 500);
      setTimeout(function(){  
        $grid.isotope('layout') 
      }, 1500);
    
    $('.tab_title1').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        
        $grid.isotope({ filter: filterValue });
      });
      // change is-checked class on buttons
      $('.tab_title1').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });
    });