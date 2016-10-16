/**
 * Created by debrachong on 10/15/16.
 */
/* GET home page */
module.exports.storedit = function(req,res){
    res.render('home', { title: 'store edits page'});
};
module.exports.bonusedit = function(req,res){
    res.render('home', { title: 'bonus edits page'});
};
