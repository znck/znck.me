workflow "Deploy Website" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@6309cd9"
  args = "run deploy"
  secrets = ["GITHUB_TOKEN"]
}
