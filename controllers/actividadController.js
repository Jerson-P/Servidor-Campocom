const Actividad = require("../models/Actividad");

exports.crearActividad = async (req, res) => {


    try {
        let actividad;

        // Creamos nuestra actividad
        actividad = new Actividad(req.body)

        await actividad.save();
        res.send(actividad);

    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error')
    }
}

exports.ObtenerActividad = async (req, res) =>{

    try{

        const actividad = await Actividad.find();
        res.json(actividad);

    }catch (error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarActividad = async (req, res) => {
    try{
        const {fechaa, descripciona, clientea, ubicaciona, tecnicoa } = req.body;
        let actividad = await Actividad.findById(req.params.id);

    if(!actividad) {
        res.status(404).json({ msg: 'No existe la Actividad'})
    }

    actividad.fechaa = fechaa;
    actividad.descripciona = descripciona;
    actividad.clientea = clientea;
    actividad.ubicaciona = ubicaciona;
    actividad.tecnicoa = tecnicoa;

    actividad = await Actividad.findOneAndUpdate({ _id: req.params.id}, actividad, {new: true})
    res.json(actividad);

    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error')
    }
}

exports.obtenerActivida = async (req, res) => {
    try{
        let actividad = await Actividad.findById(req.params.id);

    if(!actividad) {
        res.status(404).json({ msg: 'No existe la Actividad'})
    }

    res.json(actividad);

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!')
    }
}

exports.eliminarActividad = async (req, res) => {
    try{
        let actividad = await Actividad.findById(req.params.id);

    if(!actividad) {
        res.status(404).json({ msg: 'No existe la actividad!'})
    }

    await Actividad.findOneAndRemove ({ _id: req.params.id })
    res.json({ msg: 'Activdad eliminada con exito!'});

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!')
    }
}