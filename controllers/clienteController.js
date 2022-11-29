const Cliente = require("../models/Cliente");

exports.crearCliente = async (req, res) => {
    

    try {
        let cliente;

        // Creamos nuestra actividad
        cliente = new Cliente(req.body)

        await cliente.save();
        res.send(cliente);

    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}

exports.ObtenerCliente = async (req, res) =>{

    try{

        const cliente = await Cliente.find();
        res.json(cliente);

    }catch (error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarCliente = async (req, res) => {
    try{
        const {cedulac, nombrec, apellidosc, municipio, ubicacion, c_llegar,
               telefonoc, emailc, precioc, fecha_i, tip_servicio, c_ubicacion,
               nodo, sectorial, pppoe, ip_antena} = req.body;
        let cliente = await Cliente.findById(req.params.id);

    if(!cliente) {
        res.status(404).json({ msg: 'No existe la Actividad'})
    }

    cliente.cedulac = cedulac;
    cliente.nombrec = nombrec;
    cliente.apellidosc = apellidosc;
    cliente.municipio = municipio;
    cliente.ubicacion = ubicacion;
    cliente.c_llegar = c_llegar;
    cliente.telefonoc = telefonoc;
    cliente.emailc = emailc;
    cliente.precioc = precioc;
    cliente.fecha_i = fecha_i;
    cliente.tip_servicio = tip_servicio;
    cliente.c_ubicacion = c_ubicacion;
    cliente.nodo = nodo;
    cliente.sectorial = sectorial;
    cliente.pppoe = pppoe;
    cliente.ip_antena = ip_antena;


    cliente = await Cliente.findOneAndUpdate({ _id: req.params.id}, cliente, {new: true})
    res.json(cliente);

    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error')
    }
}

exports.obtenerclientes = async (req, res) => {
    try{
        
        let cliente = await Cliente.findById(req.params.id);

    if(!cliente) {
        res.status(404).json({ msg: 'No existe la Actividad'})
    }

    res.json(cliente);

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!')
    }
}

exports.eliminarCliente = async (req, res) => {
    try{
        
        let cliente = await Cliente.findById(req.params.id);

    if(!cliente) {
        res.status(404).json({ msg: 'No existe el cliente!'})
    }

    await Cliente.findOneAndRemove ({ _id: req.params.id })
    res.json({ msg: 'Cliente eliminado con exito!'});

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!')
    }
}