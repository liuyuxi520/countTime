(function(){  
    app = window.app || {};
    app.countTime = (count,obj,callback) => {
        let time = Number(count); 
        let countTime = setInterval(()=>{
            if(time <= 0){
                clearInterval(countTime);
                if(app.isFunction(callback)){
                    callback();
                }
            }
            obj.innerHTML=time;
            time--;

        },1000);
    };
    app.isFunction = fn => Object.prototype.toString.call(fn)=== '[object Function]';
    return app;
}());