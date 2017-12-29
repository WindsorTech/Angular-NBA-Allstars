angular
    .module('nbaAllstars.centers') 
    .controller('CentersCtrl', CentersCtrl);

function CentersCtrl($scope) {
    var vm = this; 

    $(".btn").click(function(){
    	$(this).toggleClass('btn-success');
    });

}