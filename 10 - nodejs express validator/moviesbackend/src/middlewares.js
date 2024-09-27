function mw1(req, res, next){
    console.log('mw1');
    req.body.name = 'EN NY FILM';
    next();
}
function mw2(req, res, next){
    console.log('mw2');
    console.log(req);

    
    next();
}
function mw3(req, res, next){
    console.log('mw3');
    next();
}

export {mw1, mw2, mw3};