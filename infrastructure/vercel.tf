
resource "vercel_project" "this" {
  name      = github_repository.this.name
  framework = "nextjs"


  serverless_function_region = "fra1"
  git_repository = {
    type = "github"
    repo = github_repository.this.full_name
    // production_branch = "prod"
  }
  vercel_authentication = {
    deployment_type    = "none"
    protect_production = false
  }


}


resource "vercel_project_environment_variable" "google" {
  project_id = vercel_project.this.id
  key        = "NEXT_PUBLIC_GOOGLE_API_KEY"
  value      = var.NEXT_PUBLIC_GOOGLE_API_KEY
  target     = ["production", "development"]
}

resource "vercel_project_environment_variable" "resend_key" {
  project_id = vercel_project.this.id
  key        = "RESEND_API_KEY"
  value      = var.RESEND_API_KEY
  target     = ["production", "development"]
}
resource "vercel_project_environment_variable" "resend_from" {
  project_id = vercel_project.this.id
  key        = "RESEND_FROM_EMAIL"
  value      = var.RESEND_FROM_EMAIL
  target     = ["production", "development"]
}
resource "vercel_project_environment_variable" "resend_to" {
  project_id = vercel_project.this.id
  key        = "RESEND_TO_EMAIL"
  value      = var.RESEND_TO_EMAIL
  target     = ["production", "development"]
}
resource "vercel_project_environment_variable" "url" {
  project_id = vercel_project.this.id
  key        = "URL"
  value      = var.URL
  target     = ["production", "development"]
}
