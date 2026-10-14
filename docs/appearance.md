# Themes and appearance

OpenVision uses the editor's selected color theme across Project Home, cloning,
profile dialogs and custom model settings. The home screen has a compact layout
and a small monochrome eye. Colors come from the theme rather than a fixed green
palette.

## Choose a theme

- On Project Home, select **Color theme** at the bottom right.
- In an editor, open the Command Palette and choose **Preferences: Color Theme**.
- Choose a bundled dark, light, midnight or high-contrast theme. The same picker
  offers additional themes. Installed declarative theme extensions appear on Home;
  themes with executable extension code remain available in the full editor.

The selected theme belongs to your local profile. Home and the editor use the
same native theme settings, including installed theme extensions and custom
color overrides. Theme extensions may define their own colors and names.

## Customize colors, fonts and icons

In the editor, select your **Local Profile → Appearance settings**, or open
Settings and search for `workbench.color`. **Workbench: Color Customizations**
lets you override individual interface colors. Use **Preferences: Open User
Settings (JSON)** to edit them directly, for example:

```json
{
  "workbench.colorCustomizations": {
    "editor.background": "#202124",
    "editorWidget.background": "#27282c",
    "foreground": "#eeeeee",
    "button.background": "#b7b7c9",
    "button.foreground": "#202124",
    "focusBorder": "#b7b7c9"
  }
}
```

Merge these entries into your existing settings. Remove an override to return
that color to the selected theme. Project Home uses the editor background;
the clone dialog uses the editor-widget background. Inputs, selections, buttons,
focus and error feedback use their corresponding native theme colors.

Search Settings for `editor.fontFamily`, `editor.fontSize` and `window.zoomLevel`
to adjust typography and scale. **Preferences: File Icon Theme** and
**Preferences: Product Icon Theme** choose installed icon sets.

## Scope

Theme support follows the existing native configuration and theme services.
OpenVision adds entry points and makes its custom surfaces consume those colors;
it does not maintain a separate appearance profile. Third-party themes and
platform accessibility tools can vary. Native platform checks are currently
Windows-only.
