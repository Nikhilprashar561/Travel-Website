export const portfolio = (e)=>{    
    window.onload =  setTimeout(()=>{
        document.querySelector('.fuck').classList.add('port-show')
        document.querySelector('.cut-port').addEventListener('click',function(){
             document.querySelector('.portfolio').style.display = 'none'
             document.querySelector('.fuck').classList.remove('port-show')
        })
    },8000)
}