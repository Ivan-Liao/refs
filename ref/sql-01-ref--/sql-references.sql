// tags: [dateadd, GETDATE(), time ago, minutes ago, hours ago, days ago, weeks ago, years ago]
// function: credit card transactions from more than 3 minutes ago
SELECT * 
FROM   TRANSACTION 
WHERE  transactionType ='CreditCard' 
AND    transactionDate < dateadd(minute, -3, GETDATE())


// tags: [time ago, minutes ago, hours ago, weeks ago, years ago]
// function: max for each group in past 10 minutes
SELECT
  ssid, MAX(num_packets)
FROM (
  SELECT mac_address, ssid, SUM(count_packet) AS num_packets
  FROM packet_rates 
  WHERE timestamp > dateadd(minute, -10, GETDATE())
  GROUP BY 1,2
) AS t 
GROUP BY 1;


// tags: [join]
// total distance per person in ride sharing database with 2 tables users and rides
SELECT 
    name
    , SUM(distance) AS distance_traveled
FROM users
LEFT JOIN rides
    ON users.id = rides.passenger_user_id
GROUP BY name
ORDER BY SUM(distance) DESC, name ASC


// cross join variation, inner join
// comparing differences between scores from the same table
SELECT 
    s1.student AS one_student
    , s2.student AS other_student
    , ABS(s1.score - s2.score) AS score_diff
FROM scores AS s1
INNER JOIN scores AS s2
    ON s1.id != s2.id
        AND s1.id > s2.id
ORDER BY 3 ASC, 1 ASC
LIMIT 1

WITH daily_impressions as (
	SELECT
		dt,
		campaign_id,
		COUNT(DISTINCT impression_id) num_impressions
	FROM impressions i
), total_impressions as (
	SELECT
		campaign_id,
		COUNT(DISTINCT impression_id) as total_impressions
		FROM impressions i
		WHERE dt < current_date
		GROUP BY 1
)

SELECT 
	campaign_id,
	SUM(num_impressions) / 7 as daily_average,
	c.target_impressions / datediff('day', c.end_dt, c.start_dt) AS expected_daily_delivery,
	AVG(total_impression) / c.target_impressions as pct_delivered,
	datediff('day', current_date, c.start_dt) / datediff('day', c.end_dt,)


