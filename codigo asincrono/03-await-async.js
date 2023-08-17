class Customer{
    static async get(id){
        if(id === 1){
            return {id}
        }
        throw "El cliente no existe"
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


@spinner
async function main(id){            
        //spinner->on
    const customer = await Customer.get(id)
    const invoices = await Invoices.get(customer.id)
    console.log(invoices)
    
}

async function error(cb,...args){
    try{
        
        return await cb.apply(args)
    }
    catch(err){
        throw err
    }
    
}

async function spinner(cb,id){
    try{
        //spinner on
        return await cb(id)

    }
    catch(error)
    {   
        console.log(error)
    }
    finally{
     //spinner off
    }
}
spinner(async (id)=>await error(main,id))