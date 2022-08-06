const { time } = require("console")

var n=5
for(var i=1;i<=n;i++){
    var times=(i*2)-1
    var line=""
    var space=(n-i)*2
    var spaceline=""
    for(var s=1;s<=space;s++){
        spaceline+=" "
    }
    for(var j=1;j<=times;j++){
        if(j==1){
            line+="*"
        }
        else{
            line+=" *"
        }
    }
    // console.log(spaceline+line)
}
for(var i=n;i>=1;i--){
    var times=(i*2)-1
    var line=""
    var space=(n-i)*2
    var spaceLine=""
    for(var j=0;j<=space;j++ ){
        spaceLine+=" "


    }
    for(var j=1;j<=times;j++){
        if(j==1){
            line+="*"
        }
        else{
            line+=" *"
        }
    }
    console.log(spaceLine+line)

}