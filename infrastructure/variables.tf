variable "NEXT_PUBLIC_GOOGLE_API_KEY" {
  type      = string
  sensitive = true
}

variable "RESEND_API_KEY" {
  type      = string
  sensitive = true
}
variable "RESEND_FROM_EMAIL" {
  type = string
}
variable "RESEND_TO_EMAIL_BOOKING" {
  type = string
}
variable "RESEND_TO_EMAIL_EVENT" {
  type = string
}
variable "URL" {
  type = string
}
