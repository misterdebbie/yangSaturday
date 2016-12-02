/**
 * Created by debrachong on 10/15/16.
 */
/* GET home page */
module.exports.home = function(req,res){
    res.render('home', { title: 'the home page!'});
};