/** @license Apache-2.0 */

'use strict';

/**
* Create a function for applying a strided function to a provided ndarray.
*
* @module @stdlib/ndarray-base-nullary-strided1d-dispatch-factory
*
* @example
* var base = require( '@stdlib/blas-ext-base-ndarray-gsorthp' );
* var dtypes = require( '@stdlib/ndarray-dtypes' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var factory = require( '@stdlib/ndarray-base-nullary-strided1d-dispatch-factory' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'all' );
*
* var table = {
*     'default': base
* };
* var sorthp = factory( table, [ idt ], odt );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var order = scalar2ndarray( 1.0, {
*     'dtype': 'generic'
* });
*
* var out = sorthp( x, order );
* // returns <ndarray>[ -3.0, -1.0, 2.0 ]
*
* var bool = ( out === x );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
