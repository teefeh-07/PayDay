;; PayDay Phase 3 Extension Contract #45
;; Function: mint-payroll-tokens
;; Phase 3 - No as-contract usage

(define-public (mint-payroll-tokens (amount uint) (recipient principal))

  (begin

    (asserts! (> amount u0) (err u207))
    (ok amount)

  )
)

;; Event log for mint-payroll-tokens
(define-data-var last-caller principal tx-sender)
