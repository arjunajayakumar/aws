
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