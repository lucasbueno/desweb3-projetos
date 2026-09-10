FROM php:8.2-apache

# Atualiza pacotes e instala as extensões do MySQL
RUN apt-get update && apt-get upgrade -y
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Habilita o mod_rewrite do Apache (útil para URLs amigáveis)
RUN a2enmod rewrite
