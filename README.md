# set-php

GitHub Action to setup PHP with required extensions and configurations for Laravel 11. Maintained by Salman@skdevelopers.

## Inputs

### `php-version`

**Required** The PHP version to setup. Default `"8.2"`.

### `extensions`

List of PHP extensions to install. Default is `mbstring, xml, ctype, json, tokenizer, bcmath, curl, fileinfo, openssl, pdo_sqlite, sqlite3, pdo, zip`.

### `ini-values`

PHP ini values. Default is `memory_limit=2G`, `post_max_size=100M`, `upload_max_filesize=100M`.

## Example usage

```yaml
steps:
  - name: Setup PHP
    uses: skdevelopers/set-php@v82
    with:
      php-version: '8.2'
