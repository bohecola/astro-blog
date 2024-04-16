interface ThemeData {
  themeValue: string;
}

interface WindowEventMap {
  'app:themechange': CustomEvent<ThemeData>
}