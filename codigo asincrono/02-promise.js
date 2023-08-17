class Customer{
    static get(id){
        return new Promise((resolve,reject)=>{
            if(id===1){
                resolve({id})
            }
            else{
                reject("El cliente no existe")
            }
        })
    }
}

class Invoices{
    static get(clientId){
        return new Promise((resolve,reject)=>{
            if(clientId===1){
                resolve({clientId,invoices:[]})
            }
            else{
                reject("El cliente no tiene facturas")
            }
        })
    }
}

//resolve->then(n)
//reject->catch(1)



function main(id){
    Customer.get(id)
        .then(customer=>Invoices.get(customer.id))
        .then(invoices=>console.log(invoices))
        .catch(err=>console.log(err))
}