angular
    .module('nbaAllstars.game') 
    .controller('GameCtrl', GameCtrl);

function GameCtrl() {
    var vm = this; 

    // Start screen showing Guards list
    $('#guards-list').show();
    $('#forwards-list').hide();
    $('#centers-list').hide();

    /// Menu Select Functions ///
    $("#guards-link").click(function(){
        $('#guards-link').addClass('active');
        $('#forwards-link').removeClass('active');
        $('#centers-link').removeClass('active');

        $('#guards-list').show();
        $('#forwards-list').hide();
        $('#centers-list').hide();
    });

    $("#forwards-link").click(function(){
        $('#guards-link').removeClass('active');
        $('#forwards-link').addClass('active');
        $('#centers-link').removeClass('active');

        $('#guards-list').hide();
        $('#forwards-list').show();
        $('#centers-list').hide();
    });

    $("#centers-link").click(function(){
        $('#guards-link').removeClass('active');
        $('#forwards-link').removeClass('active');
        $('#centers-link').addClass('active');

        $('#guards-list').hide();
        $('#forwards-list').hide();
        $('#centers-list').show();
    });

    ////////////// GUARD PLAYERS FUNCTIONS /////////////

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

    ////////////// FORWARD PLAYERS FUNCTIONS /////////////

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

    ////////////// CENTER PLAYERS FUNCTIONS /////////////

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

    // if ( $('#guard-1').hasClass('full') && $('#guard-2').hasClass('full') && $('#forward-1').hasClass('full') && $('#forward-2').hasClass('full') && $('#center-1').hasClass('full') ) {

    //     $(".fb-share-button").show();

    // }



}