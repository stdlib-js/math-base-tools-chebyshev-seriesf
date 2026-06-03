/** @license Apache-2.0 */

'use strict';

/**
* Evaluate a Chebyshev series using single-precision floating-point arithmetic.
*
* @module @stdlib/math-base-tools-chebyshev-seriesf
*
* @example
* var chebyshevSeriesf = require( '@stdlib/math-base-tools-chebyshev-seriesf' );
*
* var v = chebyshevSeriesf( 1.0, new Float32Array( [ 1.0, 0.5 ] ) ); // 1*T_0(1/2) + 0.5*T_1(1/2)
* // returns 0.75
*
* @example
* var chebyshevSeriesf = require( '@stdlib/math-base-tools-chebyshev-seriesf' );
*
* var polyval = chebyshevSeriesf.factory( new Float32Array( [ 1.0, 0.5 ] ) );
*
* var v = polyval( 1.0 ); // 1*T_0(1/2) + 0.5*T_1(1/2)
* // returns 0.75
*
* v = polyval( 0.0 ); // 1*T_0(0) + 0.5*T_1(0)
* // returns 0.25
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
