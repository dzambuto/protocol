(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = factory(require('socket.io-client'), require('q'));
    } else if (typeof define === 'function' && define.amd) {
        define('protocol', ['io', 'Q'], factory);
    } else {
        root.protocol = factory(root.io, root.Q);
    }
}(this, function (io, Q) {