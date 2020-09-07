
# AWS Certified cloud practioner: 2020
## Cloud Computing

### Types of cloud computing
* Infrastrucure as a service(IaaS)
    * Provide building blocks for cloud IT
    * Provides networking, computers, data storage space
    * Highest level of flexibility
    * Easy parallel with traditional on-premises IT
* Platform as a service(PaaS) 
    * Removes the need for wer organization to manage the underlying infrastructure
    * Focus on the deployment and management of wer applications
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
* Users are people within wer organization, and can be grouped
* Users dont have to belong to a group, and user can belong to multiple groups

### iam commands
```
aws iam list-users
```
### iam roles for services
* Some AWS service will need to perform actions on wer behalf
* To do, so we will assign permissions to AWS sericed with IAM Roles
* Common roles:
    * EC2 instance Roles
    * Lambda Function Roles
    * Roles for cloudformation

### IAM security Tools
#### IAM Credentials Report(account-level)
 * a report that lists all wer account's users and the status of their various credentials
#### IAM Acess advisor(user-level)
 * Access advisor shows the service permissions granted to a user and when those services were last accessed.
 * we can use this information to revise wer policies

### IAM Guidelines & Best Practices
* Dont use the root account except for AWS account setup
* One physical user = One AWS user
* Assign users to groups and assign permissions to groups
* Use and enforce the use of Multi Factor Authentication(MFA)
* Create and use roles for giving permissions to AWS services
* Use access keys for programmatic access(CLI/SDK)
* Audit permissions of wer account with the IAM Credentials report/access advisor
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
* Pay for what we use
    * Linux - billing per second, after the first minute
    * All other operating systems(eg:windows) - billing per hour
* Has the highest cost but no upfront payment
* No long-term commitment
* Recommended for short-term and un-interrupted workloads, where we can't predict how the application will behave.    
#### EC2 Reseved Instances
* Up to  75% discount compared to On-demand
* reservation period: 1 Year = +discount | 3 years = +++discount
* Reserve a specifc instance type
* recommended for steady-state usage applications(think database) 

### EBS Volume(Elastic block store)
* An EBS volume is a network drive we can attach to wer instances while they run
    * it uses the network to communicate the instance, which means there might be a bit of latency
    * it can be detached from an EC2 instance and attached to another one quickly
* it allows wer ec2 instances to persists data, even after their termination
* it's locked to an availability zone(AZ)
    * An EBS volume in us-east-l a cannot be attached to us-east-lb
    * To move a volume across, we first need to snapshot it.
* Have a provisioned capacity (size in GBs, and IOPS)
    * we get billed for all the provisioned capacity
    * we can increase the capacity of the drive over time   
* The EBS volume which we selected to delete on termination of the instance will be deleted after we terminate the ec2 instance.but the extra volume will stay until we manually delete it.

#### EBS Snapshots
* Means to backup or copy of the EBS volume at a point in time
* Not necessary to detach volume to do snapshot, but recommended
* Can copy snapshots across AZ or region

#### AMI Overview
* AMI - Amazom machine image
* AMI are a customization of an EC2 instance
    * we can add our own software, configuration, operating sysytem, monitoring
    * faster boot/configuraion time because all wer software is pre-packaged
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
* Load balancers are servers that forward interenet traffic to multiple servers(EC2 Instances) downstream   

### Amazon S3
* Ammazon s3 is the one of the main building blocks of AWS
* it's advertised as "infinitely scaling" storage
* many websites ude amazon s3 as a backbone
* many aws services uses amazon s3 as an integration as well

#### S3 Use cases
* Backup and storage
* Disaster recovery
* Archive
* Hybrid Cloud storage
* Application storage
* Media hosting
* Data lakes & big data analytics
* Software delivery
* Static website

#### S3 Security
* User based
    * IAM policies - which API calls should be allowed for a specific user from IAM console
* Resource Based
    * Bucket Policies - bucket wide rules from the s3 console - allows cross account
    * Object access control list(ACL) - finer grain
    * Bucket access control list(ACL) - less common
#### S3 Static website hosting
* S3 can host static websites and have them accessible on the www
* The website URL will be:
    * <bucket-name>.s3-website-<AWS-region>.amazonaws.com
                        
                        OR
    * <bucket-name>.s3-website.<AWS-region>.amazonaws.com
#### S3 Versioning    
    
* We can version our files in Amazon S3
* it is enabled at the bucket level
* same key overtime will increment the "version":1,2,3....
* it is best practice to version our bucket
    * Protect against unintented deletes(ability to restore a version)
    * Easily rollback to previous version

* Notes:
    * ANy file that is not versioned prior to enabling versioing will have version "null"
    * Suspending versioning doesnot delete the previous versions
