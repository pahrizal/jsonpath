if (typeof yy === 'undefined' || !Object.keys(yy || {}).includes('ast')) {
    yy.ast = _ast;
    _ast.initialize();
}
