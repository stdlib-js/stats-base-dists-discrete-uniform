/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace discreteUniform
*/
var discreteUniform = {};

/**
* @name cdf
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/cdf}
*/
setReadOnly( discreteUniform, 'cdf', require( '@stdlib/stats-base-dists-discrete-uniform-cdf/dist' ) );

/**
* @name DiscreteUniform
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/ctor}
*/
setReadOnly( discreteUniform, 'DiscreteUniform', require( '@stdlib/stats-base-dists-discrete-uniform-ctor/dist' ) );

/**
* @name entropy
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/entropy}
*/
setReadOnly( discreteUniform, 'entropy', require( '@stdlib/stats-base-dists-discrete-uniform-entropy/dist' ) );

/**
* @name kurtosis
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/kurtosis}
*/
setReadOnly( discreteUniform, 'kurtosis', require( '@stdlib/stats-base-dists-discrete-uniform-kurtosis/dist' ) );

/**
* @name logcdf
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/logcdf}
*/
setReadOnly( discreteUniform, 'logcdf', require( '@stdlib/stats-base-dists-discrete-uniform-logcdf/dist' ) );

/**
* @name logpmf
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/logpmf}
*/
setReadOnly( discreteUniform, 'logpmf', require( '@stdlib/stats-base-dists-discrete-uniform-logpmf/dist' ) );

/**
* @name mean
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/mean}
*/
setReadOnly( discreteUniform, 'mean', require( '@stdlib/stats-base-dists-discrete-uniform-mean/dist' ) );

/**
* @name median
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/median}
*/
setReadOnly( discreteUniform, 'median', require( '@stdlib/stats-base-dists-discrete-uniform-median/dist' ) );

/**
* @name mgf
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/mgf}
*/
setReadOnly( discreteUniform, 'mgf', require( '@stdlib/stats-base-dists-discrete-uniform-mgf/dist' ) );

/**
* @name pmf
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/pmf}
*/
setReadOnly( discreteUniform, 'pmf', require( '@stdlib/stats-base-dists-discrete-uniform-pmf/dist' ) );

/**
* @name quantile
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/quantile}
*/
setReadOnly( discreteUniform, 'quantile', require( '@stdlib/stats-base-dists-discrete-uniform-quantile/dist' ) );

/**
* @name skewness
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/skewness}
*/
setReadOnly( discreteUniform, 'skewness', require( '@stdlib/stats-base-dists-discrete-uniform-skewness/dist' ) );

/**
* @name stdev
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/stdev}
*/
setReadOnly( discreteUniform, 'stdev', require( '@stdlib/stats-base-dists-discrete-uniform-stdev/dist' ) );

/**
* @name variance
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/variance}
*/
setReadOnly( discreteUniform, 'variance', require( '@stdlib/stats-base-dists-discrete-uniform-variance/dist' ) );


// EXPORTS //

module.exports = discreteUniform;
