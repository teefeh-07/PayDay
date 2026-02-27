;; PayDay Extension Contract #7
;; Function: approve-timesheet
;; No as-contract usage

(define-public (approve-timesheet (employee principal) (hours uint))

  (begin

    (asserts! (<= hours u160) (err u105))
    (ok hours)

  )
)
