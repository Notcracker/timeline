export class EventWindow {
  public windowRef;
  public data;

  ngOnInit() {
    this.windowRef = window.open(window.location.href, 'newwindow', 'width=300,height=250');
    localStorage.setItem('test', JSON.stringify(this.data));

    window.addEventListener('storage', this.storageEventHandler, false);

  }
  storageEventHandler(evt){
    console.log("storage event called key: " + evt);
  }
}
