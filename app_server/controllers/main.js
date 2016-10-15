/**
 * Created by debrachong on 10/15/16.
 */
/* GET home page */
module.exports.index = function(req,res){
    res.render('index', { title: 'the home page'});
};