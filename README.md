# Animism
A Discord command framework built on Eris.

Animism aims to be an easy to learn but powerful Discord bot command framework.
Eris' CommandClient is a source of inspiration for the structure of the
framework, though Animism hopes to be more typescript friendly with various
other ease of use improvements.


## Roadmap
Here's the rough outline of what's planned for now.

- [ ] Command Handling
  - [ ] Allow registering command categories
    - If used, the automatically generated command message will display
    according to categories used.
    - Defaults to `Other` if commands are registered
    with no category.

  - [ ] Allow registering commands
    - [ ] Command labels
    - [ ] Registering subcommands
    - [ ] Error handling
    - [ ] Command permissions system
      - [ ] Permissions based access
      - [ ] User ID based access
      - [ ] Predicate function based access
        - Function is passed the `Channel` and `Message`
    - [ ] Argument validation and collection
      - Command registration provides an array of validation functions to be
      used, if not provided all arguments are passed as an array of strings.

  - [ ] Reaction based commands
    - Support for both custom and built-in emoji.
    - Same general implementation as text-based commands.

  - [ ] Lifecycle hooks for commands
    - [ ] Pre-parse - before messages are parsed
    - [ ] Pre-execution - after commands are parsed but before they're executed
    - [ ] Post-execution - after command execution finishes

## Documentation
Documentation is built automatically from the main brain and is published at
[https://katlyn.dev/animism](https://katlyn.dev/animism).
