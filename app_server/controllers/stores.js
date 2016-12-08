/**
 * Created by debrachong on 10/15/16.
 */
/* GET amazon edit page */
module.exports.amazonedit = function(req,res){
    res.render('amazon', { title: 'amazon edits page'});
};
/* GET nordstrom edit page */
module.exports.nordstromedit = function(req,res){
    res.render('nordstrom', { title: 'nordstrom edits page'});
};
