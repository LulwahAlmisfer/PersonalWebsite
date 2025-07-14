---
title: What is Reflection in Programming? And How Can We Benefit From It?
date: "2025-07-18T23:46:37.121Z"
template: "post"
draft: false
slug: "/posts/Reflections"
category: "Code"
tags:
  - "Development"
description: "كبداية تخيلوا إن الكود يقدر يناظر نفسه، ويعرف وش الحقول اللي داخله، و يتصرف مع أي كائن بدون ما يعرف نوعه مسبقًا"
socialImage: "/media/reflectionPoster.png"
---

<meta property="og:image" content="/media/reflectionPoster.png" />
<meta name="twitter:image" content="/media/reflectionPoster.png" />


<div dir="rtl" align="right">


# ماهو ال Reflection في البرمجة؟ وكيف نستفيد منه؟ 

كلمة Reflection تعني إنعكاس، كبداية تخيلوا إن الكود يقدر يناظر نفسه، ويعرف وش الحقول اللي داخله، و يتصرف مع أي كائن بدون ما يعرف نوعه مسبقًا. 

الإنعكاس مفهوم يستخدم كثير، ولو مر عليكم إطار Spring Boot فأكيد جربتوا تكتبون Annotations، وتلاحظون انه يكتب كود عنكم بدون مانشوف، حرفيا الفكرة الي وراها كلها Reflection! 

الانعكاس مفيد لما نبي تسوي أشياء ديناميكية بدون ما نكتب كود مخصص لكل حالة. خل نشوف أمثلة حقيقية في كل بيئة.

بعطيكم مثالين في هذي المقالة، واحد ب Swift والثاني ب Java، الهدف اننا بنجاوب سؤالين:  
- وش الفكره؟  
- وكيف نستفيد منه؟ 

---

## Swift 🍎

تخيل عندك مودل طويل يمثل بيانات لمشروع:
<div dir="ltr" align="left">

```swift
struct ProjectReport {
    var projectName: String
    var clientName: String
    var status: String
    var startDate: Date
    var endDate: Date
    var teamMembers: Int
    var progress: Double
    var notes: String
    var budget: Double
    var isOnTrack: Bool
    // Etc..
}
```
</div>
تخيل ان المودل فيه 50 متغير، الحين لو بنعرض المعلومات هذي بفورم مثلا، يحتاج نكتب اسم كل متغير قبل كل خانه!
<div dir="ltr" align="left">

```swift
HStack {
    Text("project name: ")
    Spacer()
    Text("\(report.projectName)")
}
```
</div>

طيب حنا قلنا ان الكود يقدر يشوف نفسة صح؟ الله لو يقدر يقرا اسم المتغير ويحطه عنوان قبل كل متغير بشكل ديناميكي ولا؟ خنشوف كيف نستخدم ال Reflection بهالحاله:

<div dir="ltr" align="left">

```swift
struct ReflectiveForm<T>: View {
    var model: T

    var body: some View {
        Form {
            let mirror = Mirror(reflecting: model)
            ForEach(mirror.children.compactMap { $0 }, id: \.label!) { child in
                if let label = child.label {
                    HStack {
                        Text(label)
                        Spacer()
                        Text("\(String(describing: child.value))")
                            .foregroundColor(.secondary)
                    }
                }
            }
        }
    }
}
```
</div>

واستخدامها:

<div dir="ltr" align="left">

```swift

struct ContentView: View {
    var body: some View {
        ReflectiveForm(model: ProjectReport(
            projectName: "منصة ذكاء السوق",
            clientName: "شركة البرمجة الذكية",
            status: "قيد التنفيذ",
            startDate: Date(),
            endDate: Date().addingTimeInterval(86400 * 30),
            teamMembers: 5,
            progress: 0.65,
            notes: "العمل يمشي تمام لكن نحتاج مراجعة من العميل.",
            budget: 75000,
            isOnTrack: true
        ))
    }
}
```
</div>

بتلاحظون بالمثال اننا استخدمنا `mirror.children.compactMap` وقدرنا نوصل لمعلومتين: `label` و `value`، وسويناها بطريقه ديناميكية.

والحين متخيلين أي مودل نقدر نعطية الـ `ReflectiveForm` ويبني لنا فورم فيه كل المتغيرات! 🥳

ميزة جدا جدا رهيبة وتختصر وقت في حال كنا نتعامل مع مودلز طويله دايم.

---

## Java ☕️

طيب قلنا ان Spring كلها تعتمد على ال Reflection، بعطيكم مثال جدا بسيط علشان نفهم بس كيف سبرنق تعتمد عليه.

الحين تخيلوا إن عندنا مودل فاتورة، وفيه متغير total ونبي نحده على انه مايقل عن 100:

<div dir="ltr" align="left">

```java
public class InvoiceRequest {
    @Min(100)
    public double total;
}
```
</div>
هذي annotation بسيطة وواضحة، وشلون جافا عرفت تتعامل مع الموضوع؟ في حال اسخدمنا `@Valid` مع المودل كذا:

<div dir="ltr" align="left">

```java
@RestController
@RequestMapping("/api/invoice")
public class InvoiceController {

    @PostMapping
    public String submit(@RequestBody @Valid InvoiceRequest request) {
        return "✅ Total مستوفى الشروط: " + request.total;
    }
}
```
</div>

وارسلنا رقم اقل من 100، بيجينا response:

<div dir="ltr" align="left">

```json
{
  "status": 400,
  "message": "total: must be greater than or equal to 100"
}
```
</div>

هذا كله صار بدون مانشوف، لان لو نرجع لتعريف الـ annotation بنلاحظ ان hibernate-validator تستخدم 🔗 [ReflectionHelper](https://github.com/hibernate/hibernate-validator/blob/main/engine/src/main/java/org/hibernate/validator/internal/engine/ValidatorImpl.java)
 علشان تشغل اللوجيك هذا على اي كلاس:

<div dir="ltr" align="left">

```java
public class MinValidatorForDouble extends AbstractMinValidator<Double> {

    @Override
    protected int compare(Double number) {
        return NumberComparatorHelper.compare( number, minValue, InfinityNumberComparatorHelper.LESS_THAN );
    }
}
```
</div>


هذا مثال بس على ال min ، بس بيساعدنا نتخيل كيف كل باقي ال annotations تشتغل في كل إطار عمل Spring ! 


هذا أول مقالة أكتبها بالعربي في مجال التقنية،
فإذا فيه أخطاء بسيطة أو تعبير مو واضح، أتمنى تعذروني 😅
وأكيد أرحب بأي ملاحظة أو تصحيح.

شكرًا لوقتك، وإن شاء الله المقالة كانت خفيفة ومفيدة 🥳


</div>
