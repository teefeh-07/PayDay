;; PayDay Phase 3 Extension Contract #32
;; Function: blacklist-employee
;; Phase 3 - No as-contract usage

(define-public (blacklist-employee (employee principal))

  (begin

    (asserts! (is-eq tx-sender contract-caller) (err u201))
    (ok true)

  )
)
