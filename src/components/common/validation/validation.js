export const required = (value)=>{
return value?undefined:"Введите значение"
}


export const maxSymbolsCreator=(symblosCount)=>
    (value)=>{
        return value&&value.length>symblosCount?`Количество символов не должно быть больше ${symblosCount}`:undefined
}