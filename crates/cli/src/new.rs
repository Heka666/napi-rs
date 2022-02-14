use clap::Args;
use dialoguer::{theme::ColorfulTheme, Input, MultiSelect};

use crate::util::{Executable, AVAILABLE_TARGETS};

#[derive(Args, Debug)]
#[clap(version)]
/// create a new project with pre-configured boilerplate
pub struct NewCommand {
  /// the path where the napi-rs crate will be created
  path: String,

  #[clap(short, long)]
  /// name of the napi-rs crate
  name: Option<String>,

  #[clap(long)]
  /// whether generate preconfigured  github actions to crate folder
  enable_github_actions: bool,

  #[clap(short, long)]
  targets: Option<Vec<String>>,

  #[clap(long)]
  enable_all_targets: bool,
}

impl Executable for NewCommand {
  fn execute(&self) {
    todo!()
  }
}

impl NewCommand {
  pub fn get_name(&self) -> String {
    self.name.clone().unwrap_or_else(|| {
      Input::with_theme(&ColorfulTheme::default())
        .with_prompt("Package name (The name filed in your package.json)")
        .interact_text()
        .unwrap()
    })
  }

  pub fn get_targets(&self) -> Vec<String> {
    self.targets.clone().unwrap_or_else(|| {
      let mut targets = Vec::new();
      if self.enable_all_targets {
        for target in AVAILABLE_TARGETS.iter() {
          targets.push(target.to_string());
        }
      } else {
        let selected_target_indices = MultiSelect::with_theme(&ColorfulTheme::default())
          .with_prompt("Choose target(s) you want to support")
          .items(AVAILABLE_TARGETS)
          .interact()
          .unwrap();

        for index in selected_target_indices {
          targets.push(AVAILABLE_TARGETS[index].to_string());
        }
      }

      targets
    })
  }
}
