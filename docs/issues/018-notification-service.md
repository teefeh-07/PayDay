# #018: Set Up Email & Push Notification Service for Payment Events

**Category:** [BACKEND]
**Difficulty:** ● MEDIUM
**Tags:** `notifications`, `email`, `queue`

## Description

Integrate an email provider (Resend or SendGrid) to notify employees on payment receipt. Trigger notifications from a queue worker after on-chain confirmation. Template emails with transaction hash and amount.

## Acceptance Criteria

- [ ] Email provider integrated successfully.
- [ ] Queue-based notification trigger after transaction confirmation.
- [ ] Branded email templates with payment details and tx hash.
