# مصاحبه فنی نیروی فرانت - دانیو

سطح: مبتدی

زمان پیشنهادی: نیم تا یک ساعت

## بخش اول: سوالات تئوری

1. مزیت ReactJS نسبت به استفاده از HTML و CSS به همراه JavaScript ساده (Vanilla JavaScript) چه بود که همه به استفاده از ReactJS رو آوردند؟
2. تفاوت انجام یک پروژه React با CRA (یا همان Create React App) و انجام آن با NextJS چیست؟
3. مفهوم کلی Virtual DOM را توضیح دهید.
4. JSX چیست؟
5. در سالیان اخیر به جای Class-Based Component از Functional Component استفاده می‌شود. همانطور که میدانید تحت شرایطی ممکن است کد مربوط به یک Functional Component از بالا تا پایین یک بار دیگر اجرا شود و تغییرات Virtual DOM روی DOM واقعی آورده شود که به آن Rerender می‌گویند. تحت چه شرایطی این اتفاق می‌افتد؟
6. دو تا از معروف‌ترین Hook هایی که در ReactJS کاربرد دارند، useCallback و useMemo هستند. از این دو هوک برای حل چه مشکلی استفاده می‌شود؟ تفاوت این دو با یکدیگر چیست؟
7. فرض کنید پردازش یک کامپوننت طول می‌کشد. چگونه می‌توان تا زمانی که کامپوننت هنوز آماده نمایش نیست به جای آن دایره گردان ...Loading نمایش داد؟

## بخش دوم: سوالات عملی

1. پروژه را از ریپوی https://github.com/nedaei79/react-interview کلون کنید.
2. نیازمندی‌های پروژه را نصب کنید و آن را روی localhost بالا بیاورید.
3. ساختار پروژه را از بالا به پایین یک بار توضیح دهید و بگویید مسئول هر یک از مولفه‌هایی که در صفحه می‌بینیم کدام قسمت از کد است؟
4. در صفحه contact us در قسمت سمت چپ (آبی رنگ) روی دکمه clicked # times تعداد دفعات کلیک روی این دکمه را بنویسید.
5. کاری کنید که هر وقت به صفحه contact us می‌آییم به ما خوش‌آمد گفته شود.
6. فرض کنید در صفحه contact us یک فرم دو مرحله‌ای داریم: ابتدا فرم سمت چپ فعال و فرم سمت راست غیرفعال است. کاربر با فرم سمت چپ تعامل می‌کند و بعد با فشردن دکمه validate، اطلاعات وارد شده کاربر اعتبارسنچی می‌شود و در صورت معتبر بودن، فرم سمت چپ غیرفعال شده و فرم سمت راست فعال می‌شود. در اینجا برای پیاده‌سلزی این سناریو این موارد را در نظر بگیرید:
   * تعامل کاربر با فرم چپ همان کلیک روی دکمه clicked # times است.
   * بعد از فشردن validate در صورتی که روی دکمه سمت چپ بیش از 10 بار کلیک شده باشد، سمت چپ غیرفعال و راست فعال می‌شود. در غیر اینصورت هیچ اتفاقی نمی‌افتد.
7. فرض کنید به هر دلیلی پردازش نیمه دوم فرم (سمت راست) زیاد طول می‌کشد و هر بار که این قسمت Rerender شود، کاربر برای مدت زیادی ...Loading می‌بیند که مطلوب نیست. برای شبیه‌سازی این وضعیت یک alert در ابتدای Right.js اضافه کنید که هر بار این کامپوننت Rerender می‌شود، پیامی را نمایش دهد. حالا کاری کنید که وقتی کاربر در حال فعالیت در قسمت چپ است، قسمت راست که قرار است غیرفعال بماند، Rerender نشود.
