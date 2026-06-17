# Monika Tomanová Lash Stylist

Jednostránkový statický web pro beauty/lash stylist podnikání Moniky Tomanové v Ostravě-Mariánských Horách.

Web je připravený pro dočasné nasazení přes GitHub Pages z kořene repozitáře a pro budoucí doménu `monikatomanova.cz`, která zatím není aktivní.

## Obsah webu

- `index.html` - kompletní český obsah, SEO metadata, Open Graph metadata a JSON-LD strukturovaná data.
- `style.css` - responzivní vizuální styl, mobilní navigace, layout, placeholdery pro fotografie.
- `script.js` - mobilní menu, FAQ accordion, animace při scrollu a dynamický rok ve footeru.
- `README.md` - instrukce pro úpravy a nasazení.

Web nevyžaduje `npm install`, build step, backend ani žádné placené závislosti.

## Jak upravit obsah

Upravujte přímo text v `index.html`.

Hlavní místa k doplnění jsou označená viditelnými placeholdery a TODO komentáři:

- `[DOPLNIT TELEFON]`
- `[DOPLNIT E-MAIL]`
- `[DOPLNIT OTEVÍRACÍ DOBU]`
- `[DOPLNIT AKTUÁLNÍ CENY]`
- `[DOPLNIT ROKY PRAXE, CERTIFIKÁTY, ZNAČKY PRODUKTŮ]`
- `[DOPLNIT FOTKY PRÁCE / BEFORE-AFTER]`
- `[DOPLNIT IČO, pokud má být uvedeno]`

Rezervace nyní vede na Instagram DM:

`https://www.instagram.com/lashes.mt/`

Pokud bude později rezervační systém, nahraďte odkazy tlačítek `Objednat termín`, `Objednat se` a `Objednat přes Instagram` finální rezervační URL.

## Galerie a fotografie

Instagram fotografie se záměrně nestahují automaticky. Sekce Galerie a Hero obsahují elegantní placeholdery.

Po dodání reálných fotografií:

1. Nahrajte optimalizované soubory do repozitáře, například do složky `assets/`.
2. Nahraďte placeholder bloky v `index.html` skutečnými `<img>` prvky.
3. Přidejte výstižný `alt` text, například `Detail prodloužených řas po aplikaci`.
4. Ideálně používejte komprimovaný formát `.webp` nebo optimalizované `.jpg`.

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
- Canonical URL pro budoucí produkční doménu.
- Open Graph metadata.
- Twitter card metadata.
- JSON-LD strukturovaná data typu `BeautySalon`.

Po doplnění telefonu, otevírací doby, přesných cen a reálných fotografií aktualizujte i JSON-LD data v `<script type="application/ld+json">`.

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
