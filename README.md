
# AWS Certified cloud practioner: 2020
## Cloud Computing

### Types of cloud computing
* Infrastrucure as a service(IaaS)
    * Provide building blocks for cloud IT
    * Provides networking, computers, data storage space
    * Highest level of flexibility
    * Easy parallel with traditional on-premises IT
* Platform as a service(PaaS) 
    * Removes the need for your organization to manage the underlying infrastructure
    * Focus on the deployment and management of your applications
* Software as a service(SaaS)
    * Completed product that is run and managed by the service provider    
### AWS Regions
* AWS has regions all around the world
* Names can be us-east-l, eu-west-3...
* A region is a cluster of data centers
* Most AWS services are region-scoped

### AWS Availability Zones
* Each region has many availability zones(usually 3, min is 2, max is 6).
  eg: Sydeny:ap-southeast-2
* Each avaialbility zone(AZ) is one or more discrete data centers with redundant power, networking, and connectivity
* They're seperate from each other, so that they're isolated from disasters
* They are connected wth a ultra-low latency bandwith network

### IAM: Users & Groups
* IAM = Identity and Access Management, Global service
* Root account created by default, shouldn't be used or shared
* Users are people within your organization, and can be grouped
* Users dont have to belong to a group, and user can belong to multiple groups

### iam commands
```
iam list-users
```
### iam roles for services
* Some AWS service will need to perform actions on your behalf
* To do, so we will assign permissions to AWS sericed with IAM Roles
* Common roles:
    * EC2 instance Roles
    * Lambda Function Roles
    * Roles for cloudformation

### IAM security Tools
#### IAM Credentials Report(account-level)
 * a report that lists all your account's users and the status of their various credentials
#### IAM Acess advisor(user-level)
 * Access advisor shows the service permissions granted to a user and when those services were last accessed.
 * You can use this information to revise your policies

### IAM Guidelines & Best Practices
* Dont use the root account except for AWS account setup
* One physical user = One AWS user
* Assign users to groups and assign permissions to groups
* Use and enforce the use of Multi Factor Authentication(MFA)
* Create and use roles for giving permissions to AWS services
* Use access keys for programmatic access(CLI/SDK)
* Audit permissions of your account with the IAM Credentials report/access advisor
* Never share IAM users & access keys

### Amazon EC2
### Introduction to security groups
* Security Groups are the fundamental of network security in AWS
* They control how traffic is allowed into or out of our EC2 Instances
* Security groups only contain allow rules
* Security groups rules can reference by IP or by security group

### Classic ports to know
* 22 = SSH (Secure Shell) - log into a Linux instance
* 21 = FTP (File Transport Protocol) – upload files into a file share
* 22 = SFTP (Secure File Transport Protocol) – upload files using SSH
* 80 = HTTP – access unsecured websites
* 443 = HTTPS – access secured websites
* 3389 = RDP (Remote Desktop Protocol) – log into a Windows instance