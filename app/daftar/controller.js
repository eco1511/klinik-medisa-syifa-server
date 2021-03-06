const Daftar = require('./model');
const Pasien = require('../pasien/model');
const Layanan = require('../layanan/model');
module.exports = {
    index: async(req, res) => {
        try {
            const daftar = await Daftar.find()
            .populate('pasien')
            .populate('layanan')

            res.render('admin/daftar/view_daftar', {
                daftar,
            });
        } catch (err) {
            console.log(err)
        }
    },
    
    viewCreate : async(req, res) => {
        try{
            const pasien = await Pasien.find();
            const layanan = await Layanan.find();

            res.render('admin/daftar/create', {
                pasien,
                layanan,
            })
        }catch(err){
            console.log(err)
        }
    },

    actionCreate : async(req,res) => {
        try{
            const { usia, alergi, tensiDarah, suhu, respiratoryRate, pasien, layanan  } = req.body

                const daftar = new Daftar({
                    usia,
                    alergi,
                    tensiDarah,
                    suhu,
                    respiratoryRate,
                    pasien,
                    layanan,
                })
                
                //console.log(daftar);
                
                await daftar.save();

                res.redirect('/');
            
        }catch(err){
            console.log(err);
        }
    },

    viewEdit : async(req, res) => {
        try {
            const { id } = req.params

            const daftar = await Daftar.findOne({_id : id})
            .populate([
                {
                path: 'pasien',
                select: 'name tgllahir'
                }
            ])
            .populate('layanan')

            const pasien = await Pasien.find();
            console.log(pasien);
            const layanan = await Layanan.find();

            res.render('admin/daftar/edit', {
                usia,
                alergi,
                tensiDarah,
                suhu,
                respiratoryRate,
                pasien,
                layanan
            });

        } catch (err) {
            console.log(err)
        }
    },

    actionEdit : async(req, res) => {
        try {
            const { id } = req.params;
            const { usia, alergi, tensiDarah, suhu, respiratoryRate, pasien, layanan } = req.body;

            
                await Daftar.findOneAndUpdate({
                    _id: id
                }, {
                    usia,
                    alergi,
                    tensiDarah,
                    suhu,
                    respiratoryRate,
                    pasien,
                    layanan
                })

                res.redirect('/daftar');
        } catch (err) {
            console.log(err);
        }
    },

    actionDelete : async(req, res) => {
        try {
            const { id } = req.params
            const daftar = await Daftar.findByIdAndRemove({
                _id : id
            });
            res.redirect('/daftar'); 
        } catch (err) {
            console.log(err)
        }
    },

    actionStatus : async(req, res) => {
        try {
            const { id } = req.params;

            const daftar = await Daftar.findOne({_id: id})

            let status = daftar.status === 'Y' ? 'N' : 'Y';

            await Daftar.findOneAndUpdate({
                _id: id
            }, {
                status
            })
            res.redirect('/daftar'); 
            
        } catch (err) {
            console.log(err)
        }
    }
}