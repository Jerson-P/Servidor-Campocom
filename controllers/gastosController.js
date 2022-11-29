const Gastos = require("../models/Gastos");

exports.crearGasto = async (req, res) => {
    

    try {
        let gastos;

        // Creamos nuestra actividad
        gastos = new Gastos(req.body)

        await gastos.save();
        res.send(gastos);

    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error')
    }
}

exports.ObtenerGastos = async (req, res) =>{

    try{

        const gastos = await Gastos.find();
        res.json(gastos);

    }catch (error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarGastos = async (req, res) => {
    try{
        const {fechag, indentificaciong, nombreg, apellidosg, mes_canceladog, conceptog, valorg } = req.body;
        let gastos = await Gastos.findById(req.params.id);

    if(!gastos) {
        res.status(404).json({ msg: 'No existe la Actividad'})
    }

    gastos.fechag = fechag;
    gastos.indentificaciong = indentificaciong;
    gastos.nombreg = nombreg;
    gastos.apellidosg = apellidosg;
    gastos.mes_canceladog = mes_canceladog;
    gastos.conceptog = conceptog;
    gastos.valorg = valorg;

    gastos = await Gastos.findOneAndUpdate({ _id: req.params.id}, gastos, {new: true})
    res.json(gastos);

    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error')
    }
}

exports.obtenerGasto = async (req, res) => {
    try{
        let gastos = await Gastos.findById(req.params.id);

    if(!gastos) {
        res.status(404).json({ msg: 'No existe la Actividad'})
    }

    res.json(gastos);

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!')
    }
}

exports.eliminarGasto = async (req, res) => {
    try{
        let gastos = await Gastos.findById(req.params.id);

    if(!gastos) {
        res.status(404).json({ msg: 'No existe el gasto!'})
    }

    await Gastos.findOneAndRemove ({ _id: req.params.id })
    res.json({ msg: 'Gasto eliminado con exito!'});

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!')
    }
}