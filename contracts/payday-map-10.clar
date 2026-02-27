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


(define-public (increment-admin-roles-count)
  (begin
    (var-set admin-roles-count (+ (var-get admin-roles-count) u1))
    (ok (var-get admin-roles-count))
  )
)


;; Error constants for admin-roles
(define-constant ERR_NOT_FOUND (err u404))
(define-constant ERR_UNAUTHORIZED (err u403))
