function cats(cat1){

    return cat1;
}

function receivesAFunction (cats){

    var cat1;
    return cats(cat1);


}

function returnsANamedFunction (){

    return cats;

}

function returnsAnAnonymousFunction(){

    return function(){console.log('derp');}
}