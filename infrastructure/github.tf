
# Configure the GitHub Provider
provider "github" {}

resource "github_repository" "this" {
  name        = "gardasee-kite-spitit-fun"
  description = "Codebase for a simple landing page based on Next.js and Tailwind CSS"

  visibility = "public"


}
