;; PayDay Phase 3 Extension Contract #42
;; Function: emergency-pause
;; Phase 3 - No as-contract usage

(define-public (emergency-pause )

  (begin

    (ok true)

  )
)

;; Event log for emergency-pause
(define-data-var last-caller principal tx-sender)
