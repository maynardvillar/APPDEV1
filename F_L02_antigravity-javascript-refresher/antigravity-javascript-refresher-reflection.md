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



## Filename
04_objects.js

## Prompt
```
Hi agy, Maynard here. Work on 04_objects.js only and leave all other files alone.

Practice objects using my own details:
1. Create a person object with my name "Maynard", my age 21, and my course "BSIS".
2. Access one property with dot notation and another with bracket notation.
3. Add favoriteSubject with the value "Application Development".
4. Add an introduce() method that logs a sentence about me.
5. Update my age to 22 then delete the course property.
6. Log the object after each change.

Write the code now, run node 04_objects.js, and explain each step in simple words.
```

## Reflection
Para sakin, dito ko na gets na ang object ay lalagyan ng related na info tungkol sa isang bagay kaya ginawa kong person object ang name, age, at course ko. Kaya may dalawang paraan para kunin ang value which is dot notation para sa person.name at bracket notation para sa person["course"]. Nag add din ako ng favoriteSubject at method na introduce() kaya gumamit ng this para makuha ang name at favoriteSubject sa loob ng object. Natutunan ko na ang pag assign ng bagong value ay pang update tulad ng age na naging 22 at ang delete keyword ay pang alis ng property tulad ng course. Kaya sa huling log wala na ang course sa object.



## Filename
05_arrays.js

## Prompt
```
Hi agy, Maynard here. Work on 05_arrays.js only and leave all other files alone.

Practice arrays using my own details:
1. Create an array called subjects with 4 of my subjects: "Application Development", "Statistics", "Financial Management", "Business Process Management".
2. Access the first and last items using their index.
3. Use push to add "Gender and Society" and pop to remove the last item.
4. Use shift and unshift to remove and add an item at the front.
5. Log the array and its length after each change.

Write the code now, run node 05_arrays.js, and explain each step in simple words.
```

## Reflection
Para sakin, dito ko na gets na ang array ay listahan ng maraming items na may index na nagsisimula sa 0 kaya ang subjects[0] ay Application Development at ang subjects[3] ay Business Process Management. Kaya ang push at pop ay para sa dulo ng array dahil nag add ako ng Gender and Society tapos tinanggal ko ulit. Ang shift at unshift naman ay para sa unahan kaya natanggal ang Application Development at nadagdag ang Web Development sa harap. Napansin ko rin na nagbabago ang length sa bawat change kaya naging 4 tapos 5 tapos 4 tapos 3 tapos 4 ulit.





## Filename
06_control_structures.js

## Prompt
```
Hi agy, Maynard here. Work on 06_control_structures.js only and leave all other files alone.

Practice control structures using my own details:
1. Use if, else if, and else to check my age 21 and log whether I am a minor, an adult, or a senior.
2. Use a for loop to log the numbers 1 to 5.
3. Use a while loop to count down from 5 to 1.
4. Use a switch statement on my favorite subject "Application Development" with at least 3 cases and a default.
5. Log a label before each result.

Write the code now, run node 06_control_structures.js, and explain each step in simple words.
```

## Reflection
Para sakin, dito ko na gets na ang if, else if, at else ay pang decision kaya chine check ng computer ang conditions mula taas pababa. Kaya sa age kong 21 nilaktawan ang age < 18 tapos pumasok sa age < 60 kaya lumabas na adult ako. Ang for loop ay gamit kapag alam ko kung ilang beses uulit kaya nag print ito ng 1 hanggang 5. Ang while loop naman ay kailangan kong i manage ang counter kaya may count-- sa loob para hindi mag infinite loop at bumaba ang bilang mula 5 hanggang 1. Sa switch statement chine check niya ang favoriteSubject at tumatakbo ang tamang case kaya may break para hindi pumasok sa ibang case. Kapag walang tumama may default na tatakbo.



## Filename
07_dom.html

## Prompt
```
Hi agy, Maynard here. Work on 07_dom.html only and leave all other files alone.

Practice the DOM using my own details:
1. Add a heading that says "Maynard's Profile" and a paragraph with my course BSIS.
2. Use document.getElementById to change the paragraph text.
3. Use document.querySelector to change the heading color.
4. Add a button that changes the paragraph text when clicked using addEventListener.
5. Create a new list item with document.createElement and append it to a list.

Write the code now and explain each step in simple words. Tell me how to open it in the browser.
```

## Reflection
Para sakin, dito ko na gets na ang DOM ang paraan para makontrol ng JavaScript ang laman ng webpage. Ang getElementById ay pang hanap ng element gamit ang id kaya nabago ko ang text ng paragraph ng course ko. Ang querySelector naman ay gumagamit ng CSS selector kaya nahanap ko ang heading gamit ang class at napalitan ang color niya. Gamit ang addEventListener nakikinig ang button sa click kaya kapag pinindot ko ito nagbabago ulit ang paragraph. Ang createElement ay pang gawa ng bagong li kaya nilagyan ko ng text na Statistics tapos nilagay sa ul gamit ang appendChild. Kaya natutunan ko na HTML file ito kaya sa browser ko siya bubuksan at hindi gamit ang node.