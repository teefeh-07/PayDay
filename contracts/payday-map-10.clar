;; PayDay Data Map: admin-roles
;; Stores on-chain state for payroll operations


(define-map admin-roles
  principal
  { role: (string-ascii 32), active: bool, since: uint }
)
