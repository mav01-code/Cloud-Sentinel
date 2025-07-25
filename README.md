# Cloud-Sentinel
An automated DDoS detection and mitigation system for cloud-hosted web applications. Built using AWS services like CloudFront, WAF, Lambda, and CloudWatch to ensure high availability, real-time defense, and rapid recovery against DDoS attacks.

## Background
Many organization are using Cloud for hosting their web applications. The attackers can try to attack these webservers for achieving Denial of Service attack. Specifically, Distributed Denial-of-Service (DDoS) attack is a malicious attempt to disrupt the normal traffic of a targeted server, service or network of Cloud infrastructure by overwhelming the target or its surrounding infrastructure with a flood of internet traffic. DDoS attacks achieve effectiveness by utilizing multiple compromised computer systems assources of attack traffic. Exploited machines can include computers and other networked resources. Therefore, it is essential to develop appropriate security tools to counter and protect against these attacks. 

## Description: 
The most obvious symptom of a DDoS attack is that a website or service suddenly becomes slow or unavailable. But since a number of causes such a legitimate spike in traffic can create similar performance issues, further investigation is usually required. Therefore, suitable analytics tools need to be developed to clearly identify an attack as DDoS. Following are some of the patterns for a DDoS attack: 
1. Suspicious amounts of traffic originating from a single IP address or IP range
2. A flood of traffic from users who share a single behavioral profile, such as device type, geolocation, or web browser version
3. An unexplained surge in requests to a single page or endpoint
4. Odd traffic patterns such as spikes at odd hours of the day or patterns that appear to be unnatural (e.g. a spike every 10 minutes)

There are other, more specific signs of DDoS attack that can vary depending on the type of attack. The tool developer should be creative to consider other signs also. For the above problem statements, following assumptions can be made: 
1. Cloud is hosting a website and providing some services to its users.
2. The website should be always up and providing services to its users (high availability).
3. The attackers can flood the website directly or via other nodes (DDoS).
4. The attacker can also sabotage the link between a client and webserver.
5. The attack can come from outside or from within the cloud infrastructure.

A solution needs to be built by suitably designing the cloud architecture and developing some tool (s) to automatically detect and recover from the DDoS attack. 

## Expected Solution 
A set of developed tool(s) along with a suitable Cloud architecture to be demonstrated. The demonstrated website should be protected well against different types of DDoS attack. In case of an attack, the developed security tools should be able to automatically detect and protect a website hosted on cloud infrastructure against DDoS attacks. The solution should also demonstrate the automatic recovery from the attack. As high availability is an essential feature, the down time (recovery time) should be minimized to the extent possible.


## 🛠️ Tech Stack

| Category         | Tools Used                             |
|------------------|----------------------------------------|
| Cloud Provider    | AWS                                    |
| Detection         | AWS GuardDuty, CloudWatch              |
| Mitigation        | AWS WAF, Lambda                        |
| Alerts            | AWS SNS                                |
| Dashboard (Optional) | React + Tailwind + CloudWatch Logs |
| Monitoring        | AWS CloudWatch, Logs                   |


## 🌟 Highlights

- **100% serverless** → Pay only for what you use  
- **Designed for Indian SMBs and GovTech** cloud solutions  
- **Extensible** to Azure/GCP in future versions  
- **Lightweight** with low operational overhead  


## 👥 Team

- **Marreddy Akshaya Varshini** – Cloud & Backend  
- **Asma Begum** - Frontend
