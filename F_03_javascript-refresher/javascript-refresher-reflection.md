### 00_script_in_html.html

- I realize here po na para makapag run ng JavaScript sa HTML kailangan mo ng script tag. Pwede siyang inline na nakasulat mismo sa loob ng HTML o external na file.

- I tried both. Ung inline nag log ng "Hi I'm maynard" tapos yung external na app.js nag log naman ng "External app.js ran. Maynard, BSIS 3 at LVCC". Tapos nung inopen ko sa console nakita ko namn den na sunod sunod silang lumabas.

- Yung pinaka challenging naman po para saakin dito is ung sa module. Nung una binuksan ko lang siya sa VS Code may browser preview po kasi here. Dapat pala una ko binuksan is sa Chrome haha kasi may console doon. At nag live server den po pala ako.

- Isa rin po sa mga natutunan ko is mahalag yung console kasi dun mo ma che check kung gumagana ba talaga ung sa code mo e.


### 01_base_syntax.js

- Na refresh den me here sa pag print gamit ung console.log also Nilagay ko lang yung name ko na Maynard tapos Nard para sa myName at myname.

- Natutunan ko na case sensitive ung JavaScript. Kahit isang letter lang ung difference ng myName at myname eh kasi different variable sila.

- Dito ko rin na natutunan ung sa naming rules. Pwede mag start sa letter, underscore or dollar sign pero hindi sa number kaya valid ung _temp and $price pero hindi kasi pwede ung 2cool na ung nakalagay den dun sa ppt.


### 02_variables.js

- Dito is nakita ko na merong each type ung bawat value. Yung name ko na "Maynard" ay string, ung age ko na 21 ay number and then yung isStudent na true is boolean. Kaya ganun is nagamit den ung typeof para ma check ung sa value.

- Nag try din ako nung arithmetic gamit ung sa a = 20 and b = 4. Nag add ako and nag divide, tapos ung result is 24 and 5 kasi 20+4 = 24 tapos 20 divide 4 = 5


### 03_functions.js

- Pareho lang pla yung purpose nung regular function and arrow function pero mas maikli kasi ung sa arrow. tapos nag try den ako ng square 7 tapos ung result is 49.

- Natutunan ko rin na same lang pla naming rules ng function and variable. Mas ok nga na nagstart sa verb like greet and calculate kasi action ung ginagawa nung function.


### 04_objects.js

- Next here is gumawa naman ako ng aboutMe na object tapos may name, age and course ko.

- Ung natutunan ko here iis. Na ung this sa loob ng method is nag rerefer dun sa mismong object kaya nakukuha niya yung data ng aboutMe.

- Nagdagdag din ako ng hobby na Reading after kong gawin ung object. Akala ko kasi before kailangan nasa umpisa lahat pero pwede pala kahit later on nalang.


### 05_arrays.js

- Now ginawa ko naman here is favoriteFoods na array na may 3 items na Adobo, Sinigang at Sisig. Tapos pala giinamit ko yung push para magdagdag ung Halo Halo sa dulo.

- Yung sa shift naman ung nag alis ng una kaya nawala ung Adobo. Kaya nag push and nadagdag sa dulo yung halo halo. Yun din ung isa sa natutunan ko.

- Tapos pla ung sa map ung pinaka nagustuhan ko kasi gumawa siya ng bagong array na may "I like" sa unahan like sa bawat foods kaya nagingin. I like Sinigang etc.


### 06_control_structures.js

- Natutunan ko here na chine check neto ung sa conditon mula taas hanggang dun sa pababa and then yung unang true lang ung mag ra run. Kaya importante ung pagkakasunod.


### 07_dom.html

- Nakita ko here kung pano nababago ng JavaScript ung page mismo. Nagamit din kasi dito ung getElementById para namn mahanap ung button.

- Napansin ko den na kapag nag cancel ako sa prompt yung may lumalabas sa chrome sa taas na papapiliin ka ng color, bumabalik sa white yung background kasi null ung nirereturn ng prompt kapag kinacancel.


### 08_essential_features.js

- Gumamit ako rito ng map sa hobbies ko na Eating, gaming at sleeping para ma print sya isa isa.

- Sa destructuring kinukuha namn ung sa name at age from student object tapos magiging one line lang sya. Maganda den to kasi mas maikli siya kesa sa student.name at student.age. Which is mahaba sya.

