# Nutshell: The Information Dashboard

You've been hired by a product company that builds productivity apps. For your first week on the job, you've been put on a team to build a new product called Nutshell. It's a one-stop dashboard for people to organize their daily tasks, events, news article, friends, and chat messages.

You will be using all of the skills and concepts that you've learned up to this point in the course.

1. Functions
1. Databases/API
1. Github
1. Objects
1. CSS
1. Handling user events
1. Factory functions
1. Data entry/editing
1. Modular code with Browserify
1. Relational data

To start you off, here's an example of what the resources in your API should look like once it's populated with some data from your application.

### Users

```json
{ "id": 1, "username": "Steve", "email": "me@me.com" }
```

### Messages

```json
{ "id": 1, "userId": 1, "message": "What's up?" }
```

### News

```json
{
    "id": 1,
    "userId": 2,
    "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/",
    "title": "Wormholes Allow Information to Escape Black Holes",
    "synopsis": "Check out this recent discovery about workholes"
}
```

### Friends

```json
{ "id": 1, "userId": 1, "otherFriendId": 3 }
```

### Tasks

```json
{ "id": 1, "userId": 3, "task": "Take out garbage" }
```

## Professional Requirements

1. All teammates must be using Grunt to run ESLint and Browserify during development
1. Each module should have a comment at the top with the following info: author(s) and purpose of module
1. The README for your project should include instructions on how another person can download and run the application

## How to Handle Authentication

You will be using session storage to keep track of which user has logged into Nutshell. When the user fills out the registration form, you will POST their username and password to the `users` collection in your API. You will then immediately take the `id` of the object in the response and save it to session storage.

```js
sessionStorage.setItem("activeUser", user.id)
```

If you want to add a Logout feature, all you need to do it remove the session storage item.

```js
sessionStorage.removeItem("activeUser")
```