#### S3 Replication(CRR & SRR)
* Must enable versioning in source and destination
* Types:
    * Cross Region Replication (CRR)
    * Same Region Replication (SRR)

* Buckets can be in different accounts
* Copying is asynchronous
* Must give proper IAM permissions to S3
* CRR - Use cases: compliance, lower latency access, replication across accounts
* SRR – Use cases: log aggregation, live replication between production and test accounts
#### S3 Storage classes
* Amazon S3 Standard - General Purpose
* Amazon S3 Standard-Infrequent Access (IA)
* Amazon S3 One Zone-Infrequent Access
* Amazon S3 Intelligent Tiering
* Amazon Glacier
* Amazon Glacier Deep Archive
* Amazon S3 Reduced Redundancy Storage (deprecated - omitted)

##### S3 Standard – General Purposes
* 99.99% Availability
* Used for frequently accessed data
* Low latency and high throughput
* Sustain 2 concurrent facility failures
* Use Cases: Big Data analytics, mobile & gaming applications, content
distribution...

##### S3 Standard – Infrequent Access (IA)
* Suitable for data that is less frequently accessed, but requires rapid
  access when needed
* 99.9% Availability
* Lower cost compared to Amazon S3 Standard, but retrieval fee
* Sustain 2 concurrent facility failures
* Use Cases: As a data store for disaster recovery, backups...

##### S3 Intelligent-Tiering
* 99.9% Availability
* Same low latency and high throughput performance of S3 Standard
* Cost-optimized by automatically moving objects between two access
  tiers based on changing access patterns:
* Frequent access
* Infrequent access
* Resilient against events that impact an entire Availability Zone

##### S3 One Zone - Infrequent Access (IA)
* Same as IA but data is stored in a single AZ
* 99.5% Availability
* Low latency and high throughput performance
* Lower cost compared to S3-IA (by 20%)
* Use Cases: Storing secondary backup copies of on-premise data, or
  storing data we can recreate

##### Amazon Glacier & Glacier Deep Archive
* Low cost object storage (in GB/month) meant for archiving / backup
* Data is retained for the longer term (years)
* Various retrieval options of time + fees for retrieval:
* Amazon Glacier – cheap:
* Expedited (1 to 5 minutes)
* Standard (3 to 5 hours)
* Bulk (5 to 12 hours)
* Amazon Glacier Deep Archive – cheapest:
* Standard (12 hours)
* Bulk (48 hours)

#### AWS Storage Gateway
* Bridge between on-premise data and cloud
  data in S3
* Hybrid storage service to allow on-
  premises to seamlessly use the AWS Cloud
* Use cases: disaster recovery, backup &
  restore, tiered storage
* Types of Storage Gateway:
* File Gateway
* Volume Gateway
* Tape Gateway
* No need to know the types at the exam

### Databases
* Storing data on disk (EFS, EBS, EC2 Instance Store, S3) can have its limits
*  Sometimes, we want to store data in a database...
* we can structure the data
* we build indexes to efficiently query / search through the data
* we define relationships between wer datasets
* Databases are optimized for a purpose and come with different
  features, shapes and constraints

#### Relational databases
* Looks just like Excel spreadsheets, with links between them!
* Can use the SQL language to perform queries / lookups

#### NoSQL Databases
* NoSQL = non-SQL = non relational databases
* NoSQL databases are purpose built for specific data models and have
  flexible schemas for building modern applications.
* Benefits:
    * Flexibility: easy to evolve data model
    * Scalability: designed to scale-out by using distributed clusters
    * High-performance: optimized for a specific data model
    * Highly functional: types optimized for the data model
* Examples: Key-value, document, graph, in-memory, search databases


#### AWS RDS Overview
* RDS stands for Relational Database Service
* It’s a managed DB service for DB use SQL as a query language.
* It allows we to create databases in the cloud that are managed by AWS
  * Postgres
  * MySQL
  * MariaDB
  * Oracle
  * Microsoft SQL Server
  * Aurora (AWS Proprietary database)
#### Amazon Aurora
* Aurora is a proprietary technology from AWS (not open sourced)
* PostgreSQL and MySQL are both supported as Aurora DB
* Aurora is “AWS cloud optimized” and claims 5x performance improvement
  over MySQL on RDS, over 3x the performance of Postgres on RDS
* Aurora storage automatically grows in increments of 10GB, up to 64 TB.
* Aurora costs more than RDS (20% more) – but is more efficient
* Not in the free tier

