# DKSwork
## Pre-Deployment Checklist
### Requirement Analysis
### Environment Preparation
1. Set up development, testing, and production environments.
* Operating System (64-bit)
Ubuntu 22.04 LTS (recommended)
Ubuntu 20.04 LTS
* Webserver
Apache 2.4
nginx
* Php Runtime
PHP 8.2
2. Ensure necessary hardware and software are available
* Minimum of 128MB RAM per process, and we recommend a minimum of 512MB RAM per process.
* CPU Architecture and OS: A 64-bit CPU, OS and PHP is required for DKSwork to run well.
### Version Control
DKSWork: https://git.dkviet.com/an.nguyen/nextcloud -b main
5. Node version 18+
### Database Preparation
1. Database
* MySQL 8.0+ or MariaDB 10.3/10.5/10.6 (recommended)/10.11
* Oracle Database 11g (only as part of an enterprise subscription)
* PostgreSQL 12/13/14/15/16
### Dependency Management
1. List all dependencies
* autosize: ^6.0.1,
* backbone: ^1.4.1,
* blueimp-md5: ^2.19.0,
* browserslist-useragent-regexp: ^4.0.0,
* camelcase: ^6.3.0,
* cancelable-promise: ^4.3.1,
* clipboard: ^2.0.11,
* colord: ^2.9.3,
* core-js: ^3.24.0,
* davclient.js: github:owncloud/davclient.js.git#0.2.2,
* debounce: ^1.2.1,
* dompurify: ^2.3.6,
* escape-html: ^1.0.3,
* focus-trap: ^7.4.0,
* focus-visible: ^5.2.0,
* handlebars: ^4.7.7,
* ical.js: ^1.4.0,
* is-svg: ^5.0.0,
* jquery: ~3.6,
* jquery-migrate: ~3.4,
* jquery-ui: ^1.13.2,
* jquery-ui-dist: ^1.13.2,
* libphonenumber-js: ^1.10.26,
* lodash: ^4.17.21,
* marked: ^4.3.0,
* moment: ^2.29.4,
* moment-timezone: ^0.5.43,
* natural-orderby: ^3.0.2,
* nextcloud-vue-collections: ^0.10.0,
* node-vibrant: ^3.1.6,
* p-limit: ^4.0.0,
* p-queue: ^7.3.0,
* path: ^0.12.7,
* pinia: ^2.0.30,
* query-string: ^8.1.0,
* regenerator-runtime: ^0.13.9,
* select2: 3.5.1,
* snap.js: ^2.0.9,
* strengthify: github:nextcloud/strengthify#0.5.9,
* throttle-debounce: ^5.0.0,
* underscore: 1.13.6,
* url-search-params-polyfill: ^8.1.1,
* v-click-outside: ^3.2.0,
* v-tooltip: ^2.1.3,
* vue: ^2.7.14,
* vue-click-outside: ^1.1.0,
* vue-cropperjs: ^4.2.0,
* vue-frag: ^1.4.2,
* vue-infinite-loading: ^2.4.5,
* vue-localstorage: ^0.6.2,
* vue-material-design-icons: ^5.0.0,
* vue-multiselect: ^2.1.6,
* vue-router: ^3.6.5,
* vue-virtual-scroller: ^1.1.2,
* vuedraggable: ^2.24.3,
* vuex: ^3.6.2,
* vuex-router-sync: ^5.0.0,
* webdav: ^5.0.0
## Deployment Checklist
### Code Review and Testing
---
### Configuration Management 
All config(database, debug mode....) in config.php
### Build Process
1. git clone https://git.dkviet.com/an.nguyen/nextcloud. -b main
2. cd DKSwork
3. npm i && npm run build
4. composer i
5. git submodule update --init
### Deployment Execution
1. requirement Apache 2.4, database is mysql or mariadb and node js 18+ on ubuntu 20.04 or 22.04
2. create user database and database on server
3. create dkswork.conf at /etc/apache2/sites-available/ directory.
4. past the config text at dkswork.conf
* <VirtualHost *:80>
        DocumentRoot "/var/www/dkswork"
        ServerName [your domain]

        ErrorLog ${APACHE_LOG_DIR}/dkswork.error
        CustomLog ${APACHE_LOG_DIR}/dkswork.access combined

        <Directory /var/www/dkswork/>
            Require all granted
            Options FollowSymlinks MultiViews
            AllowOverride All

           <IfModule mod_dav.c>
               Dav off
           </IfModule>

        SetEnv HOME /var/www/dkswork
        SetEnv HTTP_HOME /var/www/dkswork
        Satisfy Any

       </Directory>

  </VirtualHost>
5. start apache
6. sudo chown www-data:www-data /var/www/dkswork/ -R
6. cd /var/www/
7. git clone https://git.dkviet.com/an.nguyen/nextcloud. -b main 
8. sudo a2ensite dkswork.conf 
9. sudo a2enmod rewrite headers env dir mime setenvif ssl
10. sudo systemctl restart apache2
11. Install and Enable PHP Modules
-- sudo apt install imagemagick php-imagick libapache2-mod-php8.2 php8.2-common php8.2-mysql php8.2-fpm php8.2-gd php8.2-json php8.2-curl php8.2-zip php8.2-xml php8.2-mbstring php8.2-bz2 php8.2-intl php8.2-bcmath php8.2-gmp
12. sudo systemctl reload apache2
13. this site available at [your domain]
### Account 
1. admin
username: Administrator
password: Administrator