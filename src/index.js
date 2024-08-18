
let valorItem = 50.00
let valortotal = 0
let Quantidade = 0


function addItems(){
    
    const quantidade = document.getElementById('quantidade')
    const totalItem = document.getElementById('totalItem')
    const total= document.getElementById('total')
   
    quantidade.innerHTML = Quantidade += 1
     
    valortotal = valorItem * Quantidade
    totalItem.innerHTML = valortotal
    total.innerHTML = valortotal
}


function removeItem(){
    
    const quantidade = document.getElementById('quantidade')
    const totalItem = document.getElementById('totalItem')
    const total= document.getElementById('total')
    quantidade.innerHTML = Quantidade -= 1

    valortotal = valorItem * Quantidade
    totalItem.innerHTML = valortotal
    total.innerHTML = valortotal
}