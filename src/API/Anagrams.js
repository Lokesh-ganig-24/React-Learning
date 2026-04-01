let amount=0;
for(let i=0;i< Responce.length;i++){
    if(responce[i].status=='Failure'){
        amount==amount+responce[i].amount;
    
    }

}
console.log('failed',amount);