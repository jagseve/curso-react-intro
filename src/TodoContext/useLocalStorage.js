import React from 'react';
function useLocalStorage(itemName, initialValue){
  
  const [item, setItem]= React.useState(initialValue);
  const [loading, setLoading]= React.useState(true);
  const [error, setError]= React.useState(false);
  
  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem= localStorage.getItem(itemName);
        let parsedItem;
  
        if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem=initialValue;
        } else{ 
          parsedItem=JSON.parse(localStorageItem);
          setItem(parsedItem)
        }
        setLoading(false);
      }catch(error){
        setLoading(false)
        setError(true);
      }
    },2000)},[]);
    
    const saveItem =(newItem)=>{
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem)
    };
  
    return {item, saveItem,loading,error};
  }

  export {useLocalStorage}

/*const defaultTodo =[
{text: 'Cortar cebolla', completed: true},
{text: 'Llorar con la Llorona', completed: false},{text: 'Terminar el curso de React.js', completed: false},
{text: 'LALALALALALA', completed: true},
{text: 'Realizar estados ligados entre funciones pares a hijas', completed: true}
]*/

/*localStorage.setItem('TODOS_V1', defaultTodo);
localStorage.removeItem('TODOS_V1');*/