# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-05-12)

<section class="features">

### Features

-   [`3dab4d1`](https://github.com/stdlib-js/stdlib/commit/3dab4d1d097046b7665f0626af6901fa6822adeb) - add C implementation for `stats/base/dists/discrete-uniform/cdf` [(#4643)](https://github.com/stdlib-js/stdlib/pull/4643)
-   [`946e2c3`](https://github.com/stdlib-js/stdlib/commit/946e2c3b7603a12215404642580a545e641acb02) - add C implementation for `stats/base/dists/discrete-uniform/mgf` [(#4667)](https://github.com/stdlib-js/stdlib/pull/4667)
-   [`7f819f5`](https://github.com/stdlib-js/stdlib/commit/7f819f5c08ff51210dc1e5188c12c32481e6acd4) - add C implementation for `stats/base/dists/discrete-uniform/variance` [(#4567)](https://github.com/stdlib-js/stdlib/pull/4567)
-   [`69cca7b`](https://github.com/stdlib-js/stdlib/commit/69cca7b95a35f68079fb3da3c5d65c033210d347) - add C implementation for `stats/base/dists/discrete-uniform/skewness` [(#4566)](https://github.com/stdlib-js/stdlib/pull/4566)
-   [`e4ab52c`](https://github.com/stdlib-js/stdlib/commit/e4ab52c3e0d69d8544d2eba65077a36afc334781) - add C implementation for `stats/base/dists/discrete-uniform/stdev` [(#4556)](https://github.com/stdlib-js/stdlib/pull/4556)
-   [`3c05363`](https://github.com/stdlib-js/stdlib/commit/3c0536379084ed42aa48d23a26daf3a51e1efb33) - add C implementation for `stats/base/dists/discrete-uniform/kurtosis` [(#4568)](https://github.com/stdlib-js/stdlib/pull/4568)
-   [`773e934`](https://github.com/stdlib-js/stdlib/commit/773e9345811ce7fe6d910b35b9f60ccc6d1312d1) - add C implementation for `stats/base/dists/discrete-uniform/mean` [(#4530)](https://github.com/stdlib-js/stdlib/pull/4530)
-   [`9900036`](https://github.com/stdlib-js/stdlib/commit/99000366d9c3c78af1df630e49f85fc47440ee89) - add C implementation for `stats/base/dists/discrete-uniform/median` [(#4531)](https://github.com/stdlib-js/stdlib/pull/4531)
-   [`622e347`](https://github.com/stdlib-js/stdlib/commit/622e3479c4bd745e26b6ac72d0b512dc8e4595af) - add C implementation for `stats/base/dists/discrete-uniform/entropy` [(#4636)](https://github.com/stdlib-js/stdlib/pull/4636)

</section>

<!-- /.features -->

<section class="issues">

### Closed Issues

A total of 9 issues were closed in this release:

[#3549](https://github.com/stdlib-js/stdlib/issues/3549), [#3550](https://github.com/stdlib-js/stdlib/issues/3550), [#3551](https://github.com/stdlib-js/stdlib/issues/3551), [#3554](https://github.com/stdlib-js/stdlib/issues/3554), [#3555](https://github.com/stdlib-js/stdlib/issues/3555), [#3556](https://github.com/stdlib-js/stdlib/issues/3556), [#3559](https://github.com/stdlib-js/stdlib/issues/3559), [#3561](https://github.com/stdlib-js/stdlib/issues/3561), [#3562](https://github.com/stdlib-js/stdlib/issues/3562)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`f7988d3`](https://github.com/stdlib-js/stdlib/commit/f7988d3c02e0eff3bd9bd7523b5dc975bb98dc0e) - **bench:** fix `isnan` checks in `stats/base/dists` [(#5296)](https://github.com/stdlib-js/stdlib/pull/5296) _(by Karan Anand)_
-   [`d53a818`](https://github.com/stdlib-js/stdlib/commit/d53a8184c029c3df7c45a7a1a2da9ff90b4f883e) - **docs:** fix errors in the structure of READMEs in `stats/base/*` [(#5138)](https://github.com/stdlib-js/stdlib/pull/5138) _(by Aayush Khanna)_
-   [`13c0b92`](https://github.com/stdlib-js/stdlib/commit/13c0b92efadf3a6d4c83322c32ebc4071950b403) - **bench:** refactor random number generation in `stats/base/dists/discrete-uniform` [(#4887)](https://github.com/stdlib-js/stdlib/pull/4887) _(by Karan Anand)_
-   [`f75a0ce`](https://github.com/stdlib-js/stdlib/commit/f75a0cef6a3112b166dba04c13bada9763cec350) - **chore:** use excess kurtosis consistently _(by Philipp Burckhardt)_
-   [`a203308`](https://github.com/stdlib-js/stdlib/commit/a2033080838f7056796d2bd6f0096e11c25c7da4) - **chore:** add missing empty lines _(by Philipp Burckhardt)_
-   [`cc32a34`](https://github.com/stdlib-js/stdlib/commit/cc32a344ed92962e2168da1f961748f934238cf8) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`f3df15f`](https://github.com/stdlib-js/stdlib/commit/f3df15f118d563573f27d2d2b96e35b842f05a18) - **chore:** directly draw from the desired distribution instead of adding constants _(by Philipp Burckhardt)_
-   [`3dab4d1`](https://github.com/stdlib-js/stdlib/commit/3dab4d1d097046b7665f0626af6901fa6822adeb) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/cdf` [(#4643)](https://github.com/stdlib-js/stdlib/pull/4643) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`946e2c3`](https://github.com/stdlib-js/stdlib/commit/946e2c3b7603a12215404642580a545e641acb02) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/mgf` [(#4667)](https://github.com/stdlib-js/stdlib/pull/4667) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`7f819f5`](https://github.com/stdlib-js/stdlib/commit/7f819f5c08ff51210dc1e5188c12c32481e6acd4) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/variance` [(#4567)](https://github.com/stdlib-js/stdlib/pull/4567) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`69cca7b`](https://github.com/stdlib-js/stdlib/commit/69cca7b95a35f68079fb3da3c5d65c033210d347) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/skewness` [(#4566)](https://github.com/stdlib-js/stdlib/pull/4566) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`e4ab52c`](https://github.com/stdlib-js/stdlib/commit/e4ab52c3e0d69d8544d2eba65077a36afc334781) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/stdev` [(#4556)](https://github.com/stdlib-js/stdlib/pull/4556) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`3c05363`](https://github.com/stdlib-js/stdlib/commit/3c0536379084ed42aa48d23a26daf3a51e1efb33) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/kurtosis` [(#4568)](https://github.com/stdlib-js/stdlib/pull/4568) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`773e934`](https://github.com/stdlib-js/stdlib/commit/773e9345811ce7fe6d910b35b9f60ccc6d1312d1) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/mean` [(#4530)](https://github.com/stdlib-js/stdlib/pull/4530) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`9900036`](https://github.com/stdlib-js/stdlib/commit/99000366d9c3c78af1df630e49f85fc47440ee89) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/median` [(#4531)](https://github.com/stdlib-js/stdlib/pull/4531) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`622e347`](https://github.com/stdlib-js/stdlib/commit/622e3479c4bd745e26b6ac72d0b512dc8e4595af) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/entropy` [(#4636)](https://github.com/stdlib-js/stdlib/pull/4636) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`31fd427`](https://github.com/stdlib-js/stdlib/commit/31fd42744ec5d7073041f97c6f72350b8005c0fc) - **style:** remove unwanted empty lines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Karan Anand
-   Philipp Burckhardt
-   Prashant Kumar Yadav

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-07-28)

<section class="commits">

### Commits

<details>

-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`81ca3ab`](https://github.com/stdlib-js/stdlib/commit/81ca3ab33585150e98a402b3e6d57beb1ec36864) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`d5fa8e8`](https://github.com/stdlib-js/stdlib/commit/d5fa8e8a6267a837a25a7027e9fe3e847bc2d1c5) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`ce7e336`](https://github.com/stdlib-js/stdlib/commit/ce7e3367c0f9477773fe76dd0eca64dc6ad33c02) - **docs:** update equations _(by Philipp Burckhardt)_
-   [`37f032d`](https://github.com/stdlib-js/stdlib/commit/37f032d4a571f667ea99f6f52f60b5d736c627f3) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

