const Pasien = require('./model');

module.exports={
    index: async(req, res)=>{
        try {
            const pasien = await Pasien.find()

            res.render('admin/pasien/view_pasien', {
                pasien
            })
        } catch (err) {
            console.log(err)
        }
    },
    viewCreate: async(req, res)=>{
        try {
            res.render('admin/pasien/create')
        } catch (err) {
            console.log(err)
        }
    },
    actionCreate: async(req, res)=>{
        try {
            const {name, tgllahir, jenis, alamat, phoneNumber, status, idPasien} = req.body
            let pasien = await Pasien({name, tgllahir, jenis, alamat, phoneNumber, status, idPasien})
            await pasien.save();
            res.redirect('/pasien')
        } catch (err) {
            console.log(err)
        }
    },
    viewEdit: async(req, res)=>{
        try {
            const {id} = req.params

            const pasien = await Pasien.findOne({_id: id})

            res.render('admin/pasien/edit', {
                pasien
            })
        } catch (err) {
            console.log(err)
        }
    },
    actionEdit : async(req, res) => {
        try {
            const { id } = req.params;
            const { name,tgllahir,jenis,alamat,phoneNumber } = req.body;

            const pasien = await Pasien.findByIdAndUpdate({
                _id: id
            }, {
                name,
                tgllahir,
                jenis,
                alamat,
                phoneNumber
            })
            res.redirect('/pasien');
        } catch (err) {
            console.log(err)
        }
    },
    actionDelete : async(req, res) => {
        try {
            const { id } = req.params
            const pasien = await Pasien.findByIdAndRemove({_id : id})
            res.redirect('/pasien'); 
        } catch (err) {
            console.log(err);
        }
    }
}