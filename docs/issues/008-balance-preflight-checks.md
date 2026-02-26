# #008: Implement Account Balance Checks Before Payroll Run

**Category:** [CONTRACT]
**Difficulty:** ● EASY
**Tags:** `balance-check`, `preflight`, `horizon`

## Description

Before executing payroll, query the distribution account balance via Horizon. If ORGUSD balance is insufficient to cover all scheduled payments, abort and alert the employer with a shortfall report.

## Acceptance Criteria

- [ ] Preflight balance check implemented before payroll execution.
- [ ] Payroll aborts if balance is insufficient.
- [ ] Shortfall report generated and sent to the employer.
