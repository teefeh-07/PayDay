# #007: Build On-Chain Transaction Verification & Hash Logging

**Category:** [CONTRACT]
**Difficulty:** ● MEDIUM
**Tags:** `transaction-hash`, `audit-trail`, `ledger`

## Description

After each payment submission, fetch the confirmed transaction from Horizon using its hash. Store ledger sequence, timestamp, and transaction XDR in DB as an immutable audit record.

## Acceptance Criteria

- [ ] Transaction data fetched from Horizon after submission.
- [ ] Ledger sequence, timestamp, and XDR stored in DB.
- [ ] Immutable audit records created for every payment.
