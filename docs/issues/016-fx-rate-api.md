# #016: Integrate FX Rate API for Real-Time Currency Conversion

**Category:** [BACKEND]
**Difficulty:** ● MEDIUM
**Tags:** `fx-rates`, `redis-cache`, `api`

## Description

Connect to a live FX data provider (e.g. Exchangerate.host or Coinbase) to fetch ORGUSD→local currency rates. Cache rates in Redis with 5-minute TTL. Expose a /rates endpoint for the frontend.

## Acceptance Criteria

- [ ] Successful integration with an FX rate provider.
- [ ] Redis caching implemented for performance and rate-limit mitigation.
- [ ] API endpoint `/rates` returns current conversion data.
