;; PayDay Phase 3 Extension Contract #31
;; Function: whitelist-employee
;; Phase 3 - No as-contract usage

(define-public (whitelist-employee (employee principal))

  (begin

    (asserts! (is-eq tx-sender contract-caller) (err u200))
    (ok true)
