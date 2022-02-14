pub trait Executable {
  fn execute(&self);
}

pub const AVAILABLE_TARGETS: &[&'static str] = &[
  "aarch64-apple-darwin",
  "aarch64-linux-android",
  "aarch64-unknown-linux-gnu",
  "aarch64-unknown-linux-musl",
  "aarch64-pc-windows-msvc",
  "x86_64-apple-darwin",
  "x86_64-pc-windows-msvc",
  "x86_64-unknown-linux-gnu",
  "x86_64-unknown-linux-musl",
  "x86_64-unknown-freebsd",
  "i686-pc-windows-msvc",
  "armv7-unknown-linux-gnueabihf",
  "armv7-linux-androideabi",
];
