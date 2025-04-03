// $('.portfolio-item').isotope({
//  	itemSelector: '.item',
//  	layoutMode: 'fitRows'
//  });

$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
    return  false;
});

$(document).ready(function() {
  var popup_btn = $('.popup-btn'); // Make sure this class exists in your HTML
  
  if (popup_btn.length) {
      popup_btn.magnificPopup({
          type: 'image',
          gallery: {
              enabled: true
          }
      });
  } else {
      console.error("❌ Error: No elements found with class .popup-btn");
  }
});

    

$(window).on('load',function() {
    console.log("Window Load");
});

$(window).resize(function(){
    console.log("document resiez");
});

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Select relevant HTML elements
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("#filter-buttons button");
  const filterableCards = document.querySelectorAll("#filterable-cards .card");

  filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
          const filterValue = button.getAttribute("data-filter");

          // Remove 'active' class from all buttons and add to the clicked one
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");

          // Loop through all cards and show/hide based on filter
          filterableCards.forEach((card) => {
              const cardCategory = card.getAttribute("data-name");

              if (filterValue === "all" || cardCategory === filterValue) {
                  card.style.display = "block"; // Show matching cards
              } else {
                  card.style.display = "none"; // Hide non-matching cards
              }
          });
      });
  });
});