## Appache webserver
### Installation on centos
```
sudo yum install httpd - to install apache
sudo systemctl status httpd - to show the current status of apache
sudo systemctl start httpd - to start apache server
sudo systemctl enable httpd - to enable auto start the server on each reboots
```
/usr/sbin/apache2 -h - to view the available options for apache webserever configuration
httpd -l - to view the files compiled in apache
httpd -t -f /etc/httpd/conf httpd.conf
httpd -M - show loaded modules

Creating the first page
1. cd /etc/httpd/conf.d
2. vi conf.d
3. <VirtualHost *:80>
    ServerName:<name>
    ServerRoot:<path>
  </VirtualHost>