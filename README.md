
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
aws iam list-users
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

### Amazon EC2(Elastic compute cloud)
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

### EC2 Instances purchasing Options
* On-Demand Instances:short workload, predictable pricing
* Reserved:(MINIMUM 1 Year)
  * Reserved Instances:long workloads
  * Convertible reserved instances:long workloads with flexible instances
  * Scheeduled reserved instances: eg - every Thursday between 3 and 6pm
* Spot instances: short workloads, cheap, can lose instances(less reliable)
* Dedictaed Hosts: book an entire physicxal server, control instance placement

#### EC2 on demand
* Pay for what you use
    * Linux - billing per second, after the first minute
    * All other operating systems(eg:windows) - billing per hour
* Has the highest cost but no upfront payment
* No long-term commitment
* Recommended for short-term and un-interrupted workloads, where you can't predict how the application will behave.    
#### EC2 Reseved Instances
* Up to  75% discount compared to On-demand
* reservation period: 1 Year = +discount | 3 years = +++discount
* Reserve a specifc instance type
* recommended for steady-state usage applications(think database) 

### EBS Volume(Elastic block store)
* An EBS volume is a network drive you can attach to your instances while they run
    * it uses the network to communicate the instance, which means there might be a bit of latency
    * it can be detached from an EC2 instance and attached to another one quickly
* it allows your ec2 instances to persists data, even after their termination
* it's locked to an availability zone(AZ)
    * An EBS volume in us-east-l a cannot be attached to us-east-lb
    * To move a volume across, you first need to snapshot it.
* Have a provisioned capacity (size in GBs, and IOPS)
    * You get billed for all the provisioned capacity
    * You can increase the capacity of the drive over time   
* The EBS volume which we selected to delete on termination of the instance will be deleted after we terminate the ec2 instance.but the extra volume will stay until we manually delete it.

#### EBS Snapshots
* Means to backup or copy of the EBS volume at a point in time
* Not necessary to detach volume to do snapshot, but recommended
* Can copy snapshots across AZ or region

#### AMI Overview
* AMI - Amazom machine image
* AMI are a customization of an EC2 instance
    * we can add our own software, configuration, operating sysytem, monitoring
    * faster boot/configuraion time because all your software is pre-packaged
* AMI are built for a specific region(and can be copied across regions) 
* We can launch EC2 instances from:
    * A public AMI: AWS provided
    * our own AMI: we make and maintain them ourself
    * An AWS Marketplace AMI: an AMI someone else made(and potentially sells)
#### EC2 Instance store    
* EBS volumes are ntework drives with good but "limited" Performance
* if we need a higher performance hardware disk use EC2 Instamnce store
* Better I/O Performance
* EC2 Instance store lose their storage if they're stopped (ephermal)
* Good for buffer /cache/scratch data/temporary content
* Risk of data loss if hardware fails
* backups and replication are our responsisbilty

#### EFS- Elastic file system
* Managed NFS(network file system) that can be mounted on 100s of EC2
* EFS works with linuc EC2 instances in multi-AZ
* Hidhly available, scalble, expensive(3xgp2), pay per use, no capacity planning
#### EBS vs EFS
* EBS cannot be used on dodderent AZ. we need to take he snapshot of theEBS nad lauch it in abother AZ inorder to use it on a diffrent AZ
* In case of EFS it is a shared file system. the same EFS can be shared to as many of EC2 instances in diff AZ's

### Elastic Load Balancing and Auto Scaling
#### High Availability & Scalabilty for EC2
* Vertical scaling:Increase instance size (= scale up / down)
    * from:t2.nano - 0.5G of RAM, 1 vCPUs
    * To: u-l2tblmetal-12.3TB of RAM, 448 vCPUs
* Horizondal Scaling: Increase number of instances(= scale out/in)
    * Auto scaling group
    * Load Balancer
* High availability: Run instances for the same application acreoss multi AZ
    * Autoscaling group multi AZ
    * Load Balancer multi AZ     
#### What is load balancing?
* Load balancers are servers thet forward interenet traffic to multiple servers(EC2 Instances) downstream       

