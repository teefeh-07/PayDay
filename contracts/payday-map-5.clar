;; PayDay Data Map: vesting-schedule
;; Stores on-chain state for payroll operations


(define-map vesting-schedule
  principal
  { total: uint, vested: uint, cliff: uint }
)


(define-data-var vesting-schedule-count uint u0)


(define-read-only (get-vesting-schedule-count)
  (var-get vesting-schedule-count)
)


(define-public (increment-vesting-schedule-count)
  (begin
    (var-set vesting-schedule-count (+ (var-get vesting-schedule-count) u1))
    (ok (var-get vesting-schedule-count))
  )
)
