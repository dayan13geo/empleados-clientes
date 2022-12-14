const crypto = require('crypto');


class PagosService{

    constructor(){
        this.pagos=[];
        this.generate(10);

    }

    async generate(limite){
        for (let index = 0; index < limite ; index ++)
        this.pagos.push({
                id: crypto.randomUUID(),
                cliente: 'pagos' + index,
                nombre: 'pagos' + index,
                telefono: 10 + Math.floor(Math.random()*190),
                monto: 10 + Math.floor(Math.random()*190)
        })

    }

    async  create(data){
    const nuevoPago = {
        id: crypto.randomUUID(),
        ...data
      };
      this.pagos.push(nuevoPago);
      return nuevoPago;

    }

    async find(){
    return this.pagos;
   }

   async findOne(id){
     return this.pagos.find(pago => {
        return pago.id === id;
     });
   }

   async  update(id, changes){
    const index = this.pagos.findIndex(pago =>{
        return pago.id === id;
      });
      if (index === -1){
        throw new Error('pago no encontrado');
      }
      const pago = this.pagos[index];
      this.pagos[index] = {
        ...pago,
        ...changes
      };
      return this.pagos[index];
   }
   async  delete(id){
    const index = this.pagos.findIndex(pago =>{
        return pago.id === id;
      });
      if (index === -1){
        throw new Error('pago no encontrado');
      }
      this.pagos.splice(index,1);
      return { id };
   }
  }

  module.exports= PagosService;
