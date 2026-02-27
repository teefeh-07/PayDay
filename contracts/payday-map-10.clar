;; PayDay Data Map: admin-roles
;; Stores on-chain state for payroll operations


(define-map admin-roles
  principal
  { role: (string-ascii 32), active: bool, since: uint }
)


(define-data-var admin-roles-count uint u0)


(define-read-only (get-admin-roles-count)
  (var-get admin-roles-count)
)
