export class EventWindow {
  public windowRef;
  public data;

  openInNewWindow() {
    this.windowRef = window.open(window.location.href, 'newwindow', 'width=450,height=400');
    localStorage.setItem('event', JSON.stringify(this.data));

    window.addEventListener('storage', this.storageEventHandler, false);
  }

  storageEventHandler(evt){
    let oldValue = JSON.parse(evt.oldValue);

    if (oldValue === 'news') {}
    if (oldValue === 'transaction') {}
  }
}
