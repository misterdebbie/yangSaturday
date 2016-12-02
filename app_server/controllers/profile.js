/**
 * Created by debrachong on 12/2/16.
 */
/* GET home page */
module.exports.createUser = function(req,res){
    res.render('profile', { title: 'new user page'});
};