## Stretch Goals
1. Private chat messages
1. Friend requests, and the ability to reject or accept them
1. Real time chat updates. If a user in one tab writes a chat message, a user logged in on another tab [will immediately see that chat message](https://www.w3schools.com/jsreF/event_storage_storagearea.asp)
<!-- Link to ERD -->
https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.xml#R7Z1dc5s4FIZ%2FjS%2Fb4Rt8mTjJbrbJbifJTrd7pxjFZoKRRyhNvL9%2BJZD8gexaJRFSJmo7HSNABvHqQbznWIzCyeLlNwyW82uUw3IUePnLKDwbBUGWBvR%2FVrBqC6Jx1hbMcJG3Rf6m4Lb4D%2FJCj5c%2BFTmsdzYkCJWkWO4WTlFVwSnZKQMYo%2BfdzR5QufutSzCDUsHtFJRy6bciJ3N%2BWrG3Kf8dFrO5%2BGbf42sWQGzMC%2Bo5yNHzVlF4PgonGCHSflq8TGDJ2k60S7vfxYG16wPDsCIqOzzOHr9EyeSP6LL4dvntMjz797v%2FyQ%2Bitp4foHzip%2Fx3DXHNj5msREPUz8WiBBVdOn1AFbnlazy6PJ0XZX4FVuiJHUhNwPRRLJ3OES7%2Bo9uDkq7yaQFdjQm%2FzkHCaivKcoJKhJvvCaHH%2Fu7sectq5N%2BFYU33%2FSrO2u8UXYOXnQ2vQE3EUaKyBMu6uG%2BOm%2B24AHhWVKeIELTgG4mzvNg9qIfmD10PymJW0bIp%2FS6IRVu0Z%2BNHdJm3JsQEvhy8UP768tNuA9ECEryim%2FAdIi4Y3mMyvvi8kZ%2Bf8LL5tvQi3rMAl%2FxsXfNGFfQDF8YviSTeKxJacnkmC2UOluwjPWFSgPKG9kpQzdjaU4KWvJ1L%2BCCuC%2BanwD7fi2vhb7V1u%2B0pa9OCdswTXrwo8rypdVtAFWoUWi%2FBtKhmV%2B23hNGm6IZ%2FGytCtMqHsumTc1oZrNjRIAIIuF9re4mKijQNGp%2FSf7TdJ97neBTTM53QZX%2BzTP%2BxzTGZoKomGBTN1YZUgM%2BQifA0x2h5RyUHxdlu96O4o6VAVUs%2F69ayxLimaMdT0lToaZNUIknq65dXa%2Bl%2Buy%2Fv0YWqpHb182byOaYQdppc%2FMpa4Dc%2B%2Fp2b242CRuL9GtkSRTisJlJJE3%2BCBdRDGO%2B4HJrK3jleBsFJbB4nmSSdW4Ir00BpFfQxaJLaRpOxJInzT9egKB1PbOdJpsgTMYh4e%2FEIWW6Jp3Y8GZQn41480SgJXx6xgrp%2BRjh3RLGdKL4fGEdK4JBiFinhAd%2FFHFJCSRIOJdajJMzUUOJrG9qGsmnrMDIcRsJeGNEoB9mevcAFrHLn4ptz8dePEMJyVTVJfF%2Bbjx%2FKpisXivPx7fTxwwMerTU%2Bfih7ts7HH%2Fh%2BlPS6H2nUhGzGsnChLsa4we3bAUX1JqXxmUi2bS%2BMA%2BUjjW4zyx6SI9mK%2FYvMIW5HLg4q9kMlM%2B69RbJ366AyIFQib79AzEFFg4PiOKKZI75n3HmLZKvFYWQ4jBxwZo05b5FsqNyB%2BnEY383PRs53k3y3OOn4buNUERpJoE0msknCZOJMNztNt%2BiAoSJuQ4p3IX0GSyQbLM50G%2FhWZFu6WyT7Ji551opR7RGcRIo40fcwFMsOi2mYfKRBrW2JbrFslpw9wTNAHEysh0kaGYdJ4GBiDiaxZSlugSfLYYIWyxISmI8mwejEe7U6HFR0P%2FCI3zQbo0rgaciUdFRR1AfvxPZQxY9lObgMg3cCE9WcJY3qkYM%2FLho45CClXwKtRkFoiOo4kOgGiXjSMBcNjOXwj8PIcBjpN3%2BBRjnIYZ4TdnVK6BLxTQYEOd2FReIrjj88bXn4sRy%2F4UJxIUE7Q4LxgXCPNXn4sRz%2BcSHBge9H%2FTJn9WkikeM6LiRoxdD2CE7MZ%2BEncgzINEw%2B0Mg2sS1dVqRGbfttN1cOJLaDxHzmfeKMe5Mgsc24T%2FZPN%2BuMe%2FtZopx9r1E9eyY6MP6Q85Fw0i%2F%2FXqMgZAP2dlWhZV3scdwcUCwDSmg8WSmRHVuHk%2BFw0m%2FiAn1yGGuI5ziM6MaIQMbxH%2Fho043DiEGMjPthRKMc5PDOXcF8V%2B%2BWgMXSIcV6pKSq8ZxAm4bkeI5DynBI6RnK0SaHREbKNaxrMBsotcB3qQUKvzWOUuUJCrTlFiQyOJhSXGKBnYkFyQHSrAe3ijcibUHkVA4iu8SCgZ%2BT%2B%2F1CUKMm5Ogwvxu5sa3xse0RokTGcwvEKyHd0NYETFLLfiHop%2FtfLniZO5bYzhLRkw2yZM%2BM1sZHJx%2BJJv1y8DUKQoMV6ziimSNj4%2FP6pbK%2F4igyHEX6TaakUQ573h34A7L2G8RsS0fObDv6Qo0oHn%2BOFbkh0pnfXimZbI80SnF%2Bm51%2BW3rAS1lHftQUpc9byfa8ZtD4iPZj%2BW1Zv%2FR7jZqQHRP3Qx4rBrZHcBIp4kTf81Dm8u9NkiSw7PE4k%2FPvr9AUkAK9%2FkWkjiaaaZKGxmnipr83SRPb0u8z2X111v37YInILzPIEtmpddb9kDSxLPs%2B8GQrxU06%2FB5Y4geKPpxG7bj5CkzOD2rbfAWZhnCOw4hujIiJ582FATOXdW9yRNIv616fHMYKL8aA%2BQyKWAU9v4KsbmDZGCrnmzVS683JQkT%2BYJWfYNxctfMbKok7dA2qFbvCBKNHuBVu85o%2FbJeXgvwjdqefv7OL%2BznmS2ci1tcsrMRCRZuE7fTJ%2B%2Bw1x9CUtLumyVgUbPZulnZ2%2FwpxQZuWRfiawrYxWAscJAEvqtETnsKftbUYQxABn4NbKvwKfT1j%2Ba5OeCFuLtCP3YPepx7%2BHV9Zn9kEIgMR8xOTv3md%2B1h7snyvjQalisJORX63orYtpIoaMa9P%2FDX6Vhg1GdG30Kq3K9P4mEh79AszGlaYAlmrhkO%2Fo%2BFxB6KqGo46FfndirRrWI6NWa3hcRDqRe1x8Skk7ekFqNfRTNBTfOt3g%2FOKkm4IVrv4FKJrbyk%2B8eTAkoU2glxoHS%2F8IoObY2N5Quu1%2BdbSW9I2zFQFHxgWfIeRYdSpQXnAcKTfaJe7wluz35a1a2lvCX7dCWwYPuzKuyt%2BM4MLhbet6%2BV7d0zQm%2B9Bp%2BN40cCCV4h37gi%2BvEfPr8C6FYpm50A%2FCyNCK8PVRa0QrhiS4Wl3qKGsab%2FfmIVqBay2NuNGzsHj7QyNxPKmh7QVKvYXuogRItubY7CcX6Mcsi3%2BBw%3D%3D
