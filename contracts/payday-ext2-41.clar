;; PayDay Phase 3 Extension Contract #41
;; Function: revoke-payroll-admin
;; Phase 3 - No as-contract usage

(define-public (revoke-payroll-admin (admin principal))

  (begin

    (ok true)

  )
)

;; Event log for revoke-payroll-admin
(define-data-var last-caller principal tx-sender)
