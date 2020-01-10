export const date = (time )=> {
    if (!time) return false;
    var oDate = new Date(time)
            var    oYear = oDate.getFullYear()
            var   oMonth = oDate.getMonth()+1
            var   oDay = oDate.getDate()
            var    oHour = oDate.getHours()
            var    oMin = oDate.getMinutes()
            var  oSen = oDate.getSeconds()
            var   oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间
            return oTime;
       
        //补0操作
        function getzf(num){
            if(parseInt(num) < 10){
                num = '0'+num;
            }
            return num;
        }
};