#### Amazon ElastiCache Overview
* The same way RDS is to get managed Relational Databases...
* ElastiCache is to get managed Redis or Memcached
* Caches are in-memory databases with high performance, low latency
* Helps reduce load off databases for read intensive workloads
* AWS takes care of OS maintenance / patching, optimizations, setup,
* configuration, monitoring, failure recovery and backups

#### DynamoDB
* Fully Managed Highly available with replication across 3 AZ
* NoSQL database - not a relational database
* Scales to massive workloads, distributed “serverless” database
* Millions of requests per seconds, trillions of row, 100s of TB of storage
* Fast and consistent in performance
* Single-digit millisecond latency – low latency retrieval
* Integrated with IAM for security, authorization and administration
* Low cost and auto scaling capabilities

##### DynamoDB – type of data
* DynamoDB is a key/value database

#### Redshift Overview
* Redshift is based on PostgreSQL, but it’s not used for OLTP
* It’s OLAP – online analytical processing (analytics and data warehousing)
* Load data once every hour, not every second
* 10x better performance than other data warehouses, scale to PBs of data
* Columnar storage of data (instead of row based)
* Massively Parallel Query Execution (MPP), highly available
* Pay as we go based on the instances provisioned
* Has a SQL interface for performing the queries
* BI tools such as AWS Quicksight or Tableau integrate with it

#### Amazon EMR
* EMR stands for “Elastic MapReduce”
* EMR helps creating Hadoop clusters (Big Data) to analyze and process
  vast amount of data
* The clusters can be made of hundreds of EC2 instances
* Also supports Apache Spark, HBase, Presto, Flink...
* EMR takes care of all the provisioning and configuration
* Auto-scaling and integrated with Spot instances
* Use cases: data processing, machine learning, web indexing, big data...
#### Athena Overview
* Fully Serverless database with SQL capabilities
* Used to query data in S3
* Pay per query
* Output results back to S3
* Secured through IAM
* Use Case: one-time SQL queries, serverless queries on S3, log analytics

#### AWS Glue
* Managed extract, transform, and load (ETL) service
* Useful to prepare and transform data for analytics
* Fully serverless service
* Glue Data Catalog: catalog of datasets - Cenrtal repository to store structural and operational metadata for data assets in aws
  * can be used by Athena, Redshift, EMR
#### DMS – Database Migration Service
* Quickly and securely migrate databases to AWS, resilient, self healing
* The source database remains available during the migration
* Supports:
    * Homogeneous migrations: ex Oracle to Oracle
    * Heterogeneous migrations: ex Microsoft SQL Server to Aurora
#### Databases & Analytics Summary in AWS

* Relational Databases - OLTP: RDS & Aurora (SQL)
* In-memory Database: ElastiCache
* Key/Value Database: DynamoDB (serverless)
* Warehouse - OLAP: Redshift (SQL)
* Hadoop Cluster: EMR
* Athena: query data on Amazon S3 (serverless & SQL)
* Glue: Managed ETL (Extract Transform Load) and Data Catalog service
* Database Migration: DMS

### Other compute services

#### Docker
* Docker is a software development platform to deploy apps
* Apps are packaged in containers that can be run on any OS
* Apps run the same, regardless of where they’re run
 * Any machine
 * No compatibility issues
 * Predictable behavior
 * Less work
 * Easier to maintain and deploy
 * Works with any language, any OS, any technology
* Scale containers up and down very quickly (seconds)

#### Docker images
* Docker images is non-changeable file containing libraries source code, tools and other files needed to run applications.
#### Docker container
* Docker container is nothing but an environment virtualized during run-time to allow users to isolate applications from the system underpinning it. These containers are compact, portable units in which we can start up an application quickly and easily.
#### Where docker images are stored?
* Docker images are stored in docker repositories
* eg for public docker repo: Docker hub
* eg for private docker repo: Amazon ECR(Elastic container registry)

#### ECS(Elastic Container Service)
* Launch Docker containers on AWS
* We must provision & maintain the infrastructure (the EC2 instances)
* AWS takes care of starting / stopping containers
* Has integrations with the Application Load Balancer

#### Fargate
* Launch Docker containers on AWS
* we do not provision the infrastructure (no EC2 instances to manage) – simpler!
* Serverless offering
* AWS just runs containers for us based on the CPU / RAM we need

#### ECR(Elastic container registry)
* Private Docker Registry on AWS
* This is where we store wer Docker images so they can be run by ECS or Fargate

#### What's serverless?
* Serverless is a new paradigm in which the developers don’t have to manage servers anymore...
* They just deploy code
* They just deploy... functions !
* Initially... Serverless == FaaS (Function as a Service)
* Serverless was pioneered by AWS Lambda but now also includes
  anything that’s managed: “databases, messaging, storage, etc.”
* Serverless does not mean there are no servers...
  it means we just don’t manage / provision / see them

