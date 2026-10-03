## Filename
01_base_syntax.js

## Prompt
I am working on 01_base_syntax.js only. Do not touch any other file.

Rewrite the exercise code with these requirements:
1. Log "Hello JavaScript".
2. Declare myName with the value "Maynard" and myname with the value "Nard" using let.
3. Declare a new variable favoriteSubject with the value "Application Development" and a new variable yearLevel with the value 3 using let.
4. Log all four variables.
5. Use only console.log and let, no advanced syntax.

Before editing, explain your plan and wait for my approval.
After editing, run node 01_base_syntax.js and explain each line.

## Reflection
Para sakin, dito ko na gets na case sensitive ang JavaScript kaya magkaiba ang myName at myname kahit halos pareho ang spelling. Kaya nagkaroon sila ng magkaibang value na Maynard at Nard. Nag add din ako ng favoriteSubject at yearLevel para ma practice ko ang string at number gamit lang ang let. Kaya sa output lumabas ang Hello JavaScript tapos ang apat na variables sa tamang order. Natutunan ko rin na dapat i review muna ang plan ng agy bago i approve para alam ko kung ano ang babaguhin sa file.




## Filename
02_variables.js

## Prompt
Hi agy, I'm Maynard, a 3rd year IS student reviewing JavaScript basics. Please focus on 02_variables.js only and leave every other file alone.

Don't edit anything for now. First, teach me using examples from my own life:
1. How a string, a number, and a boolean differ, using my name "Maynard", my age 21, and isStudent set to true.
2. What typeof returns for each of those three values.
3. Why 21 == "21" gives a different result from 21 === "21".

After that, read 02_variables.js and give me a short step by step plan for finishing it. Wait for my approval before touching the file.

Looks good, I approve the plan. Go ahead and update the equality checks in 02_variables.js, then run node 02_variables.js and explain the output line by line.

## Reflection
Para sakin, dito ko na gets ang difference ng string, number, at boolean gamit ang sarili kong info na Maynard, 21, at true. Kaya ang typeof ay nagbabalik ng string, number, at boolean para sa bawat isa. Natutunan ko rin na ang == ay nagko convert ng type kaya ang "21" == 21 ay true, pero ang === ay chine check pati ang type kaya ang "21" === 21 ay false. Kaya mas safe gamitin ang === para iwas bug. Nakita ko rin sa output na ang Add ay 24 at ang Divide ay 5 dahil a = 20 at b = 4.





## Filename
03_functions.js

## Prompt
Hi agy, Maynard again. Work on 03_functions.js only and leave all other files alone.

I want to practice three kinds of functions using my own details:
1. greet(name) as a function declaration that returns a greeting for me.
2. square(num) as an arrow function that I can test with my age 21.
3. calculator(a, b) that returns an object holding the sum, difference, product, and quotient of a and b.

Before editing, show me your plan and wait for my approval.
After I approve, write the code, call each function with my own values, and run node 03_functions.js.
If anything fails, explain the error first before fixing it. Then explain each function in simple words.

Plan approved. Write the code in 03_functions.js, run node 03_functions.js, and explain each function in simple words.

## Reflection
Para sakin, dito ko na gets ang tatlong paraan ng pag gawa ng function. Ang greet ay function declaration kaya gumagamit ng function keyword at nag return ng "Hello, Maynard!". Ang square ay arrow function kaya mas maikli ang sulat at nag return ng 441 nung nilagay ko ang age kong 21. Ang calculator naman ay nag return ng object kaya nakuha ko ang sum, difference, product, at quotient sa isang return lang, kaya ang result ay sum 25, difference 15, product 100, at quotient 4 para sa 20 at 5. Natutunan ko na ang return ang nagbibigay ng final value ng function para magamit ko ito sa console.log.



