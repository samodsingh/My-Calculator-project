var buttonsAll = document.querySelectorAll('button');
var result = document.getElementById('result'); 
for(let i =0; i<buttonsAll.length;i++){ 
    buttonsAll[i].addEventListener('click',function(){
        if(this.innerHTML == '='){
          result.value = eval(result.value)

        }else if(this.innerHTML == 'C'){
            result.value = "";
        }
        else{
            result.value += this.innerHTML;
        }
    }); 
}