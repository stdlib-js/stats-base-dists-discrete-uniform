# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2026-06-03)

<section class="commits">

### Commits

<details>

-   [`b0bd12b`](https://github.com/stdlib-js/stdlib/commit/b0bd12be8db74dcde712428f3fb0086068e558d2) - **chore:** add `univariate` keyword to outliers in `stats/base/dists` [(#12507)](https://github.com/stdlib-js/stdlib/pull/12507) _(by Philipp Burckhardt)_
-   [`f59b324`](https://github.com/stdlib-js/stdlib/commit/f59b324c3c652580e17c4c4baae8168faab8af8c) - **docs:** fix typos and copy-paste errors in `stats` TypeScript declarations [(#12482)](https://github.com/stdlib-js/stdlib/pull/12482) _(by Philipp Burckhardt, Athan Reines)_
-   [`afb44ae`](https://github.com/stdlib-js/stdlib/commit/afb44ae05ba673e5c777e19761a25dd90bd2d0ac) - **docs:** fix C API parameter name in heading [(#12404)](https://github.com/stdlib-js/stdlib/pull/12404) _(by Philipp Burckhardt)_
-   [`80996a6`](https://github.com/stdlib-js/stdlib/commit/80996a67956c190a908c92e6c5902aa6182cbea9) - **chore:** align keywords with sibling `stdev` packages [(#12219)](https://github.com/stdlib-js/stdlib/pull/12219) _(by Philipp Burckhardt)_
-   [`5f6ce93`](https://github.com/stdlib-js/stdlib/commit/5f6ce933d6e8794302bf652392b22d8811eef537) - **docs:** update namespace table of contents [(#12141)](https://github.com/stdlib-js/stdlib/pull/12141) _(by stdlib-bot)_
-   [`b517ce1`](https://github.com/stdlib-js/stdlib/commit/b517ce16f647ffe2270573dff57755fe7ba69027) - **docs:** propagate description and example fixes in `stats/base/dists/*` [(#12132)](https://github.com/stdlib-js/stdlib/pull/12132) _(by Philipp Burckhardt)_
-   [`f1813da`](https://github.com/stdlib-js/stdlib/commit/f1813dabd21da054ff60d0b76c758c5c28ea0dfc) - **chore:** propagate recent fixes to sibling packages [(#11723)](https://github.com/stdlib-js/stdlib/pull/11723) _(by Philipp Burckhardt)_
-   [`187e141`](https://github.com/stdlib-js/stdlib/commit/187e141098635f0f2edf0f6f1289e06473ae7fcd) - **chore:** add missing `npm` engine constraint to `stats/base/dists/*/ctor` [(#11686)](https://github.com/stdlib-js/stdlib/pull/11686) _(by Philipp Burckhardt)_
-   [`63f5705`](https://github.com/stdlib-js/stdlib/commit/63f57057daef3619f73ca34773de66111ba61571) - **docs:** fix C example in `stats/base/dists/discrete-uniform/pmf` [(#11052)](https://github.com/stdlib-js/stdlib/pull/11052) _(by Om-A-osc)_
-   [`570b077`](https://github.com/stdlib-js/stdlib/commit/570b077ce3411575a1c45bc04c3da1b1fc827db3) - **bench:** refactor to use string interpolation in `stats/base/dists/discrete-uniform` [(#10345)](https://github.com/stdlib-js/stdlib/pull/10345) _(by Vishal Gaikwad, Athan Reines)_
-   [`f38e8a7`](https://github.com/stdlib-js/stdlib/commit/f38e8a7b433e0e9888eb57c83f4374073089ad85) - **docs:** clean-up parameters in Julia fixtures scripts _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Om-A-osc
-   Philipp Burckhardt
-   Vishal Gaikwad

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.3">

## 0.2.3 (2026-02-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2026-01-30)

<section class="features">

### Features

-   [`1d7a498`](https://github.com/stdlib-js/stdlib/commit/1d7a498fab055a69e2c7063ba80c0d59b55e4e07) - add C implementation for `stats/base/dists/discrete-uniform/logpmf` [(#4663)](https://github.com/stdlib-js/stdlib/pull/4663)
-   [`582a3fa`](https://github.com/stdlib-js/stdlib/commit/582a3fa88c2c9d375fa1384d97d1f792ccf0ee0e) - add C implementation for `stats/base/dists/discrete-uniform/pmf` [(#4664)](https://github.com/stdlib-js/stdlib/pull/4664)
-   [`373cd28`](https://github.com/stdlib-js/stdlib/commit/373cd289aed0e8c43cbdb32a4c69f02ef1c22f7a) - add C implementation for `stats/base/dists/discrete-uniform/logcdf` [(#4644)](https://github.com/stdlib-js/stdlib/pull/4644)
-   [`22812ea`](https://github.com/stdlib-js/stdlib/commit/22812ea073b11aa8d64f2085d2a00a15af9973ef) - add C implementation for `stats/base/dists/discrete-uniform/quantile` [(#4666)](https://github.com/stdlib-js/stdlib/pull/4666)
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

A total of 13 issues were closed in this release:

[#3549](https://github.com/stdlib-js/stdlib/issues/3549), [#3550](https://github.com/stdlib-js/stdlib/issues/3550), [#3551](https://github.com/stdlib-js/stdlib/issues/3551), [#3552](https://github.com/stdlib-js/stdlib/issues/3552), [#3553](https://github.com/stdlib-js/stdlib/issues/3553), [#3554](https://github.com/stdlib-js/stdlib/issues/3554), [#3555](https://github.com/stdlib-js/stdlib/issues/3555), [#3556](https://github.com/stdlib-js/stdlib/issues/3556), [#3557](https://github.com/stdlib-js/stdlib/issues/3557), [#3558](https://github.com/stdlib-js/stdlib/issues/3558), [#3559](https://github.com/stdlib-js/stdlib/issues/3559), [#3561](https://github.com/stdlib-js/stdlib/issues/3561), [#3562](https://github.com/stdlib-js/stdlib/issues/3562)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`35ce703`](https://github.com/stdlib-js/stdlib/commit/35ce70320886dd8f426225b2bd300114e7ea4c7d) - **docs:** remove duplicate words in documentation [(#9555)](https://github.com/stdlib-js/stdlib/pull/9555) _(by Shivam Mittal)_
-   [`e2efe32`](https://github.com/stdlib-js/stdlib/commit/e2efe32914d0d9dae5da34e6f7e7bf7655430710) - **chore:** rename exported variable in d.ts file to match name used in example code _(by Philipp Burckhardt)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`fc438e0`](https://github.com/stdlib-js/stdlib/commit/fc438e0edbad0689d6923d6f3edb959b96597662) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`11581aa`](https://github.com/stdlib-js/stdlib/commit/11581aaca8c3cb824cbb92c0c0f80e76890bdb20) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`07f7c05`](https://github.com/stdlib-js/stdlib/commit/07f7c0522c73e6ad9505e1d45035ae439344200d) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`9c21fd2`](https://github.com/stdlib-js/stdlib/commit/9c21fd20ef8b8a6a88abb96d80ea6d8e4c5434eb) - **test:** use .strictEqual() instead of .equal() _(by Philipp Burckhardt)_
-   [`8ea46b6`](https://github.com/stdlib-js/stdlib/commit/8ea46b662dc6e27231d250d101e33a3cf770cd77) - **test:** update descriptions to match language used in JS tests _(by Philipp Burckhardt)_
-   [`4928e74`](https://github.com/stdlib-js/stdlib/commit/4928e742f5116fb3a692be1ddba03f9c349f1c36) - **docs:** update examples _(by Athan Reines)_
-   [`237cee3`](https://github.com/stdlib-js/stdlib/commit/237cee3d11dc9edd1fb295f0959b154e86f99c51) - **docs:** update examples _(by Athan Reines)_
-   [`1903306`](https://github.com/stdlib-js/stdlib/commit/19033062ada0dacd6f3bb979748d97001aa29be7) - **style:** insert blank line _(by Athan Reines)_
-   [`1d7a498`](https://github.com/stdlib-js/stdlib/commit/1d7a498fab055a69e2c7063ba80c0d59b55e4e07) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/logpmf` [(#4663)](https://github.com/stdlib-js/stdlib/pull/4663) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`582a3fa`](https://github.com/stdlib-js/stdlib/commit/582a3fa88c2c9d375fa1384d97d1f792ccf0ee0e) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/pmf` [(#4664)](https://github.com/stdlib-js/stdlib/pull/4664) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`373cd28`](https://github.com/stdlib-js/stdlib/commit/373cd289aed0e8c43cbdb32a4c69f02ef1c22f7a) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/logcdf` [(#4644)](https://github.com/stdlib-js/stdlib/pull/4644) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
-   [`22812ea`](https://github.com/stdlib-js/stdlib/commit/22812ea073b11aa8d64f2085d2a00a15af9973ef) - **feat:** add C implementation for `stats/base/dists/discrete-uniform/quantile` [(#4666)](https://github.com/stdlib-js/stdlib/pull/4666) _(by Prashant Kumar Yadav, Philipp Burckhardt)_
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

A total of 6 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Athan Reines
-   Karan Anand
-   Philipp Burckhardt
-   Prashant Kumar Yadav
-   Shivam Mittal

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

