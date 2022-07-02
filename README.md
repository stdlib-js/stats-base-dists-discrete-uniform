<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Discrete Uniform

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Discrete uniform distribution.



<section class="usage">

## Usage

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { DiscreteUniform, cdf, entropy, kurtosis, logcdf, logpmf, mean, median, mgf, pmf, quantile, skewness, stdev, variance } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform@esm/index.mjs';
```

#### discreteUniform

Discrete uniform distribution.

```javascript
var dist = discreteUniform;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pmf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, a, b )`][@stdlib/stats/base/dists/discrete-uniform/cdf]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, a, b )`][@stdlib/stats/base/dists/discrete-uniform/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function for a discrete uniform distribution.</span>
-   <span class="signature">[`logpmf( x, a, b )`][@stdlib/stats/base/dists/discrete-uniform/logpmf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability mass function (PMF) for a discrete uniform distribution.</span>
-   <span class="signature">[`mgf( t, a, b )`][@stdlib/stats/base/dists/discrete-uniform/mgf]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pmf( x, a, b )`][@stdlib/stats/base/dists/discrete-uniform/pmf]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution probability mass function (PMF).</span>
-   <span class="signature">[`quantile( p, a, b )`][@stdlib/stats/base/dists/discrete-uniform/quantile]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( a, b )`][@stdlib/stats/base/dists/discrete-uniform/entropy]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution entropy.</span>
-   <span class="signature">[`kurtosis( a, b )`][@stdlib/stats/base/dists/discrete-uniform/kurtosis]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution excess kurtosis.</span>
-   <span class="signature">[`mean( a, b )`][@stdlib/stats/base/dists/discrete-uniform/mean]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution expected value.</span>
-   <span class="signature">[`median( a, b )`][@stdlib/stats/base/dists/discrete-uniform/median]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution median.</span>
-   <span class="signature">[`skewness( a, b )`][@stdlib/stats/base/dists/discrete-uniform/skewness]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution skewness.</span>
-   <span class="signature">[`stdev( a, b )`][@stdlib/stats/base/dists/discrete-uniform/stdev]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution standard deviation.</span>
-   <span class="signature">[`variance( a, b )`][@stdlib/stats/base/dists/discrete-uniform/variance]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [discrete uniform][discrete-uniform-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`DiscreteUniform( [a, b] )`][@stdlib/stats/base/dists/discrete-uniform/ctor]</span><span class="delimiter">: </span><span class="description">discrete uniform distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var DiscreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform' ).DiscreteUniform;

var dist = new DiscreteUniform( 2, 4 );

var y = dist.pmf( 3, 0 );
// returns ~0.333
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform@esm/index.mjs';

console.log( objectKeys( discreteUniform ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-discrete-uniform.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-discrete-uniform

[test-image]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-discrete-uniform/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-discrete-uniform?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-discrete-uniform.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-discrete-uniform/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-discrete-uniform/main/LICENSE

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/discrete-uniform/ctor]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-ctor/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/entropy]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-entropy/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/kurtosis]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-kurtosis/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/mean]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-mean/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/median]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-median/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/skewness]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-skewness/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/stdev]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-stdev/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/variance]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-variance/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/cdf]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-cdf/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/logcdf]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logcdf/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/logpmf]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logpmf/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/mgf]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-mgf/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/pmf]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-pmf/tree/esm

[@stdlib/stats/base/dists/discrete-uniform/quantile]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-quantile/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
