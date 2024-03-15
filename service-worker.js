// This is the service worker for the extension

// This event is fired when the service worker is first installed
self.addEventListener('install', function(event) {
    console.log('Service worker installed.');
  });
  
  // This event is fired when the service worker is updated
  self.addEventListener('activate', function(event) {
    console.log('Service worker activated.');
  });
  
  // This event is fired when a message is sent to the service worker
  self.addEventListener('message', function(event) {
    if (event.data.action === 'update') {
      // Update the extension
      // ...
    }
  });