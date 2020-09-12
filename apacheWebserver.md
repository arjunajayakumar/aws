## Appache webserver

### Check if already installed
```
rpm -q httpd            - to check if apache is already installed
rpm -qa | grep -i http  - 
```
### Installation on centos
```
sudo yum install httpd - to install apache
sudo systemctl status httpd - to show the current status of apache
sudo systemctl start httpd - to start apache server
sudo systemctl enable httpd - to enable auto start the server on each reboots
```
### Installing extra packages
* We can install any packages on apache by executing the command `yum install mod_<package name>`
eg:

```
yum install mod_perl        - to install perl modules
yum install php php_mysql   - to install php and php_mysql database 
yum install openssl mod_ssl - to install ssl module
```
### Managing service - Comands to managing diffrent services on Apache
```
systemctl status httpd                        - to view the status of apache
systemctl start/stop/reload/restart htttpd
netstat -tupan | grep -i http                 - to check if apache is listening on the port which we want
netstat -tupan | grep -i '80\|443'    
ps aux | grep -i [h]ttp                       
http -t                                       - check the syntax of configuration file
http -v                                       - to view the apache version
```

### Important files
#### Configuration files
```
/etc/httpd/conf/httpd.conf  - main configuration file
/etc/httpd/conf.d/*.conf    - seperate configuration file directory for each custom configurations.(eg: php,php_mysql etc...).By default these configurtaion files are included into the main configuration file.
```
#### Log files
```
var/log/httpd/*
```
#### PID Files
```
/var/run/httpd/httpd-pid
```
#### startup script
```
/usr/lib/systemd/system/httpd.service
/etc/init.d/httpd
```

#### Main configuration file
* ServerRoot
  * Root directory for server configurtion
* Listen
  * Listen on interface and port specified
* Include 
  * Include files into the configuration
* User/Group
  * User and group for apache to run as
* ServerToken
  * Default OS, change to productOnly
* ServerSignature
  * set to Off      


### Hosting
#### Name-based Vs IP Based Virtual Hosting
##### Name based Virtual Hosting
* Multiple websites on same IP Address
* NameViertualHost x.x.x.x inhttpd.conf

#### IPbased Virtual Hosting
* Each website has its own dedicated IP address
* Single NIC can have multiple IP addresses

#### Creating first page

#### Creating  name based virtual host

1. cd /etc/httpd/conf.d
2. vi conf.d
3. <VirtualHost *:80>
    ServerName:<name>
    DocumentRoot:<path>
  </VirtualHost>
4. httpd -t - to check the configuration is correct
5. systemctl reload httpd  

#### Creating port based virtual Host
1. cd/etc/httpd/conf.d
2. vi conf.d
3. Listen 8080
<VirtualHost *:8080>
DocumentRoot "path"
ServerName <>
</VirtualHost>
4. httpd -t - to check the configuration is correct
5. systemctl reload httpd
6. firewall-cmd --permanent --add-port=<port number>/tcp - to allow the port
7. firewall-cmd --reload