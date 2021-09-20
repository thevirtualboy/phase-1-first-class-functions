function spy() {
    console.log('whatever');
}

function receivesAFunction(spy) {
    return spy();
}

function returnsANamedFunction() {
    let fn = function poop() {
        console.log('poop')
    }
    return fn;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('holy moly')
    }
}