$(function() {
    describe('RSS Feeds', function() {
        // Makes sure that the allFeeds variable has been defined
        // and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Ensures that each feed in the allFeeds object has a URL
        // defined and that the URL is not empty
        it('URL defined', function() {
          for(const feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          }
        });

        // Ensures that each feed in the allFeeds object has a name defined
        // and that the name is not empty
        it('name defined', function() {
          for(const feed of allFeeds) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          }
        });
    });

    describe('The menu', function() {
        // Ensures the menu is hidden by default
        it('hidden by default', function() {
          const body = document.querySelector('body');
          expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        // Ensures the menu changes visibility when the menu is clicked
        it('menu toggles', function() {
          const body = document.querySelector('body');
          const menu = document.querySelector('.menu-icon-link');
          menu.click();
          expect(body.classList.contains('menu-hidden')).toBe(false);
          menu.click();
          expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
          loadFeed(0, done);
        });
        // Ensures when the loadFeed function is called and completes its work,
        // there is at least a single .entry element within the .feed container
        it('completes its work', function() {
          const feed = document.querySelector('.feed');
          expect(feed.children.length > 0).toBe(true);
        });
    });

    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed');
        const firstFeed = [];
        beforeEach(function(done) {
          loadFeed(0);
          Array.from(feed.children).forEach(function(entry) {
            firstFeed.push(entry.innerText);
          })
          loadFeed(1, done);
        });

        // Ensures that content actually changes when a new feed is loadFeed
        // by the loadFeed function
        it('content actually changes', function() {
          Array.from(feed.children).forEach(function(entry, index) {
            console.log(entry.innerText, firstFeed[index], entry.innerText === firstFeed[index]);
            expect(entry.innerText === firstFeed[index]).toBe(false);
          });
        });
    });
}());
