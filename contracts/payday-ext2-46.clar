;; PayDay Phase 3 Extension Contract #46
;; Function: stake-salary
;; Phase 3 - No as-contract usage

(define-public (stake-salary (amount uint) (duration uint))

  (begin

    (ok (* amount duration))

  )
)
