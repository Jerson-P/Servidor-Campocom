const Ingresos = require("../models/Ingresos");

exports.crearIngresos = async (req, res) => {
    

    try {
        let ingresos;

        // Creamos nuestra actividad
        ingresos = new Ingresos(req.body)

        await ingresos.save();
        res.send(ingresos);
    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error')
    }
}

exports.ObtenerIngresos = async (req, res) =>{

    try{

        const ingresos = await Ingresos.find();
        res.json(ingresos);

    }catch (error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarIngresos = async (req, res) => {
    try{
        const {fechai, nombrei, apellidosi, conceptoi, n_recibo, valori } = req.body;
        let ingresos = await Ingresos.findById(req.params.id);

    if(!ingresos) {
        res.status(404).json({ msg: 'No existe la Actividad'})
    }

    ingresos.fechai = fechai;
    ingresos.nombrei = nombrei;
    ingresos.apellidosi = apellidosi;
    ingresos.conceptoi = conceptoi;
    ingresos.n_recibo = n_recibo;
    ingresos.valori = valori;

    ingresos = await Ingresos.findOneAndUpdate({ _id: req.params.id}, ingresos, {new: true})
    res.json(ingresos);

    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error')
    }
}

exports.obtenerIngreso = async (req, res) => {
    try{
        let ingresos = await Ingresos.findById(req.params.id);

    if(!ingresos) {
        res.status(404).json({ msg: 'No existe la Actividad'})
    }

    res.json(ingresos);

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!')
    }
}

exports.eliminarIngreso = async (req, res) => {
    try{
        let ingresos = await Ingresos.findById(req.params.id);

    if(!ingresos) {
        res.status(404).json({ msg: 'No existe el ingreso!'})
    }

    await Ingresos.findOneAndRemove ({ _id: req.params.id })
    res.json({ msg: 'Ingreso eliminado con exito!'});

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!')
    }
}