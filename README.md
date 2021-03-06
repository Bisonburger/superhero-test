# SuperHero - Programming Test

The SuperHero program is unfinished...

Finish as many (or as few) as you can in the time - work in any order

* Modify the super-hero-list component to show the superhero cards instead of the names
  * Cards should each be the same size
  * Fix the super-hero-card display for areas where it is broken
  * Show cards in rows of 3; but scale down when the display size changes (i.e. show 2 cards/row, then 1/row)
  * Bonus - add a button(s) to allow the user to switch between card and list displays
* Modify the cards/list-item so that when they are clicked on - you go to the super-hero-details page
* Modify the super-hero-details page to show the detail for the clicked on card
  * Use your UI/UX skills to design a 'user friendly' look (feel free to change the template provided)
* Modify the super-hero-list search to filter the list of cards as you type in the search box
  * If you type man in the search box - you should see the cards for Batman, Wonder Woman, Aquaman, and Superman (as they contain man)
  * The search should ignore capitalization (Man = man = MAN...)
  * Use client-side filtering for this
* Add back button to the super-hero-detail page to return to the list
  * Bonus - keep the list in the order in which you left it (i.e. keep the filter in place)
* Add a 'page not found' page when the user navigates to an managed page
* Write a test for the search functions you added to verify the search results
* Add client-side pagination to the super-hero-list (for cards if you've implemented cards)
  * add a selector to allow the user to select either 2, 3, 4, 5, 6, or 'show all' elements per 'page'
  * Implement as 'previous page'/'next page' (and enable buttons only when appropriate - i.e. at the end of the list there isnt a 'next page')
  * If search was implemented - ensure that it works along with paging
