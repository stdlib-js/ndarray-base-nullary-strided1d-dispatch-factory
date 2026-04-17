# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2026-04-17)

<section class="features">

### Features

-   [`142964b`](https://github.com/stdlib-js/stdlib/commit/142964bca2c6774129f0807bcb9786ebc373646d) - refactor declarations to satisfy TS's structural typing

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`d4710cd`](https://github.com/stdlib-js/stdlib/commit/d4710cd4279abf2e1e8383ce0e1bfbfadf4b609a) - improve type specificity with overloads

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`142964b`](https://github.com/stdlib-js/stdlib/commit/142964bca2c6774129f0807bcb9786ebc373646d): add additional type parameters

    -   To migrate, users should update their signatures according to the
        types of the additional array arguments provided to the strided
        function. For fixed arity strided function wrappers, the previous
        declarations would choke, as they expected such wrappers to be
        variadic in the number of accepted arrays. This commit rectifies
        that by enumerating various fixed array arity signatures.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`13ec30d`](https://github.com/stdlib-js/stdlib/commit/13ec30d69ff91423504ba76bf5de59b0322ff8db) - **bench:** refactor to use string interpolation in `@stdlib/ndarray-base` [(#11435)](https://github.com/stdlib-js/stdlib/pull/11435) _(by Karan Anand)_
-   [`d1a105c`](https://github.com/stdlib-js/stdlib/commit/d1a105c74fb2d139c4e6aba1b4aee6188c2aea64) - **test:** update tests to align with increased specificity _(by Athan Reines)_
-   [`d4710cd`](https://github.com/stdlib-js/stdlib/commit/d4710cd4279abf2e1e8383ce0e1bfbfadf4b609a) - **fix:** improve type specificity with overloads _(by Athan Reines)_
-   [`142964b`](https://github.com/stdlib-js/stdlib/commit/142964bca2c6774129f0807bcb9786ebc373646d) - **feat:** refactor declarations to satisfy TS's structural typing _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Karan Anand

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2026-02-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2026-01-31)

<section class="features">

### Features

-   [`724283b`](https://github.com/stdlib-js/stdlib/commit/724283b0bc5d2eb8bf48491c954c6a119330c1f5) - add `ndarray/base/nullary-strided1d-dispatch-factory` [(#7828)](https://github.com/stdlib-js/stdlib/pull/7828)

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`f709450`](https://github.com/stdlib-js/stdlib/commit/f70945029cc35797e0af5ec1de2fda369b5c222a) - **docs:** correct grammar in JSDoc comments _(by Philipp Burckhardt)_
-   [`724283b`](https://github.com/stdlib-js/stdlib/commit/724283b0bc5d2eb8bf48491c954c6a119330c1f5) - **feat:** add `ndarray/base/nullary-strided1d-dispatch-factory` [(#7828)](https://github.com/stdlib-js/stdlib/pull/7828) _(by Muhammad Haris, Athan Reines, stdlib-bot)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Muhammad Haris
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

