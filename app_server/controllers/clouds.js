/**
 * Created by debrachong on 10/15/16.
 */
/* GET home page */
module.exports.home = function(req,res){
    res.render('home', { title: 'the home page!'});
};
/* GET home page */
module.exports.art = function(req,res){
    res.render('art', { title: 'art page!'});
};
/* GET home page */
module.exports.health = function(req,res){
    res.render('health', { title: 'health page!'});
};
/* GET home page */
module.exports.readmes = function(req,res){
    res.render('readme', { title: 'read this stuff page!'});
};