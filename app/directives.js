module.exports = function(ngModule,$jq){

	ngModule.directive('top',['$document',function($document){

		return {
			restrict:'E',
			templateUrl:'./view/blocks/top.html',
			replace:true,
			transclude: false,
			link:function($scope,$route){
				
				var $par = $jq("#gb-top"),
					$cont = $jq("#top-cont");

				$jq(window).on('scroll',function(){

					var num = 0.5 + $jq(this).scrollTop()/200;
					
					if(num > 0.9){
						num = 0.9;
						$par.find(".two").show();
						$par.find(".one").hide();
					}else{
						$par.find(".two").hide();
						$par.find(".one").show();
					}

					$par.css("background","rgba(255,255,255,"+num+")")
					
				})

			}
		}

	}])
}