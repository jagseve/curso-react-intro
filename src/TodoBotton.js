import './TodoButton.css'
function TodoBotton(){
return(
    <button 
        className="TodoButton" onClick={
            (event)=>{
            console.log('le distste clicik al boton')
            console.log(event)
            console.log(event.target)
            }
        }
    >Agregar un nuevo Todo<div className="hoverEffect">
    <div>
    </div>
    </div>
    </button>
)

}
export {TodoBotton}