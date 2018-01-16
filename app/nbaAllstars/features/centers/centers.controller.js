angular
    .module('nbaAllstars.centers') 
    .controller('CentersCtrl', CentersCtrl);

function CentersCtrl($scope) {
    var vm = this; 

    // Show Bill Russell pic on click
    $("#russell-btn").click(function(){

        if ( $('#center-1').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#center-1').hasClass('russell') ) {

            $(this).toggleClass('btn-success');

        }
            
        if ( $(this).hasClass('btn-success') ) {

            if ( $('#center-1').hasClass('empty') ) {

                $('#center-1').html('<img src="nbaAllstars/layout/assets/images/players/bill-russell.png" id="russell-pic" class="players-pics">');
                $('#center-1').removeClass('empty');
                $('#center-1').addClass('full');
                $('#center-1').addClass('russell');

            } 
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#center-1').hasClass('full') && $('#center-1').hasClass('russell') ) {

                $('#russell-pic').hide();
                $('#center-1').removeClass('full');
                $('#center-1').removeClass('russell');
                $('#center-1').addClass('empty');

            } 

        }

    });

    // Show Kareem Adbul-Jabbar pic on click
    $("#jabbar-btn").click(function(){

        if ( $('#center-1').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#center-1').hasClass('jabbar') ) {

            $(this).toggleClass('btn-success');

        }
            
        if ( $(this).hasClass('btn-success') ) {

            if ( $('#center-1').hasClass('empty') ) {

                $('#center-1').html('<img src="nbaAllstars/layout/assets/images/players/kareem-abdul-jabbar.png" id="jabbar-pic" class="players-pics">');
                $('#center-1').removeClass('empty');
                $('#center-1').addClass('full');
                $('#center-1').addClass('jabbar');

            } 
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#center-1').hasClass('full') && $('#center-1').hasClass('jabbar') ) {

                $('#jabbar-pic').hide();
                $('#center-1').removeClass('full');
                $('#center-1').removeClass('jabbar');
                $('#center-1').addClass('empty');

            } 

        }

    });

    // Show Shaquille O'Neal pic on click
    $("#oneal-btn").click(function(){

        if ( $('#center-1').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#center-1').hasClass('oneal') ) {

            $(this).toggleClass('btn-success');

        }
            
        if ( $(this).hasClass('btn-success') ) {

            if ( $('#center-1').hasClass('empty') ) {

                $('#center-1').html('<img src="nbaAllstars/layout/assets/images/players/shaquille-oneal.png" id="oneal-pic" class="players-pics">');
                $('#center-1').removeClass('empty');
                $('#center-1').addClass('full');
                $('#center-1').addClass('oneal');

            } 
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#center-1').hasClass('full') && $('#center-1').hasClass('oneal') ) {

                $('#oneal-pic').hide();
                $('#center-1').removeClass('full');
                $('#center-1').removeClass('oneal');
                $('#center-1').addClass('empty');

            } 

        }

    });

    // Show Wilt Chamberlain pic on click
    $("#chamberlain-btn").click(function(){

        if ( $('#center-1').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#center-1').hasClass('chamberlain') ) {

            $(this).toggleClass('btn-success');

        }
            
        if ( $(this).hasClass('btn-success') ) {

            if ( $('#center-1').hasClass('empty') ) {

                $('#center-1').html('<img src="nbaAllstars/layout/assets/images/players/wilt-chamberlain.png" id="chamberlain-pic" class="players-pics">');
                $('#center-1').removeClass('empty');
                $('#center-1').addClass('full');
                $('#center-1').addClass('chamberlain');

            } 
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#center-1').hasClass('full') && $('#center-1').hasClass('chamberlain') ) {

                $('#chamberlain-pic').hide();
                $('#center-1').removeClass('full');
                $('#center-1').removeClass('chamberlain');
                $('#center-1').addClass('empty');

            } 

        }

    });

    // Show Patrick Ewing pic on click
    $("#ewing-btn").click(function(){

        if ( $('#center-1').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#center-1').hasClass('ewing') ) {

            $(this).toggleClass('btn-success');

        }
            
        if ( $(this).hasClass('btn-success') ) {

            if ( $('#center-1').hasClass('empty') ) {

                $('#center-1').html('<img src="nbaAllstars/layout/assets/images/players/patrick-ewing.png" id="ewing-pic" class="players-pics">');
                $('#center-1').removeClass('empty');
                $('#center-1').addClass('full');
                $('#center-1').addClass('ewing');

            } 
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#center-1').hasClass('full') && $('#center-1').hasClass('ewing') ) {

                $('#ewing-pic').hide();
                $('#center-1').removeClass('full');
                $('#center-1').removeClass('ewing');
                $('#center-1').addClass('empty');

            } 

        }

    });

}