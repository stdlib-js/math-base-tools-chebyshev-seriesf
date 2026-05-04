<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Chebyshev Series

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate a [Chebyshev series][chebyshev-series] using single-precision floating-point arithmetic.

<section class="intro">

A [Chebyshev series][chebyshev-series] in a variable `x` can be expressed as

<!-- <equation class="equation" label="eq:chebyshev_series" align="center" raw="\sum_{i=0}^{n} c_i T_i(x/2)" alt="Chebyshev series expression."> -->

```math
\sum_{i=0}^{n} c_i T_i(x/2)
```

<!-- <div class="equation" align="center" data-raw-text="\sum_{i=0}^{n}' c_i T_i(x/2)" data-equation="eq:chebyshev_series">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/chebyshev-seriesf/docs/img/equation_chebyshev_series.svg" alt="Chebyshev series expression.">
    <br>
</div> -->

<!-- </equation> -->

where `c_n, c_{n-1}, ..., c_0` are constants and `T_i` are Chebyshev polynomials of the first kind.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
chebyshevSeriesf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-chebyshev-seriesf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var chebyshevSeriesf = require( 'path/to/vendor/umd/math-base-tools-chebyshev-seriesf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-chebyshev-seriesf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.chebyshevSeriesf;
})();
</script>
```

#### chebyshevSeriesf( x, c )

Evaluates a [Chebyshev series][chebyshev-series] having coefficients `c` at a value `x`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var v = chebyshevSeriesf( 1.0, new Float32Array( [ 1.0, 0.5 ] ) );
// returns 0.75
```

The function evaluates Chebyshev polynomials at `x/2`.

#### chebyshevSeriesf.factory( c )

Uses code generation to in-line coefficients and return a function for evaluating a [Chebyshev series][chebyshev-series] using single-precision floating-point arithmetic.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var evaluate = chebyshevSeriesf.factory( new Float32Array( [ 1.0, 0.5 ] ) );

// 0.5 * T_0(0.5) + 1.0 * T_1(0.5)
var v = evaluate( 1.0 );
// returns 0.75
```

The returned function evaluates Chebyshev polynomials at `x/2`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The value at which to evaluate a Chebyshev series is expected to reside on the interval `[-2, 2]`.
-   The coefficients `c` **must be** ordered in **descending** degree.
-   For hot code paths in which coefficients are invariant, a compiled function will be more performant than `chebyshevSeriesf()`.
-   While code generation can boost performance, its use may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-chebyshev-seriesf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create an array of random coefficients:
var coef = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});

// Evaluate the series at random values using the direct function:
var v = uniform( 100, -2.0, 2.0, {
    'dtype': 'float32'
});
var i;
for ( i = 0; i < v.length; i++ ) {
    console.log( 'f(%0.4f) = %0.4f', v[ i ], chebyshevSeriesf( v[ i ], coef ) );
}

// Generate a chebyshev series evaluation function:
var evaluate = chebyshevSeriesf.factory( coef );
var x = uniform( 100, -2.0, 2.0, {
    'dtype': 'float32'
});
logEachMap( 'f(%0.4f) = %0.4f', x, evaluate );

})();
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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-chebyshev-seriesf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-chebyshev-seriesf

[test-image]: https://github.com/stdlib-js/math-base-tools-chebyshev-seriesf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-tools-chebyshev-seriesf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-chebyshev-seriesf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-chebyshev-seriesf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-chebyshev-seriesf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-chebyshev-seriesf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-tools-chebyshev-seriesf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-tools-chebyshev-seriesf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-tools-chebyshev-seriesf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-tools-chebyshev-seriesf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-tools-chebyshev-seriesf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-tools-chebyshev-seriesf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-tools-chebyshev-seriesf/blob/main/branches.md

[chebyshev-series]: https://en.wikipedia.org/wiki/Chebyshev_polynomials#Chebyshev_series

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
