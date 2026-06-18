# Monika Tomanová Lash Stylist

Jednostránkový statický web pro beauty/lash stylist podnikání Moniky Tomanové v Ostravě-Mariánských Horách.

Web je připravený pro dočasné nasazení přes GitHub Pages z kořene repozitáře a pro budoucí doménu `monikatomanova.cz`, která zatím není aktivní.

Aktuální dočasná URL:

`https://fmraz.github.io/monikatomanova.cz/`

## Obsah webu

- `index.html` - kompletní český obsah, SEO metadata, Open Graph metadata a JSON-LD strukturovaná data.
- `style.css` - responzivní vizuální styl, mobilní navigace, layout, placeholdery pro fotografie.
- `script.js` - mobilní menu, FAQ accordion, galerie, animace při scrollu a dynamický rok ve footeru.
- `assets/instagram/` - lokální kopie vybraných veřejně dostupných fotografií a náhledů z Instagramu @lashes.mt.
- `README.md` - instrukce pro úpravy a nasazení.
- `.gitignore` - ochrana před commitem environment souborů, build artefaktů a závislostí.

Web nevyžaduje `npm install`, build step, backend ani žádné placené závislosti.

## Jak upravit obsah

Upravujte přímo text v `index.html`.

Hlavní místa k doplnění jsou označená TODO komentáři, přirozeným veřejným textem nebo touto dokumentací:

- `[DOPLNIT TELEFON]`
- `[DOPLNIT E-MAIL]`
- `[DOPLNIT OTEVÍRACÍ DOBU]`
- `[DOPLNIT AKTUÁLNÍ CENY]`
- `[DOPLNIT ROKY PRAXE, CERTIFIKÁTY, ZNAČKY PRODUKTŮ]`
- `[DOPLNIT FOTKY PRÁCE / BEFORE-AFTER]`
- `[DOPLNIT IČO, pokud má být uvedeno]`

Na veřejném webu nejsou použité syrové hranaté placeholdery pro telefon, e-mail nebo otevírací dobu. Dokud údaje nejsou známé, návštěvnice vidí přirozenější informaci, že rezervace probíhá přes Instagram.

Rezervace nyní vede na Instagram DM:

`https://www.instagram.com/lashes.mt/`

Pokud bude později rezervační systém, nahraďte odkazy tlačítek `Objednat termín`, `Objednat se` a `Objednat přes Instagram` finální rezervační URL.

Sekce `Objednání` vysvětluje návštěvnicím z Instagramu postup rezervace ve třech krocích. Pokud vznikne rezervační systém, upravte text tak, aby první krok vedl přímo na nový rezervační odkaz.

## Galerie, fotografie a Reels

Web nyní používá lokálně uložené fotografie a náhledy z Instagramu @lashes.mt, aby GitHub Pages nebyl závislý na dočasných Instagram URL. Profilový portrét je použitý v sekci `O mně`, detail řas v hero sekci a kurzové vizuály v sekci `Kurz`.

Po přihlášení k Instagramu bylo z profilu zpracováno všech 36 dostupných příspěvků. Náhledy jsou uložené ve složce `assets/instagram/archive/`. Výchozí galerie ukazuje kurátorovaný výběr novějších a vizuálně silnějších položek; celý archiv 36 příspěvků jde rozbalit tlačítkem v galerii.

Karty galerie jsou záměrně sjednocené do menších čtvercových náhledů se stejnou výškou, aby sekce působila jako přehledné portfolio a ne jako neuspořádaný Instagram feed.

Galerie je roztříděná podle tématu:

- Řasy
- Obočí & lash lift
- Kurz
- Vzdělávání
- Reels / video

Reels a video příspěvky nejsou ukládány jako lokální `.mp4`, protože Instagram je v prohlížeči poskytuje jako dočasné `blob:` streamy bez stabilní adresy vhodné pro GitHub Pages. Na webu jsou proto použité lokální náhledové obrázky a odkazy na původní Reels / příspěvky.

Po dodání finálních fotografií nebo videí:

