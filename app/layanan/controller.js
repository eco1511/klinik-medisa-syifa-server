const Layanan = require('./model')

module.exports = {
    index: async(req, res) =>{
        try{
            const layanan = await Layanan.find()

            res.render('admin/layanan/view_layanan', {
                layanan
            })
        }catch(err){
            console.log(err)
        }
    },
    viewCreate : async(req, res) => {
        try{
            res.render('admin/layanan/create', {
            })
        }catch(err){
            console.log(err)
        }
    },

    actionCreate : async(req,res) => {
        try{
            const { name } = req.body
            let layanan = await Layanan({name})
            await layanan.save();

            res.redirect('/layanan');

        }catch(err){
            console.log(err);
        }
    },

    viewEdit : async(req, res) => {
        try {
            const { id } = req.params

            const layanan = await Layanan.findOne({_id : id})
            res.render('admin/layanan/edit', {
                 layanan,
            });
        } catch (err) {
            console.log(err)
        }
    },

    actionEdit : async(req, res) => {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const layanan = await Layanan.findByIdAndUpdate({
                _id: id
            }, {
                name
            })
            res.redirect('/layanan');
        } catch (err) {
            console.log(err);
        }
    },

    actionDelete : async(req, res) => {
        try {
            const { id } = req.params
            const layanan = await Layanan.findByIdAndRemove({_id : id})
            res.redirect('/layanan'); 
        } catch (err) {
            console.log(err)
        }
    }
}