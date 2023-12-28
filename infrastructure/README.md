# Terraform

<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_github"></a> [github](#requirement\_github) | ~> 5.0 |
| <a name="requirement_vercel"></a> [vercel](#requirement\_vercel) | ~> 1.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_github"></a> [github](#provider\_github) | 5.42.0 |
| <a name="provider_vercel"></a> [vercel](#provider\_vercel) | 1.0.0 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [github_repository.this](https://registry.terraform.io/providers/integrations/github/latest/docs/resources/repository) | resource |
| [vercel_project.this](https://registry.terraform.io/providers/vercel/vercel/latest/docs/resources/project) | resource |
| [vercel_project_environment_variable.google](https://registry.terraform.io/providers/vercel/vercel/latest/docs/resources/project_environment_variable) | resource |
| [vercel_project_environment_variable.resend_from](https://registry.terraform.io/providers/vercel/vercel/latest/docs/resources/project_environment_variable) | resource |
| [vercel_project_environment_variable.resend_key](https://registry.terraform.io/providers/vercel/vercel/latest/docs/resources/project_environment_variable) | resource |
| [vercel_project_environment_variable.resend_to](https://registry.terraform.io/providers/vercel/vercel/latest/docs/resources/project_environment_variable) | resource |
| [vercel_project_environment_variable.url](https://registry.terraform.io/providers/vercel/vercel/latest/docs/resources/project_environment_variable) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_NEXT_PUBLIC_GOOGLE_API_KEY"></a> [NEXT\_PUBLIC\_GOOGLE\_API\_KEY](#input\_NEXT\_PUBLIC\_GOOGLE\_API\_KEY) | n/a | `string` | n/a | yes |
| <a name="input_RESEND_API_KEY"></a> [RESEND\_API\_KEY](#input\_RESEND\_API\_KEY) | n/a | `string` | n/a | yes |
| <a name="input_RESEND_FROM_EMAIL"></a> [RESEND\_FROM\_EMAIL](#input\_RESEND\_FROM\_EMAIL) | n/a | `string` | n/a | yes |
| <a name="input_RESEND_TO_EMAIL"></a> [RESEND\_TO\_EMAIL](#input\_RESEND\_TO\_EMAIL) | n/a | `string` | n/a | yes |
| <a name="input_URL"></a> [URL](#input\_URL) | n/a | `string` | n/a | yes |

## Outputs

No outputs.
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
