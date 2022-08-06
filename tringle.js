var len=10
var width=8
for(var i=1; i<=width; i++){
    var word=""
    if(i==1 || i==width){
        for(var j=1; j<=len; j++){
            word+="*"

        }

    }
    else{
        for(var j=1; j<=len; j++){
            if(j==1 || j==len){
                word+="*"
            }
            else{
                word+=" "
            }
        
        }
    }
    console.log(word)

}