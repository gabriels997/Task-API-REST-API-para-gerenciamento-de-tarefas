import mongoose from "mongoose";

const vendaMensalSchema = new mongoose.Schema({
    mes: Number,
    valorVendido: Number,
})

// Para usar o model, precisamos exportar ele
export default mongoose.model('VendaMensal', vendaMensalSchema);