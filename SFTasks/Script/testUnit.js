function Test2()
{ 
  //Enters '^v' in the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Keys("^v");
  //Enters '^[ReleaseLast]^a^a' in the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Keys("^[ReleaseLast]^a^a");
  //Enters '^a' in the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Keys("^a");
  //Enters '~[ReleaseLast]' in the 'wndForegroundStaging' object.
  Aliases.explorer.wndForegroundStaging.Keys("~[ReleaseLast]");
}
