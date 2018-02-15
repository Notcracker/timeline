export class EventWindow {
  public windowRef;
  public data;
  public cmpRef;
  public hasBeenRead = false;

  openInNewWindow() {
    this.windowRef = window.open(window.location.href, 'newwindow', 'width=450,height=400');
    localStorage.setItem('event', JSON.stringify(this.data));

    window.addEventListener('storage', (eve) => {this.storageEventHandler(eve, this.data, this.cmpRef)}, false);
  }

  storageEventHandler(evt, data, cmpRef){
    let oldValue = JSON.parse(evt.oldValue);

    if (oldValue.type === 'news') {
      this.hasBeenRead = true;
      data.event.hasBeenRead = true;
    }
    if (oldValue.type === 'transaction') {
      cmpRef.destroy();
      this.windowRef.close();
    }
  }
}
