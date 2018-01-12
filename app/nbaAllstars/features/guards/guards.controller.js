angular
    .module('nbaAllstars.guards') 
    .controller('GuardsCtrl', GuardsCtrl);

function GuardsCtrl() {
    var vm = this; 

    // Show Michael Jordan pic on click
    $("#jordan-btn").click(function(){

    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {

            if ( $('#guard-1').hasClass('empty') ) {

                $('#guard-1').html('<img id="jordan-pic" class="players-pics" src="nbaAllstars/layout/assets/images/players/michael-jordan.png" />');
                $('#guard-1').removeClass('empty');
                $('#guard-1').addClass('full');

            } else if ( $('#guard-1').hasClass('full') ) {

                $('#guard-2').html('<img id="jordan-pic" class="players-pics" src="nbaAllstars/layout/assets/images/players/michael-jordan.png" />');
                $('#guard-2').removeClass('empty');
                $('#guard-2').addClass('full');

            }
		
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#guard-1').hasClass('full') ) {

                $('#jordan-pic').hide();
                $('#guard-1').removeClass('full');
                $('#guard-1').addClass('empty');

            } else if ( $('#guard-2').hasClass('full') ) {

                $('#jordan-pic').hide();
                $('#guard-2').removeClass('full');
                $('#guard-2').addClass('empty');

            }

		}
    });

    //============================================//

    // Show Kobe Bryant pic on click
    $("#bryant-btn").click(function(){

        $(this).toggleClass('btn-success');

        if ( $(this).hasClass('btn-success') ) {

            if ( $('#guard-1').hasClass('empty') ) {

                $('#guard-1').html('<img id="bryant-pic" class="players-pics" src="nbaAllstars/layout/assets/images/players/kobe-bryant.png" />');
                $('#guard-1').removeClass('empty');
                $('#guard-1').addClass('full');

            } else if ( $('#guard-1').hasClass('full') ) {

                $('#guard-2').html('<img id="bryant-pic" class="players-pics" src="nbaAllstars/layout/assets/images/players/kobe-bryant.png" />');
                $('#guard-2').removeClass('empty');
                $('#guard-2').addClass('full');

            }
        
        } else if ( $(this).hasClass('btn-primary') ) {

            if ( $('#guard-1').hasClass('full') ) {

                $('#bryant-pic').hide();
                $('#guard-1').removeClass('full');
                $('#guard-1').addClass('empty');

            } else if ( $('#guard-2').hasClass('full') ) {

                $('#bryant-pic').hide();
                $('#guard-2').removeClass('full');
                $('#guard-2').addClass('empty');

            }

        }
    });

    //============================================//

    

    // Show Magic Johnson pic on click
    $("#johnson-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#johnson-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#johnson-pic').hide();

		}
    });

    // Show Stephen Curry pic on click
    $("#curry-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#curry-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#curry-pic').hide();

		}
    });

    // Show Isiah Thomas pic on click
    $("#thomas-btn").click(function(){
    	$(this).toggleClass('btn-success');

    	if ( $(this).hasClass('btn-success') ) {
		
		$('#thomas-pic').show();

		} else if ( $(this).hasClass('btn-primary') ) {

		$('#thomas-pic').hide();

		}
    });

}