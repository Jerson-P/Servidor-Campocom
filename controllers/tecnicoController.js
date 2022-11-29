const Tecnico = require("../models/Tecnico");

exports.crearTecnicos = async (req, res) => {
    

    try {
        let tecnicos;

        // Creamos nuestra actividad
        tecnicos = new Tecnico(req.body)

        await tecnicos.save();
        res.send(tecnicos);

    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error')
    }
}

exports.ObtenerTecnico = async (req, res) =>{

    try{

        const tecnico = await Tecnico.find();
        res.json(tecnico);

    }catch (error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.ActualizarTecnico = async (req, res) => {
    try{
        const {identificaciont, nombret, apellidot, cargot, emailt, passwordt } = req.body;
        let tecnico = await Tecnico.findById(req.params.id);

    if(!tecnico) {
        res.status(404).json({ msg: 'No existe la Actividad'})
    }

    tecnico.identificaciont = identificaciont;
    tecnico.nombret = nombret;
    tecnico.apellidot = apellidot;
    tecnico.cargot = cargot;
    tecnico.emailt = emailt;
    tecnico.passwordt = passwordt;

    tecnico = await Tecnico.findOneAndUpdate({ _id: req.params.id}, tecnico, {new: true})
    res.json(tecnico);

    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error')
    }
}

exports.obtenerTecnicos = async (req, res) => {
    try{

        let tecnico = await Tecnico.findById(req.params.id);

    if(!tecnico) {
        res.status(404).json({ msg: 'No existe el Tecnico'})
    }

    res.json(tecnico);

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!')
    }
}

exports.eliminarTecnico = async (req, res) => {
    try{

        let tecnico = await Tecnico.findById(req.params.id);

    if(!tecnico) {
        res.status(404).json({ msg: 'No existe el tecnico!'})
    }

    await Tecnico.findOneAndRemove ({ _id: req.params.id })
    res.json({ msg: 'Tecnico eliminado con exito!'});

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!')
    }
}