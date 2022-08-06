var n=5
for(let i=1;i<=n;i++){
    var word=""
    if(i==1||i==Math.round(n/2)||i==n){
        for(let j=1;j<=n;j++){
            word+="*"

        }
    }
    else{
        for( j=1;j<=n;j++){
            if(j==1 || j==n){
                word+="*"
            }
            else{
                word+=" "
            }
        }
    }
    console.log(word)

}