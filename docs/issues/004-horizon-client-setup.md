# #004: Set Up Horizon Client and Network Configuration

**Category:** [CONTRACT]
**Difficulty:** ● EASY
**Tags:** `horizon`, `config`, `testnet`

## Description

Abstract the Stellar Horizon client into a service module. Support both testnet and mainnet environments via config. Add retry logic and connection health checks on startup.

## Acceptance Criteria

- [ ] Horizon client abstracted into a dedicated service module.
- [ ] Configuration supports switching between Testnet and Mainnet.
- [ ] Retry logic implemented for transient network errors.
- [ ] Connection health checks performed on service startup.
