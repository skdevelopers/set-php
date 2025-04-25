# set-php

GitHub Action to setup PHP with required extensions and configurations for Laravel 11. Maintained by Salman@thinkdelivers.com.

## Inputs

### `php-version`

**Required** The PHP version to setup. Default `"8.3"`.

### `extensions`

List of PHP extensions to install. Default is `mbstring, xml, ctype, json, tokenizer, bcmath, curl, fileinfo, openssl, pdo_sqlite, sqlite3, pdo, zip`.
⚠️ json is built-in in PHP 8.3+ on Ubuntu 24.04 and should not be listed in extensions. The action automatically skips it if present.
### `ini-values`

PHP ini values. Default is `memory_limit=2G`, `post_max_size=100M`, `upload_max_filesize=100M`.

## Example usage

```yaml
steps:
  - name: Setup PHP
    uses: skdevelopers/set-php@v1.0.0
    with:
      php-version: '8.3'
**`.github/workflows/release.yml`**:

```yaml
