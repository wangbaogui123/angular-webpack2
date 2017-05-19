module.exports = function(ngModule){

	// 首页js
	ngModule.controller("Appctr",["$rootScope","$scope",'$location', '$anchorScroll', function($rootScope,$scope, $location, $anchorScroll){

    	$scope.top = {
    		
    		show:false
    	}
		
		$scope.has_login = localStorage.login
    		
        $scope.topShow = function(){
            $scope.top.show = !$scope.top.show;
        }
        
		$scope.go_to_hash = function(o){
			$location.hash(o);
			$anchorScroll();
		}
	}])
	.controller("homeContr",["$rootScope","$scope","$window",function($rootScope,$scope,$window){

		require("./css/index.css");
		$scope.top.show = false;

		$scope.home = {};
		$scope.home.active = true;
		$scope.showImg = function(){
			$scope.home.active = !$scope.home.active;
		}
		$scope.home.msgIndex = "0";

		$scope.msgShow = function(index){
			$scope.home.msgIndex = index;
		}



		// 合作伙伴
		var arr = [
			{
				tit:"LinkedME是一家打造App与App之间的桥梁，感知用户行为、引起场景消费的企业级深度链接服务平台。我们相信，深度链接及沉默用户唤醒将在移动互联网后半场中占有举足轻重的地位，企业使用LinkedME产品将能带给终端用户更加全面优质的服务。",
				url:"https://www.linkedme.cc/img/photo/yuntianshi.png",
				name:"秦捷",
				company:"云天使",
				job:"合伙人"
			},
			{
				tit:"随着移动互联网由增量市场向存量市场的转变，新用户增长越来越慢，渠道流量费用越来越高，然而从沉默用户中唤醒及召回，将是整体移动互联网运营的重点沙场。",
				url:"https://www.linkedme.cc/img/photo/sina.png",
				name:"孙上恩",
				company:"新浪微博",
				job:"用户运营总监"
			},
			{
				tit:"企业始终面临两个问题，第一是获取新用户，第二是留住老用户，同理，移动互联网的用户增长面也面临着两个问题，第一是拉新APP用户，第二是拉活APP沉默用户。LinkedME应用Deep Linking技术的产品解决，是移动互联网后半场APP运营用户增长很好的利器。",
				url:"https://www.linkedme.cc/img/photo/yingke.png",
				name:"皮建华",
				company:"映客",
				job:"技术架构师"
			},
			{
				tit:"Linkedme以它敏锐的嗅觉开启了中国深度链接市场，真诚的态度架起了应用之间的桥梁，温柔的方法丰富了用户的使用体验，是互联网市场上一支完美的服务设计。",
				url:"https://www.linkedme.cc/img/photo/baidu.png",
				name:"苏放",
				company:"百度地图",
				job:"产品运营经理"
			}

		];
		$scope.home.num = 0;
		$scope.home.ca  = arr[$scope.home.num];

		$scope.left = function(){
			$scope.home.num --;
			if($scope.home.num < 0){
				$scope.home.num = arr.length - 1;
			}
			$scope.home.ca  = arr[$scope.home.num];
		}
		$scope.right = function(){
			$scope.home.num ++;
			if($scope.home.num > arr.length - 1){
				$scope.home.num = 0;
			}
			$scope.home.ca  = arr[$scope.home.num];
		}



	}]).
	// page
	controller("pageContr",["$scope","$window",function($scope,$window){
		$scope.top.show = false;

		$scope.selected = [true, false, false, false, false, false];
		$scope.slide = false;
		
		$scope.content_list = [
			"用户在任意位置点击深度链接后，LinkedME自动判断用户是否已经安装APP，已经安装就直接打开APP中的详情页，未安装跳转到应用商店下载。",
			"用微信公众号公众号传播文章时，直接引导用户下载安装/打开您的APP，做到每一次传播都是一次潜在的用户拉新/拉活。",
			"用户不论是在PC端还是移动端点击深度链接，都能获得定制化的使用体验，最终引导用户打开/下载您的应用。",
			"用深度链接做广告投放，引导用户直接跳转到APP内的详情页面，提高APP活跃度，为您带来更好的广告转化效果。",
			"深度链接可以直接携带信息，再也不用麻烦用户手动输入邀请码；当用户A推荐用户B使用APP时，B点击A发送的链接并安装APP以后可以直接收到A发送的红包，不需手动输入邀请码或手机号。",
			"多个APP之间通过深度链接将一些使用场景关联起来，比如导购APP与电商APP关联、旅游攻略APP与出行APP关联等，打造更流畅的用户使用体验。"
		]
		$scope.content = $scope.content_list[0];
		$scope.change_tab = function(index){
			$scope.selected = [false, false, false, false, false, false];
			$scope.selected[index] = true;
			$scope.content = $scope.content_list[index]
		}
				
		$scope.function_list = [
			{
				pic:"img/function/watch.png",
				title:"渠道监测",
				text:"通过在不同渠道投放不同链接，了解在哪里推广最有效果、后续转化比例更高，让您的推广活动有据可依，提升ROI"
			},
			{
				pic:"img/function/track.png",
				title:"深度追踪",
				text:"追踪APP用户的深度使用行为数据，将APP外的深度链接访问行为与APP内的关键事件访问结合，更了解您的用户"
			},
			{
				pic:"img/function/share.png",
				title:"分享回流",
				text:"哪些用户更爱分享内容，哪些分享的内容更有吸引力，哪个用户的分享行为带来更多活跃，分享行为后续的转化也让您了如指掌"
			},
			{
				pic:"img/function/analysis.png",
				title:"统计分析",
				text:"完善的数据监测体系，专业的可视化数据分析中心帮助您分析链接信息，直观观察营销活动趋势，优化市场推广战略"
			}
		]
		

	}]).
	// price
	controller("linkedPrice",["$scope","$window",function($scope,$window){
		require("./css/price.css");
		$scope.top.show = false;

	}]).
	controller("linkedfind",["$scope","$window",function($scope,$window){
		$scope.top.show = false;

	}]).
	controller("linkactive",["$scope","$window","linkedMe","$msgbox",function($scope,$window,linkedMe,$msgbox){
		require("./css/linkactive.css");
		$scope.top.show = false;

		$scope.la = {};
		$scope.er = {};
		$scope.er.msg = "";
		$scope.la.ad_role = "";
		var posturl = "/ad/apply_link_active";

		$scope.sub = function(){
			if($scope.la.name == "" || $scope.la.name == null){
				$scope.er.msg = "联系人未输入";
				return false;
			}
			if($scope.la.telephone == "" || $scope.la.telephone == null){
				$scope.er.msg = "联系电话未输入";
				return false;
			}else if(!/^1[34578]\d{9}$/.test($scope.la.telephone)){
				$scope.er.msg = "手机格式有误！";
				return false;
			}
			if($scope.la.company == "" || $scope.la.company == null){
				$scope.er.msg = "公司未输入";
				return false;
			}
			if($scope.la.app_name == "" || $scope.la.app_name == null){
				$scope.er.msg = "APP名称未输入";
				return false;
			}
			
			linkedMe.com_Ajax("post_form",posturl,$scope.la,function(data){

				if(data.data.ret == "ok"){

					$msgbox(0,"申请成功！将会在一个工作日之内给您反馈!");
				}else{
					$msgbox(0,data.data.err_msg);
				}

			},function(data){
				console.error("接口报错",data);
			})
		}


	}]).
	controller("joinContr",["$scope", "$window", '$location', '$anchorScroll', '$stateParams',
	function($scope, $window, $location, $anchorScroll,$stateParams){
		$location.hash($stateParams.hash);
		$anchorScroll();
		$scope.top.show = false;
		
		$scope.join_list = [
			{
				pic:"img/about/people-coffee-tea-meeting_16.png",
				title:"团队优势",
				text:"来自清华、人大、浙大、北邮等国内知名院校的研究生组成的强力创业团队，我们曾效力于新浪微博、阿里、微软等知名互联网公司。"
			},
			{
				pic:"img/about/pexels-photo.png",
				title:"薪酬福利",
				text:"我们提供业内具有竞争力的薪酬，一年内不定期涨薪，零食水果饮料供应，团建活动，假日礼物，生日聚会等等应有尽有。"
			},
			{
				pic:"img/about/chair-table.png",
				title:"企业文化",
				text:"我们是技术驱动型公司，崇尚google文化，奉行“开心生活，快乐工作”。弹性工作不打卡，周末双休，释放你的生活热情才能更好地为公司创造价值。"
			},
			{
				pic:"img/about/flowers-desk-office-vintage.png",
				title:"工作氛围",
				text:"专业的人做专业的事情，尊重每一位小伙伴的专业性。强调能力，更看重潜力。“简单做人，高调做事”的风格，让彼此更好沟通。幽默风趣的氛围，是不是可以创造抖机灵的火花。"
			}
		];
    		$scope.job_list = [
    			{
    				pic:"img/about/media.png",
    				department:"媒体部",
    				job:[
    					{
    						job_name:"媒介拓展经理",
    						job_no:"M-01",
    						job_highlight:"13-15薪；弹性工作；周末双休；零食水果；团建聚餐；全员奖金。",
    						job_res:[
    							"1、负责媒体的拓展、接入及维护，给予媒体专业的流量变现解决方案",
    							"2、跟踪媒体后续合作过程及需求反馈，包含但不限于：合同签订、结算、问题咨询等。",
    							"3、结合具体广告项目需求协调媒体相关事项，主    导推广产品的对接。",
    							"4、收集媒体信息、灵活分配各类媒体资源。"
    						],
    						job_req:[
    							"1、熟悉并热爱移动互联网，对于移动互联网广告商业模式有基本了解，有一定的行业资源，合作过HeroAPP类媒体较好。",
    							"2、较强的商务谈判能力和媒体流量分析能力，对媒体的变化有一定的敏感度。",
    							"3、具备优秀的沟通、团队协作能力，执行力强、工作效率高。",
    							"4、抗压能力强，可适应一定程度出差。"
    						]
    					},
    					{
    						job_name:"广告投放经理",
    						job_no:"M-02",
    						job_highlight:"13-15薪；弹性工作；周末双休；零食水果；团建聚餐；全员奖金。",
    						job_res:[
    							"1、对投放广告进行数据跟踪，定期分析广告效果并提供后续运营优化方案；",
    							"2、对业务模型、广告数据、用户行为数据敏感，利用工具进行数据分析；",
    							"3、按照公司战略方向维护有推广需求的广告客户并和客户保持良好的沟通及反馈；",
    							"4、协助销售维护战略合作伙伴的关系,完成公司下达的既定业绩目标；",   
    							"5、负责广告项目风险把控及顺利交付。"
    						],
    						job_req:[
    							"1、全日制本科及以上学历；",
    							"2、有2年以上移动广告公司媒介经验，或互联网媒体广告资源管理、广告产品运营相关工作经验。",
    							"3、对移动广告有充分了解，并有较强的逻辑思维、数据分析及学习能力；",
    							"4、认真、细致，善于沟通和分享，勤于总结和反馈，具备较强的沟通表达能力及一定的抗压能力；",
    							"5、积极进取，有团队协作意识，理解并认同企业文化。"
    							
    						]
    					}
    				]
    			},
    			
    		]

	}]).
	controller("serviceContr",["$scope","$window",function($scope,$window){
		require("./css/price.css");
		$scope.top.show = false;

	}]).
	controller("hideContr",["$scope","$window",function($scope,$window){
		require("./css/price.css");
		$scope.top.show = false;
		
	}])
	
}