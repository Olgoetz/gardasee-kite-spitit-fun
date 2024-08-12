
resource "vercel_project" "this" {
  name      = github_repository.this.name
  framework = "nextjs"

  preview_comments           = false
  serverless_function_region = "fra1"
  git_repository = {
    type              = "github"
    repo              = github_repository.this.full_name
    production_branch = "prod"
  }
  vercel_authentication = {
    deployment_type    = "none"
    protect_production = false
  }


}

resource "vercel_project_domain" "prod" {
  project_id = vercel_project.this.id
  domain     = split("https://", var.URL)[1]

}




resource "vercel_project_environment_variable" "resend_key" {
  project_id = vercel_project.this.id
  key        = "RESEND_API_KEY"
  value      = var.RESEND_API_KEY
  target     = ["production", "preview", "development"]
}
resource "vercel_project_environment_variable" "resend_from" {
  project_id = vercel_project.this.id
  key        = "RESEND_FROM_EMAIL"
  value      = var.RESEND_FROM_EMAIL
  target     = ["production", "preview", "development"]
}
resource "vercel_project_environment_variable" "resend_to_booking" {
  project_id = vercel_project.this.id
  key        = "RESEND_TO_EMAIL_BOOKING"
  value      = var.RESEND_TO_EMAIL_BOOKING
  target     = ["preview", "development"]
}
resource "vercel_project_environment_variable" "resend_to_booking_prod" {
  project_id = vercel_project.this.id
  key        = "RESEND_TO_EMAIL_BOOKING"
  value      = var.RESEND_TO_EMAIL_BOOKING_PROD
  target     = ["production"]
}
resource "vercel_project_environment_variable" "resend_to_event" {
  project_id = vercel_project.this.id
  key        = "RESEND_TO_EMAIL_EVENT"
  value      = var.RESEND_TO_EMAIL_EVENT
  target     = ["production", "preview", "development"]
}
resource "vercel_project_environment_variable" "url" {
  project_id = vercel_project.this.id
  key        = "URL"
  value      = var.URL
  target     = ["production", "preview", "development"]
}
