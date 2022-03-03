# War awareness popup

## What is this?

Dear website owners: if you put this little script into you site, it will show an awareness popup to Russian visitors. Many official sites might be blocked, but yours isn’t. Translation below. 

<img width="1214" alt="Preview" src="https://user-images.githubusercontent.com/100711150/156415798-2719533a-cc78-48f2-9fea-c71903fad31c.png">

Россияне. Ваше правительство лжет вам об Украине. Пожалуйста, найдите способ узнать правду от семьи, друзей или из новостей за пределами России! Убивают невинных людей и детей! Восстание!

Translation:
Russians: Your government lies to you about Ukraine. Please find a way to get the truth from family, friends or news outside of Russia! Innocent people and children are being killed! Revolt!

You can check the translation on [deepl.com](https://www.deepl.com/translator#ru/en/%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F%D0%BD%D0%B5.%20%D0%92%D0%B0%D1%88%D0%B5%20%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE%20%D0%BB%D0%B6%D0%B5%D1%82%20%D0%B2%D0%B0%D0%BC%20%D0%BE%D0%B1%20%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B5.%20%D0%9F%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0%2C%20%D0%BD%D0%B0%D0%B9%D0%B4%D0%B8%D1%82%D0%B5%20%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D1%80%D0%B0%D0%B2%D0%B4%D1%83%20%D0%BE%D1%82%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8%2C%20%D0%B4%D1%80%D1%83%D0%B7%D0%B5%D0%B9%20%D0%B8%D0%BB%D0%B8%20%D0%B8%D0%B7%20%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B5%D0%B9%20%D0%B7%D0%B0%20%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B0%D0%BC%D0%B8%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8!%20%D0%A3%D0%B1%D0%B8%D0%B2%D0%B0%D1%8E%D1%82%20%D0%BD%D0%B5%D0%B2%D0%B8%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%20%D0%B8%20%D0%B4%D0%B5%D1%82%D0%B5%D0%B9!%20%D0%92%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%B8%D0%B5!). 

## How to does it work?

Just add the following snippet to your page.

```html
<script defer src="https://helptheukrainenow.newnow.cool/helptheukrainenow.js"></script>
```
Every visitor with russian as the browser language will see the popup. Clicking anywhere closes it again. 

## If you want to change the message...

You can change the title and text like this.

```html
<script>
  window.HELP_THE_UKRAINE_NOW_TITLE = "Your custom title";
  window.HELP_THE_UKRAINE_NOW_TEXT = "Your custom text";
</script>

<script defer src="https://helptheukrainenow.newnow.cool/helptheukrainenow.js"></script>
```
