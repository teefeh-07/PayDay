;; PayDay Phase 3 Extension Contract #34
;; Function: fund-payroll
;; Phase 3 - No as-contract usage

(define-public (fund-payroll (amount uint))

  (begin

    (asserts! (> amount u0) (err u202))
    (ok amount)

  )
)

;; Event log for fund-payroll
(define-data-var last-caller principal tx-sender)
