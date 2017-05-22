module.exports = function(ngModule,$jq){

    ngModule.factory('linkedMe',['$http','$q','$rootScope',function ($http,$q,$rootScope) {

              var linkedMeServer_url = "";
              
            
            return {

                com_Ajax:function(type,api,data,success,error){

                    // 公共请求地址
                    var url = linkedMeServer_url + api;
                    // 判断数据请求方式
                    if(type == "post" || type == "post_form"){
                        // post_form 请求方式对数据进行处理
                        if(type == "post_form"){

                           var newData = "",
                               // 通过 Object.keys 值获取对象的长度
                               len = Object.keys(data).length,
                               num = 0;
                           // 循环对象进行改造    
                           $jq.each(data,function(i,v){

                                num++;
                                num == len ? newData += ""+i+"="+v : newData += ""+i+"="+v+"&";

                           })

                           data = newData;

                        }
                        // 配置post || post_form 的参数
                        var req = {
                            'method': "POST",
                            'url': url,
                            'headers': {
                                'Authorization': '',
                                'Content-Type': 'application/x-www-form-urlencoded' ,
                            },
                            'data':data
                        }
                        // 发送 post 请求
                        $http(req).then(function(data){
                            // success
                            success(data);
                        },function(data){
                            // error
                            error(data);
                        })
                            
                    // 请求方式为 get
                    }else if(type == "get"){
                        // 配置get请求头
                           $http.defaults.headers.get = {'Authorization': 'Token:' + $rootScope.token + ' ' + $rootScope.user_id}
                        // 发送get请求
                        $http.get(url).then(function(data){
                            // success
                            success(data);
                        },function(data){
                            // error
                            error();
                        })
                    }
                }

            }
        }])
    .factory('$msgbox',['$http',function ($http) {

            return function(type,msg,callback){

                var btn = "";

                if($jq(".gb-msg").length > 0){

                    $jq(".gb-msg").remove();

                }

                if(type == 0){

                    btn = "";

                }else if(type == 1){

                    btn = "<div class='btn-box'> <button class='success'>确认</button> </div>";

                }else if(type == 2){

                    btn = "<div class='btn-box'> <button class='success'>确认</button> <button class='cancle'>取消</button></div>";
                }


                var html =  '<div class="gb-msg" id="gb-msg">'+
                                '<div class="cont">'+
                                    '<p>'+msg+'</p>'+
                                    ''+btn+''+
                                '</div>'+
                            '</div>';

                $jq("body").append(html);

                if(type == 0){

                    setTimeout(function(){
                        $jq("#gb-msg").remove(); 
                    },2000)
                }

            }
     
        }]) 

}