#### Lambda vs EC2
![images](/lambda.png?raw=true "Title") 

#### AWS Batch
* Fully managed batch processing at any scale
* Efficiently run 100,000s of computing batch jobs on AWS
* A “batch” job is a job with a start and an end (opposed to continuous)
* Batch will dynamically launch EC2 instances or Spot Instances
* AWS Batch provisions the right amount of compute / memory
* we submit or schedule batch jobs and AWS Batch does the rest!
* Batch jobs are defined as Docker images and run on ECS
* Helpful for cost optimizations and focusing less on the infrastructure

#### Batch vs Lambda
![images](/batchvslambda.png?raw=true "Title")

#### Amazon Lightsail
* Simpler alternative to using EC2, RDS, ELB, EBS, Route 53
* Great for people with little cloud experience
* Has high availability but no auto-scaling, limited AWS integrations
* Use cases:
    * Simple web applications (has templates for LAMP, Nginx, MEAN, Node.js...)
    * Websites (templates for WordPress, Magento, Plesk, Joomla)
    * Dev / Test environment

#### Other Compute summary - Summary
* Docker: container technology to run applications
* ECS: run Docker containers on EC2 instances
* Fargate: 
          * Run Docker containers without provisioning the infrastructure
          * Serverless offering (no EC2 instances)
* ECR: Private Docker Images Repository
* Batch: run batch jobs on AWS across managed EC2 instances
* Lightsail: predictable & low pricing for simple application & DB stacks

#### Lambda Summary
* Lambda is Serverless, Function as a Service, seamless scaling, reactive
* Lambda Billing:
* By the time run x by the RAM provisioned
* By the number of invocations
* Language Support: many programming languages except Docker
* Invocation time: up to 15 minutes
* Use cases:
* Create Thumbnails for images uploaded onto S3
* Run a Serverless cron job

### Deploying and Managing Infrastructure at Scale Section
#### Cloudformation
* CloudFormation is a declarative way of outlining wer AWS Infrastructure, for any resources (most of them are supported).
* For example, within a CloudFormation template, we say:
  * I want a security group
  * I want two EC2 instances using this security group
  * I want an S3 bucket
  * I want a load balancer (ELB) in front of these machines
* Then CloudFormation creates those for us, in the right order, with the
exact configuration that we specify

#### Benefits of AWS CloudFormation 

* Infrastructure as code
  * No resources are manually created, which is excellent for control
  * Changes to the infrastructure are reviewed through code
* Cost 
  * Each resources within the stack is tagged with an identifier so you can easily see how
    a much a stack costs you
  * You can estimate the costs of your resources using the CloudFormation template
    Savings strategy: In Dev, you could automation deletion of templates at 5 PM and
    recreated at 8 AM, safely
* Productivity
  * Ability to destroy and re-create an infrastructure on the cloud on the fly
  * Automated generation of Diagram for your templates!
  * Declarative programming (no need to figure out ordering and orchestration)
* Don’t re-invent the wheel
  * Leverage existing templates on the web!
  * Leverage the documentation
* Supports (almost) all AWS resources:
  * Everything we’ll see in this course is supported
  * You can use “custom resources” for resources that are not supported

#### AWS Elastic Beanstalk Overview
* Elastic Beanstalk is a developer centric view of deploying an application on AWS
* It uses all the component’s we’ve seen before: EC2, ASG, ELB, RDS, etc...
* But it’s all in one view that’s easy to make sense of!
* We still have full control over the configuration
* Beanstalk = Platform as a Service (PaaS)
* Beanstalk is free but you pay for the underlying instances
* Managed service
* Instance configuration / OS is handled by Beanstalk
* Deployment strategy is configurable but performed by Elastic Beanstalk
* Just the application code is the responsibility of the developer
* Three architecture models:
* Single Instance deployment: good for dev
* LB + ASG: great for production or pre-production web applications
* ASG only: great for non-web apps in production (workers, etc..)

#### AWS CodeDeploy
We want to deploy our application automatically
* Works with EC2 Instances
* Works with On-Premises Servers
* Hybrid service
* Servers / Instances must be provisioned and configured ahead of time with the CodeDeploy Agent

#### AWS Systems manager(SSM)
* Helps you manage your EC2 and On-Premises systems at scale
* Another Hybrid AWS service
* Get operational insights about the state of your infrastructure
* Suite of 10+ products
* Most important features are:
* Patching automation for enhanced compliance
* Run commands across an entire fleet of servers
* Store parameter configuration with the SSM Parameter Store
* Works for both Windows and Linux OS

#### How system manager works
![images](/ssm.png?raw=true "Title")


  
    
   

  