- Yung spread ung nagustuhan ko kasi kinopya niya ung [1, 2, 3] tapos nadagdagan ng 4 at 5 tas hindi na nya nagagalaw yung orig na array.


### 09_tricky_parts.js

- Natutunan ko here is ung difference ng undefined at null. Ung undefined is variable na na dedeclare pero wala pang value tapos uung sa null naman is intentional na walang laman.

- Tapos nung gumamit namn ako ng spread, hiwalay na ung bagong array kaya hindi nagalaw yung original nung nag push ako ng 50.


### 10_let_const.js

- Nung pinalitan ko yung name from "Maynard" to "Nard", gumana sya kasi pwedeng i reassign ung sa kapag sa let.

- Tapos sinubukan kodin palitan yung age na const nag error sya "Assignment to constant variable" Kasi nilagay ko siya sa try catch pra ma print ung error message atchaka para hindi rin tumigil ung buong file.


### 11_arrow_functions.js

- Ang take away ko here is ung sa sayHi naman may {} pa rin sya kasi console.log lang ung ginagawa niya tapos wala ring value na nirereturn.


### 12_destructuring.js

- Take away ko dto is na review ko ulit ung sa destructuring. Kaasi nakuha ko agad yung name at age ng person sa object ko na naging isang line lang.


### 13_spread_rest.js

- Ang natutunan ko den dito is ung sa parehong tatlong tuldok… ung sa spread at rest pero magkaiba namn ung role atchaka ung purpose nila. Yung sa spread nag ko clone tapos ung rest nag kucollect ng mga arguments.


### 14_classes_inheritance.js

- Ung take away ko here is ung na notice ko na nka PascalCase ung pangalan ng class like saa Person and Student hindi nka camelCase. I think na bangit din sya sa react rule.


### 15_modules_export.js

- Dito pala is nag export ako ng greet() pra may default export. taposs Isa lang pla ung pwedeng default for each files.

- Tapos pla Nag export din me here ng userInfo object as named export by using the double curly braces.

- also natutunan ko den na kailangan na naka export ung isang value before sya magamit ng ibang file.


### 16_modules_import.js

- Now is dito ko nnamn naginamit ung mga na export ko sa 15_modules_export.js. Tapos nag import me ng greet at userInfo gamit ung import.

- Tapos Natutunan korin Nung ni run ko na lumabas na ung "Hello from Maynard's module!" and "User: maynard, Age: 21" by this na confirm kong working naman pla ung sa pag share ko ng code don sa two files.


### 17_logical_operators.js

- take away ko here is ung sa && and ll is hindi lang sila nagre return ng true or false. Na banggit din pla this last discussion. Yung ll ito is nag rireturn ng default and ung sa username && Welcome! iss nag rireturn ng Welcome!.

- Yung sa ! naman pala is pinapalitan nya ung true into false kaya false ung lumabas sa !canLogIn.


### 18_ternary_nullish.js

- Yung pinaka natutunan ko here is ung difference ng ll and ?? tapos ung dunn sa age na 0 yung ll is ginawang 18 kasi falsy ung 0. Yung ?? is 0 pa rin kasi null lng namna ung pinalitan.


### 19_strings_numbers.js

- Nalala ko naden this before kasi naddan na namin ito before ung toUpperCase kaya naging MAYNARD. also nagamit din dito ung includes kasi ung purpose neto is para ih check kung may "Villar" sa loob ng name and true nga kasi lumitaw sya.

- Tapos nung hinati ung sa xyz into 2 ung lumabas is NaN. Natutunan ko na kailangan pala nunng Number.isNaN para ma check nya kung NaN ung result.


### 20_array_methods.js

- may mga napansin rin me here like ung some is true kasi may isang bumagsak na si Jerry. tapos ung sa every naman is false kasi hindi naman lahat is pasado.


### 21_errors_json.js

- ung pinaka Take away ko dito is hindi mag kaka crash ung program kapag may error basta meron or nasa inside nung try catch ung codee na pwedeng or may chance na mag ka ron ng error.


### 22_async_javascript.js

- Take away ko here is hindi nman sabay sabay natatapos ung sa async code kaya need nya tlga ng callback, promise or ung sa async/await kasi para mahintay den ung sa mga result.


### 23_closures_scope.js

- Isa sa natutunan ko naman here is ung sa closure na hindi mo namn directly na mababago ung count from the outside nung sa createCounter(). Kasi diba dun lang sa increment function lang siya pwedeng baguhin or mabago kasi doon lng sya accessible. Kaya gaunun sya.
