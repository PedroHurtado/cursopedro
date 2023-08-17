class Customer{
    static get(id,cb){
        if(id===1){
            cb(null,{id})
        }
        else{
            cb("el cliente no existe", null)
        }
    }
}

class Invoices{
    static get(clientId,cb){
        if(clientId===1){
            cb(null,{clientId, invoices:[]})
        }
        else{
            cb("el cliente no tiene facturas", null)
        }
    }
}

function main(id){
    Customer.get(id,function(error,data){
        if(error){
            console.log(error)
        }
        else{
            Invoices.get(data.id, function(error,data){
                if(error){
                    console.log(error)
                }
                else{
                    console.log(data)
                }
            })
        }
    })
}

main(1) //ok
main(2) //error