 
  function local(data,img){
    return  localmap(data,img)
}
  function localmap(data,img){
       data.onmouseover=function(){
           img.style.display='block'

       }
       data.onmouseout=function(){
           img.style.display="none"
       }
  }
export default local










