
let valorItem = 50.00
let valortotal = 0
let Quantidade = 0


function addItems(){
    
    const quantidade = document.getElementById('quantidade')
    const totalItem = document.getElementById('totalItem')
    const total= document.getElementById('total')
   
    quantidade.innerHTML = Quantidade += 1
     
    valortotal = valorItem * Quantidade
    totalItem.innerHTML = formatPrice(valortotal)
    total.innerHTML =formatPrice(valortotal)

}


function removeItem(){
    
    const quantidade = document.getElementById('quantidade')
    const totalItem = document.getElementById('totalItem')
    const total= document.getElementById('total')

    if(Quantidade <= 0){
      return
    }
    quantidade.innerHTML = Quantidade -= 1

    valortotal = valorItem * Quantidade
    totalItem.innerHTML = formatPrice(valortotal)
    total.innerHTML =formatPrice(valortotal)
}

function formatPrice(price){
   
    return new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }).format(price)
}