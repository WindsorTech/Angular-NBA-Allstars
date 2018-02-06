angular
    .module('nbaAllstars.forwards') 
    .controller('ForwardsCtrl', ForwardsCtrl);

function ForwardsCtrl($scope) {
    var vm = this; 

    // Show Larry Bird pic on click
    $("#bird-btn").click(function(){

        if ( $('#forward-1').hasClass('empty') || $('#forward-2').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#forward-1').hasClass('bird') || $('#forward-2').hasClass('bird') ) {

            $(this).toggleClass('btn-success');

        }
            
        if ( $(this).hasClass('btn-success') ) {

            if ( $('#forward-1').hasClass('empty') ) {

                $('#forward-1').html('<img src="nbaAllstars/layout/assets/images/players/larry-bird.png" id="bird-pic" class="players-pics">');
                $('#forward-1').removeClass('empty');
                $('#forward-1').addClass('full');
                $('#forward-1').addClass('bird');

            } else if ( $('#forward-1').hasClass('full') ) {

                $('#forward-2').html('<img src="nbaAllstars/layout/assets/images/players/larry-bird.png" id="bird-pic" class="players-pics">');
                $('#forward-2').removeClass('empty');
                $('#forward-2').addClass('full');
                $('#forward-2').addClass('bird');

            }
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#forward-1').hasClass('full') && $('#forward-1').hasClass('bird') ) {

                $('#bird-pic').hide();
                $('#forward-1').removeClass('full');
                $('#forward-1').removeClass('bird');
                $('#forward-1').addClass('empty');


            } else if ( $('#forward-2').hasClass('full') && $('#forward-2').hasClass('bird') ) {

                $('#bird-pic').hide();
                $('#forward-2').removeClass('full');
                $('#forward-2').removeClass('bird');
                $('#forward-2').addClass('empty');

            }

        }

    });


    // Show Scottie Pippen pic on click
    $("#pippen-btn").click(function(){

        if ( $('#forward-1').hasClass('empty') || $('#forward-2').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#forward-1').hasClass('pippen') || $('#forward-2').hasClass('pippen') ) {

            $(this).toggleClass('btn-success');

        }
            
        if ( $(this).hasClass('btn-success') ) {

            if ( $('#forward-1').hasClass('empty') ) {

                $('#forward-1').html('<img src="nbaAllstars/layout/assets/images/players/scottie-pippen.png" id="pippen-pic" class="players-pics">');
                $('#forward-1').removeClass('empty');
                $('#forward-1').addClass('full');
                $('#forward-1').addClass('pippen');

            } else if ( $('#forward-1').hasClass('full') ) {

                $('#forward-2').html('<img src="nbaAllstars/layout/assets/images/players/scottie-pippen.png" id="pippen-pic" class="players-pics">');
                $('#forward-2').removeClass('empty');
                $('#forward-2').addClass('full');
                $('#forward-2').addClass('pippen');

            }
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#forward-1').hasClass('full') && $('#forward-1').hasClass('pippen') ) {

                $('#pippen-pic').hide();
                $('#forward-1').removeClass('full');
                $('#forward-1').removeClass('pippen');
                $('#forward-1').addClass('empty');


            } else if ( $('#forward-2').hasClass('full') && $('#forward-2').hasClass('pippen') ) {

                $('#pippen-pic').hide();
                $('#forward-2').removeClass('full');
                $('#forward-2').removeClass('pippen');
                $('#forward-2').addClass('empty');

            }

        }

    });


    // Show LeBron James pic on click
    $("#james-btn").click(function(){

        if ( $('#forward-1').hasClass('empty') || $('#forward-2').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#forward-1').hasClass('james') || $('#forward-2').hasClass('james') ) {

            $(this).toggleClass('btn-success');

        }
            
        if ( $(this).hasClass('btn-success') ) {

            if ( $('#forward-1').hasClass('empty') ) {

                $('#forward-1').html('<img src="nbaAllstars/layout/assets/images/players/lebron-james.png" id="james-pic" class="players-pics">');
                $('#forward-1').removeClass('empty');
                $('#forward-1').addClass('full');
                $('#forward-1').addClass('james');

            } else if ( $('#forward-1').hasClass('full') ) {

                $('#forward-2').html('<img src="nbaAllstars/layout/assets/images/players/lebron-james.png" id="james-pic" class="players-pics">');
                $('#forward-2').removeClass('empty');
                $('#forward-2').addClass('full');
                $('#forward-2').addClass('james');

            }
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#forward-1').hasClass('full') && $('#forward-1').hasClass('james') ) {

                $('#james-pic').hide();
                $('#forward-1').removeClass('full');
                $('#forward-1').removeClass('james');
                $('#forward-1').addClass('empty');


            } else if ( $('#forward-2').hasClass('full') && $('#forward-2').hasClass('james') ) {

                $('#james-pic').hide();
                $('#forward-2').removeClass('full');
                $('#forward-2').removeClass('james');
                $('#forward-2').addClass('empty');

            }

        }

    });

    
    // Show Tim Duncan pic on click
    $("#duncan-btn").click(function(){

        if ( $('#forward-1').hasClass('empty') || $('#forward-2').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#forward-1').hasClass('duncan') || $('#forward-2').hasClass('duncan') ) {

            $(this).toggleClass('btn-success');

        }
            
        if ( $(this).hasClass('btn-success') ) {

            if ( $('#forward-1').hasClass('empty') ) {

                $('#forward-1').html('<img src="nbaAllstars/layout/assets/images/players/tim-duncan.png" id="duncan-pic" class="players-pics">');
                $('#forward-1').removeClass('empty');
                $('#forward-1').addClass('full');
                $('#forward-1').addClass('duncan');

            } else if ( $('#forward-1').hasClass('full') ) {

                $('#forward-2').html('<img src="nbaAllstars/layout/assets/images/players/tim-duncan.png" id="duncan-pic" class="players-pics">');
                $('#forward-2').removeClass('empty');
                $('#forward-2').addClass('full');
                $('#forward-2').addClass('duncan');

            }
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#forward-1').hasClass('full') && $('#forward-1').hasClass('duncan') ) {

                $('#duncan-pic').hide();
                $('#forward-1').removeClass('full');
                $('#forward-1').removeClass('duncan');
                $('#forward-1').addClass('empty');


            } else if ( $('#forward-2').hasClass('full') && $('#forward-2').hasClass('duncan') ) {

                $('#duncan-pic').hide();
                $('#forward-2').removeClass('full');
                $('#forward-2').removeClass('duncan');
                $('#forward-2').addClass('empty');

            }

        }

    });


    // Show Charles Barkley pic on click
    $("#barkley-btn").click(function(){

        if ( $('#forward-1').hasClass('empty') || $('#forward-2').hasClass('empty') ) {

            $(this).toggleClass('btn-success');

        } else if ($('#forward-1').hasClass('barkley') || $('#forward-2').hasClass('barkley') ) {

            $(this).toggleClass('btn-success');

        }
            
        if ( $(this).hasClass('btn-success') ) {

            if ( $('#forward-1').hasClass('empty') ) {

                $('#forward-1').html('<img src="nbaAllstars/layout/assets/images/players/charles-barkley.png" id="barkley-pic" class="players-pics">');
                $('#forward-1').removeClass('empty');
                $('#forward-1').addClass('full');
                $('#forward-1').addClass('barkley');

            } else if ( $('#forward-1').hasClass('full') ) {

                $('#forward-2').html('<img src="nbaAllstars/layout/assets/images/players/charles-barkley.png" id="barkley-pic" class="players-pics">');
                $('#forward-2').removeClass('empty');
                $('#forward-2').addClass('full');
                $('#forward-2').addClass('barkley');

            }
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#forward-1').hasClass('full') && $('#forward-1').hasClass('barkley') ) {

                $('#barkley-pic').hide();
                $('#forward-1').removeClass('full');
                $('#forward-1').removeClass('barkley');
                $('#forward-1').addClass('empty');


            } else if ( $('#forward-2').hasClass('full') && $('#forward-2').hasClass('barkley') ) {

                $('#barkley-pic').hide();
                $('#forward-2').removeClass('full');
                $('#forward-2').removeClass('barkley');
                $('#forward-2').addClass('empty');

            }

        }

    });

}