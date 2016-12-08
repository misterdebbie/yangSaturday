/**
 * Created by debrachong on 10/15/16.
 */

/* GET all together page */
module.exports.all = function(req,res){
    res.render('all', { title: 'all together page!'});
};
/* GET shop page */
module.exports.shop = function(req,res){
    res.render('shop', { title: 'shop page!'});
};
