;; PayDay Phase 3 Extension Contract #43
;; Function: emergency-resume
;; Phase 3 - No as-contract usage

(define-public (emergency-resume )

  (begin

    (ok true)

  )
)

;; Event log for emergency-resume
(define-data-var last-caller principal tx-sender)