1. Nahrajte optimalizované soubory do repozitáře, ideálně do složky `assets/`.
2. Nahraďte nebo doplňte položky v sekci `#galerie` v `index.html`.
3. Přidejte výstižný `alt` text, například `Detail prodloužených řas po aplikaci`.
4. Ideálně používejte komprimovaný formát `.webp` nebo optimalizované `.jpg`.
5. U videí používejte krátké optimalizované `.mp4` soubory s `preload="metadata"` a náhledovým obrázkem.

## Kurz prodlužování řas

Sekce `#kurz` vychází z veřejného Instagram příspěvku:

`https://www.instagram.com/p/DYpo3svjuNW/`

Obsahuje individuální dvoudenní školení `Classic 1:1 & Volume Basics (2D)`, určené pro začátečnice i stylistky, které chtějí zlepšit techniku. Cena kurzu není doplněná, protože nebyla ve veřejném příspěvku dostupná.

## Nasazení na GitHub Pages

Web je připravený pro deployment z rootu repozitáře.

1. Nahrajte změny do GitHub repozitáře.
2. V GitHubu otevřete `Settings -> Pages`.
3. V části `Build and deployment` vyberte:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
4. Uložte nastavení.
5. Počkejte na dokončení deploye.
6. Web bude dostupný na dočasné GitHub Pages URL ve tvaru `https://GITHUB_USERNAME.github.io/REPOSITORY_NAME/` nebo `https://GITHUB_USERNAME.github.io/`.

## Budoucí doména monikatomanova.cz

Soubor `CNAME` zatím není vytvořen, protože doména `monikatomanova.cz` není zakoupená a nemá se aktivovat.

Až bude doména zakoupená:

1. Přejděte v repozitáři do `Settings -> Pages`.
2. Přidejte custom domain: `www.monikatomanova.cz`.
3. U DNS poskytovatele přidejte CNAME záznam:
   - `www` -> `GITHUB_USERNAME.github.io`
4. Pro root doménu `monikatomanova.cz` přidejte GitHub Pages A záznamy:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. V GitHub Pages zapněte `Enforce HTTPS`.
6. Podle potřeby nastavte přesměrování root domény na `www.monikatomanova.cz`.

Po aktivaci domény je vhodné přidat soubor `CNAME` s obsahem:

```text
www.monikatomanova.cz
```

## SEO poznámky

V `index.html` jsou připravené:

- SEO title a meta description.
- Canonical URL pro aktuální dočasnou GitHub Pages URL.
- Open Graph metadata.
- Twitter card metadata.
- JSON-LD strukturovaná data typu `BeautySalon`.
- JSON-LD strukturovaná data typu `FAQPage`.

Po koupi a aktivaci domény `monikatomanova.cz` přepněte canonical URL, `og:url`, `og:image`, `twitter:image`, JSON-LD `url` a JSON-LD `image` na finální doménu.

JSON-LD záměrně neobsahuje placeholder telefon, ceny ani otevírací dobu. Po doplnění reálných údajů lze přidat `telephone`, `priceRange`, `openingHoursSpecification`, případně `geo` souřadnice a přesnější `hasMap`.

## Repo a bezpečné vyčištění

Produkční web Moniky je čistě statický a pro GitHub Pages jsou potřeba jen tyto položky:

- `index.html`
- `style.css`
- `script.js`
- `README.md`
- `.gitignore`
- `assets/`

Pokud se v pracovním adresáři objeví nesouvisející Next/Supabase soubory typu `app/`, `components/`, `lib/`, `data/`, `supabase/`, `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json` nebo `.env.example`, nepatří do tohoto statického webu. Bez potvrzení je nemažte, ale doporučené je přesunout je do samostatného repozitáře/projektové složky.

## Chybějící informace k doplnění

- phone
- email
- opening hours
- exact price list
- real gallery images
- certificates / experience
- business ID / IČO if needed
- privacy policy if contact form or tracking is added later

Pokud bude později přidán kontaktní formulář, analytika nebo reklamní tracking, doplňte také zásady ochrany osobních údajů a cookie/consent řešení podle aktuálních požadavků.
