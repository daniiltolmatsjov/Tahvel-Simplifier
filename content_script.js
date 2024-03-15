setTimeout(() => {
      document.documentElement.style.filter = 'invert(100%)';

      
      var listItems = document.querySelectorAll('li.parent-list-item');
       listItems.forEach((item) => {
      if (item.textContent.includes('Ülesanded')) {
          item.parentNode.removeChild(item);
      }
      else if (item.textContent.includes('Praktika')) {
        item.parentNode.removeChild(item);
      }
      else if (item.textContent.includes('Muu õppeinfo')) {
        item.parentNode.removeChild(item);
      }
      else if (item.textContent.includes('Dokumendid')) {
        item.parentNode.removeChild(item);
      }
      else if (item.textContent.includes('Õppetoetused')) {
        item.parentNode.removeChild(item);
      }
      else if (item.textContent.includes('Teated')) {
        item.parentNode.removeChild(item);
      }
      else if (item.textContent.includes('Minu andmed')) {
        item.parentNode.removeChild(item);
      }
      else if (item.textContent.includes('Küsitlused')) {
        item.parentNode.removeChild(item);
      }
      else if (item.textContent.includes('Puudumised')) {
        item.parentNode.removeChild(item);
      }
      }); 

      var element = document.getElementById('repr-link-wrapper');
      if (element) {
        element.parentNode.removeChild(element);
      }

      var elementMenu = document.getElementById('main-menu-button-wrapper');
      if (elementMenu) {
        elementMenu.parentNode.removeChild(elementMenu);
      }

      var schedule = document.querySelectorAll('div.home-data-sections-inner-container');
      schedule.forEach((item1) => {
          if (item1.textContent.includes('ESMASPÄEV')) {
              item1.parentNode.removeChild(item1);
          }
      });

      var msg = document.getElementById('messages-button');
      if (msg) {
       msg.parentNode.removeChild(msg);
      }

      var abi = document.getElementById('help-menu');
      if (abi) {
       abi.parentNode.removeChild(abi);
      }

      var footer = document.getElementById('footer');
      if (footer) {
        var emailLink = footer.querySelector('a[href="mailto:tahvel@tugi.edu.ee"]');
        if (emailLink) {
          var emailText = document.createTextNode(' Extension by');
          emailLink.parentNode.replaceChild(emailText, emailLink);
        }

        var termsLink = footer.querySelector('a[ng-click="openTerms()"]');
        if (termsLink) {
          var termsText = document.createTextNode('Daniil Tolmatsjov & Artjom Zagrebaylov');
          termsLink.parentNode.replaceChild(termsText, termsLink);
        }

        var versionSpan = footer.querySelector('span');
        if (versionSpan) {
          versionSpan.textContent = 'TA-22V';
        }
      }
}, 1000);