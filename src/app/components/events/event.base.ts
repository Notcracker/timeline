export class EventWindow {
  public windowRef;
  public data;
  public cmpRef;
  public hasBeenRead = false;
  
  resetColor() { }

  openInNewWindow() {
    this.windowRef = window.open(window.location.href, 'newwindow', 'width=450,height=400');
    this.windowRef.event = this.data;
    window['parentFuncion'] = (message) => {
      this.storageEventHandler(message, this.data, this.cmpRef);
    }
  }

  storageEventHandler(evt, data, cmpRef) {
    if (evt.type === 'news') {
      this.resetColor();
      console.log('????')
      this.hasBeenRead = true;
      data.event.hasBeenRead = true;
    }
    if (evt.type === 'transaction') {
      cmpRef.destroy();
      this.windowRef.close();
    }
  }
}
