# High-Load System Troubleshooting Scenario

## System Architecture

You're responsible for a high-traffic e-commerce platform with the following architecture:

1. Load Balancer (HAProxy)
2. Reverse Proxy Layer (Nginx)
3. Application Servers (Node.js)
4. Database Cluster (PostgreSQL with read replicas)
5. Caching Layer (Redis)
6. Message Queue (RabbitMQ)

## Current Situation

The platform is experiencing issues during a major sale event. User complaints are pouring in about slow response times, errors, and inability to complete purchases.

## Symptoms

1. Intermittent 502 Bad Gateway errors
2. Slow response times (>10s) for product page loads
3. Payment processing failures
4. Inconsistent product inventory counts
5. Admin panel is completely inaccessible

## Available Metrics and Logs

- HAProxy stats
- Nginx access and error logs
- Application server logs and performance metrics
- Database query logs and performance statistics
- Redis keyspace statistics
- RabbitMQ queue lengths and consumer counts
- System resource utilization (CPU, Memory, Disk I/O, Network) for all servers

## Hidden Issues

1. Reverse Proxy Issue: Nginx is misconfigured, causing it to occasionally route requests to a decommissioned application server.

2. Database Failure: One of the PostgreSQL read replicas has silently fallen out of sync, causing inconsistent query results.

3. Connection Pool Exhaustion: The application servers are not properly managing database connections, leading to connection pool exhaustion under high load.

4. Cache Stampede: A poorly implemented caching strategy is causing cache stampedes on popular products.

5. Message Queue Backlog: The payment processing workers are not scaling properly, causing a growing backlog in the RabbitMQ queue.

6. Inadequate Session Management: The Redis cluster used for session storage is under-provisioned, causing session data loss.

## Task for the Candidate

You've been called in to diagnose and resolve the issues. Explain your approach to troubleshooting this situation, including:

1. What additional information or metrics would you gather?
2. How would you prioritize investigating the various symptoms?
3. What tools or commands would you use to diagnose each part of the system?
4. How would you identify the root causes of the issues?
5. What immediate actions would you take to mitigate the problems?
6. What long-term recommendations would you make to prevent similar issues in the future?

## Evaluation Criteria

1. Systematic approach to problem-solving
2. Understanding of distributed systems and their failure modes
3. Knowledge of performance tuning and optimization techniques
4. Ability to correlate symptoms across different system components
5. Communication skills in explaining technical issues and solutions
6. Consideration of both short-term fixes and long-term improvements