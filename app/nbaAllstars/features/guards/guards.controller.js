angular
    .module('nbaAllstars.guards') 
    .controller('GuardsCtrl', GuardsCtrl);

function GuardsCtrl() {
    var vm = this; 

    // Show Michael Jordan pic on click
    $("#jordan-btn").click(function(){

        if ( $('#guard-1').hasClass('empty') || $('#guard-2').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#guard-1').hasClass('jordan') || $('#guard-2').hasClass('jordan') ) {

            $(this).toggleClass('btn-success');

        }
            
    	if ( $(this).hasClass('btn-success') ) {

            if ( $('#guard-1').hasClass('empty') ) {

                $('#guard-1').html('<img src="nbaAllstars/layout/assets/images/players/michael-jordan.png" id="jordan-pic" class="players-pics">');
                $('#guard-1').removeClass('empty');
                $('#guard-1').addClass('full');
                $('#guard-1').addClass('jordan');

            } else if ( $('#guard-1').hasClass('full') ) {

                $('#guard-2').html('<img src="nbaAllstars/layout/assets/images/players/michael-jordan.png" id="jordan-pic" class="players-pics">');
                $('#guard-2').removeClass('empty');
                $('#guard-2').addClass('full');
                $('#guard-2').addClass('jordan');

            }
		
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#guard-1').hasClass('full') && $('#guard-1').hasClass('jordan') ) {

                $('#jordan-pic').hide();
                $('#guard-1').removeClass('full');
                $('#guard-1').removeClass('jordan');
                $('#guard-1').addClass('empty');


            } else if ( $('#guard-2').hasClass('full') && $('#guard-2').hasClass('jordan') ) {

                $('#jordan-pic').hide();
                $('#guard-2').removeClass('full');
                $('#guard-2').removeClass('jordan');
                $('#guard-2').addClass('empty');

            }

		}

    });


    // Show Kobe Bryant pic on click 
    $("#bryant-btn").click(function(){

        if ( $('#guard-1').hasClass('empty') || $('#guard-2').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#guard-1').hasClass('bryant') || $('#guard-2').hasClass('bryant') ) {

            $(this).toggleClass('btn-success');

        }

        if ( $(this).hasClass('btn-success') ) {

            if ( $('#guard-1').hasClass('empty') ) {

                $('#guard-1').html('<img src="nbaAllstars/layout/assets/images/players/kobe-bryant.png" id="bryant-pic" class="players-pics">');
                $('#guard-1').removeClass('empty');
                $('#guard-1').addClass('full');
                $('#guard-1').addClass('bryant');

            } else if ( $('#guard-1').hasClass('full') ) {

                $('#guard-2').html('<img src="nbaAllstars/layout/assets/images/players/kobe-bryant.png" id="bryant-pic" class="players-pics">');
                $('#guard-2').removeClass('empty');
                $('#guard-2').addClass('full');
                $('#guard-2').addClass('bryant');

            }
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#guard-1').hasClass('full') && $('#guard-1').hasClass('bryant') ) {

                $('#bryant-pic').hide();
                $('#guard-1').removeClass('full');
                $('#guard-1').removeClass('bryant');
                $('#guard-1').addClass('empty');


            } else if ( $('#guard-2').hasClass('full') && $('#guard-2').hasClass('bryant') ) {

                $('#bryant-pic').hide();
                $('#guard-2').removeClass('full');
                $('#guard-2').removeClass('bryant');
                $('#guard-2').addClass('empty');

            }

        }
    });

    // Show Magic Johnson pic on click
    $("#johnson-btn").click(function(){

        if ( $('#guard-1').hasClass('empty') || $('#guard-2').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#guard-1').hasClass('johnson') || $('#guard-2').hasClass('johnson') ) {

            $(this).toggleClass('btn-success');

        }

        if ( $(this).hasClass('btn-success') ) {

            if ( $('#guard-1').hasClass('empty') ) {

                $('#guard-1').html('<img src="nbaAllstars/layout/assets/images/players/magic-johnson.png" id="johnson-pic" class="players-pics">');
                $('#guard-1').removeClass('empty');
                $('#guard-1').addClass('full');
                $('#guard-1').addClass('johnson');

            } else if ( $('#guard-1').hasClass('full') ) {

                $('#guard-2').html('<img src="nbaAllstars/layout/assets/images/players/magic-johnson.png" id="johnson-pic" class="players-pics">');
                $('#guard-2').removeClass('empty');
                $('#guard-2').addClass('full');
                $('#guard-2').addClass('johnson');

            }
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#guard-1').hasClass('full') && $('#guard-1').hasClass('johnson') ) {

                $('#johnson-pic').hide();
                $('#guard-1').removeClass('full');
                $('#guard-1').removeClass('johnson');
                $('#guard-1').addClass('empty');


            } else if ( $('#guard-2').hasClass('full') && $('#guard-2').hasClass('johnson') ) {

                $('#johnson-pic').hide();
                $('#guard-2').removeClass('full');
                $('#guard-2').removeClass('johnson');
                $('#guard-2').addClass('empty');

            }

        }
    });

    // Show Stephen Curry pic on click
    $("#curry-btn").click(function(){

        if ( $('#guard-1').hasClass('empty') || $('#guard-2').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#guard-1').hasClass('curry') || $('#guard-2').hasClass('curry') ) {

            $(this).toggleClass('btn-success');

        }

        if ( $(this).hasClass('btn-success') ) {

            if ( $('#guard-1').hasClass('empty') ) {

                $('#guard-1').html('<img src="nbaAllstars/layout/assets/images/players/stephen-curry.png" id="curry-pic" class="players-pics">');
                $('#guard-1').removeClass('empty');
                $('#guard-1').addClass('full');
                $('#guard-1').addClass('curry');

            } else if ( $('#guard-1').hasClass('full') ) {

                $('#guard-2').html('<img src="nbaAllstars/layout/assets/images/players/stephen-curry.png" id="curry-pic" class="players-pics">');
                $('#guard-2').removeClass('empty');
                $('#guard-2').addClass('full');
                $('#guard-2').addClass('curry');

            }
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#guard-1').hasClass('full') && $('#guard-1').hasClass('curry') ) {

                $('#curry-pic').hide();
                $('#guard-1').removeClass('full');
                $('#guard-1').removeClass('curry');
                $('#guard-1').addClass('empty');


            } else if ( $('#guard-2').hasClass('full') && $('#guard-2').hasClass('curry') ) {

                $('#curry-pic').hide();
                $('#guard-2').removeClass('full');
                $('#guard-2').removeClass('curry');
                $('#guard-2').addClass('empty');

            }

        }
    });

    // Show Isiah Thomas pic on click
    $("#thomas-btn").click(function(){

        if ( $('#guard-1').hasClass('empty') || $('#guard-2').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#guard-1').hasClass('thomas') || $('#guard-2').hasClass('thomas') ) {

            $(this).toggleClass('btn-success');

        }

        if ( $(this).hasClass('btn-success') ) {

            if ( $('#guard-1').hasClass('empty') ) {

                $('#guard-1').html('<img src="nbaAllstars/layout/assets/images/players/isiah-thomas.png" id="thomas-pic" class="players-pics">');
                $('#guard-1').removeClass('empty');
                $('#guard-1').addClass('full');
                $('#guard-1').addClass('thomas');

            } else if ( $('#guard-1').hasClass('full') ) {

                $('#guard-2').html('<img src="nbaAllstars/layout/assets/images/players/isiah-thomas.png" id="thomas-pic" class="players-pics">');
                $('#guard-2').removeClass('empty');
                $('#guard-2').addClass('full');
                $('#guard-2').addClass('thomas');

            }
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#guard-1').hasClass('full') && $('#guard-1').hasClass('thomas') ) {

                $('#thomas-pic').hide();
                $('#guard-1').removeClass('full');
                $('#guard-1').removeClass('thomas');
                $('#guard-1').addClass('empty');


            } else if ( $('#guard-2').hasClass('full') && $('#guard-2').hasClass('thomas') ) {

                $('#thomas-pic').hide();
                $('#guard-2').removeClass('full');
                $('#guard-2').removeClass('thomas');
                $('#guard-2').addClass('empty');

            }

        }
    });

}