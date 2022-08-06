var n=10
for(var i=1;i<=n;i++){
    var word=""
    if(i==1||i==n){
        for(var j=1;j<=n;j++){
            word+="*"+" "


        }
    }
    else{
        for(var j=1;j<=n;j++){
            if(j==1){
                word+="*"
            }
            else{
                word+=" "
            }
        }
    }
    console.log(word)
}