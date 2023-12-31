Here's the link to the readme: https://github.com/JoshuaJiraffe/startup-kyles-cycles/blob/main/README.md
Here's my public IP address: 3.222.97.239

Things I learned from starting my first github repo:
  - Work in the source control bar on VScode in order to commit and push changes
  - Only try to edit in one area at once: on the repo or on the Development side
  - I need to learn much

## Using VI:
 - Many things
 - To change permissions of file use command: chmod 600 <filename>

## Markdown:
 - In order to put in an image you use !(somename)[imagefile]. Make sure there are no spaces

# Week 3

## HTTPS: 
 - To shell into production environment from console use the command: ssh -i [key pair file] ubuntu@[yourdomainnamehere]
 - To edit caddy use the command: vi Caddyfile
 - Port 80 goes to HTTP whereas port 443 goes to HTTPS so you have to replace the :80 in the caddy with the domain name

## Domain Names:
 - To get IP address use command: dig <url>
 - Root domains have a secondary level domain and a top level domain. Top level domain is the .com part
 - Infinite subdomains can be made from root domains
 - To see contact info about owners of the domain use command: whois <url>
 - A records maps domain name to IP address
 - CNAME record maps domain name to other domain name

## AWS Route 53:
 - You can't have a secure connection with just IP address, you need domain name
 - Route 53 handles everything DNS
 - NS (name service) record contains the names of the authoritative name servers that authorize you to place DNS records in this DNS server
 - SOA (start of authority) record provide contact info about owner of the Domain Name

## Caddy:
 - Caddy is a web service, also a gateway, that handles incoming HTTP requests
 - It can route different things all under one header which is great and cool

## AWS EC2:
 - When renting a web server, it's stored in a massive data center somewhere. Who knows where
 - Basically a giant warehouse with tons of computers. Such fun
 - The AMI (Amazon Machine Image) made for this course already has Ubuntu, Node.js, NVM, Caddy Server, and PM2, so no need to worry about that
 - t3.nano, t3.micro, t2.micro are all good for this class. One is free though
 - A key pair is needed to secure shell (ssh) into the production environment (the server). Should be saved somehwere private
 - You have to enable which IP addresses you can ssh in from. To do so, go to EC2, click on the instance, click on the security group, and edit inbound rules
 - If you try to access from a port without permissions, you'll get a timeout error
 - ~. will close out of the ssh


You can stop your server so you don't have to pay for it when it's not running but that will mean you have to get a new IP address each time you launch it. To get around this, you can assign an elastic IP address to your server. How to do so:
 - Open the AWS console in your browser and log in.
 - Navigate to the EC2 service.
 - From the menu on the left select Network & Security|Elastic IPs.
 - Press the Allocate Elastic IP address button.
 - Press the Allocate button.
 - Select the newly displayed allocated address and press the Actions button.
 - Select the Associate Elastic IP address option.
 - Click on the Instance box and select your server instance.
 - Press Associate.

Elastic IP is only free while your server is running. Good to have in case you need to reboot server

## The Internet:
 - The internet is really just a collection of wires to connect everything
 - Files travel across the internet in little parts called packets


# Week 4

## HTML:
HTML elements are represented with enclosing tags. Elements can contain text and/or other elements inside of them
 - Just plain text is valid HTML
 - <p> tag will have words in default text font and size
 - index.html is the default page for web browsers to show

 Always include this at beginning of HTML file:
 <!DOCTYPE html>
 <html lang="en">

### Attributes:
 - Attributes describe details of elements
 - id attribute gives unique id to an element
 - class attribute gives element a class
 - Attributes go inside element tags
 - Attributes use single or double quotes to be defined
Example:
  <p id="hello" class="greeting">Hello world</p>

### Hyperlinks:
 - Uses anchor element and href attribute
 - <a href="<url>"><whatever you want the link to say></a>

 
 ### Common elements

Modern HTML contains over 100 different elements. Here is a short list of HTML elements that you will commonly see.

| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block division of content                                            |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

 
### Special Characters:
 Certain characters can only be accessed by using entity syntax, which uses the ampersand. Also used to show emojis:

| Character | Entity      |
| --------- | ----------- |
| &amp;     | `&amp;`     |
| <         | `&lt;`      |
| >         | `&gt;`      |
| "         | `&quot;`    |
| '         | `&apos;`    |
| &#128512; | `&#128512;` |

### HTML Structure:
 - There are block and inline elements
 - Block elements are distinct blocks/sections in the content flow
 - Inline elements go within blocks and do not disrupt their flow


### HTML Input Elements:
Here are some elements for accepting user input:

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

 - Form element is used a lot as a container. It's not as needed nowadays that we have fancy JavaScript to do things to the inputs
 - Specify input as required with required attribute to make people put in something before they can submit it
 - Pattern attribute gives a regex that must be satisfied in order for the input to be accepted. Works on text, search, url, tel, email, and password, input types
 - You can also use JavaScript for validation. Make sure to tell user if/why their input isn't accepted
 - In a selection, in the options, you can preselect an option by opening the tag as <option selected>. For others change it in value using checked
 - Use value attribute to change starting value

Here are some different types for the input:

| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |



### Media Elements:
Now we get to use fancy audio and visual things

 - img, audio, and video elements point to a file that contains what you need
 - svg and canvas have code to render an image that can be animated
 - You can use relative or absolute paths. As relative as possible is better
 - Width attributes will define how big on the page your element is. You can make that relative to the page size
   
#### img:
 - img elements should have an alt attribute that describes what the image is and a src attribute with path
 - 
#### audio:
 - audio elements should have a src attribute and a control attribute
 - controls attribute makes it so there will be visual representation of audio and user can control it
 - autoplay attribute makes it play immediately
 - loop attribute makes it automatically repeat

#### video:
 - video elements should also have src attribute
 - They also have access to controls, loop, and autoplay attributes
 - it's possible you need to include a crossorigin="anonymous" attribute just for fun to make it work

#### svg:
 - This and canvas are images created within the html
 - Can render graphics inline, que fancy

#### canvas:
 - Facilitates animation and 2d drawing
 - Requires JavaScript support to be able to draw on it


# Week 5

## CSS

 - CSS allows colors, style, and also responsiveness. Critical
 - Also allows for the view of the pagre to change based on the device and its sizes
 - Functionally, CSS is primarily concerned with defining rulesets, or simply rules. A rule is comprised of a selector that selects the elements to apply the rule to, and one or more declarations that represent the property to style with the given property value.

Three ways to include CSS:
 - Use style attribute directly in the element
 - Use style attribute in head section of the html to define style rules for the whole document
 - Use link attribute to an external css file with rules: <link rel="stylesheet" href="styles.css" />
 - Properties are inherited but lower level ones override


### Box Model:
 - All styles are aplied to a box region of the display. The box has inner boxes of content, padding, border, and margin
 - You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border.


### Selectors:
 - Use body elements for defining font for the entire webpage (can also use * selector, which does everything)
 - You can use combinators to only identify certain elements that are inside other elements:

| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `p ~ div`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `p + div`      | Any p that has an adjacent div sibling     |


 - Use a . to combine element names with class selectors, like: p.summary
 - You must use a . in front of class selectors
 - To use id selector use a # in front
 - Pseudo selectors are based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. Useful if you want something to happen when the mouse hovers over a place or other things with user input


### Declarations:
 - Here are some common ones:
| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

 - When defining size you can use absolute measurements with pixels (px) or inches (in) or relative units like percentage of parent unit (50%), percentage of viewport (50vh), or multiplier of m (2rem)
 - Here's some examples:
| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

Color can be defined like this:
| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rgb(128, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |




### Fonts:

 - font-family is the property to define your fonts. Use an @font-face to define a family you have to import
 - Here's an example of how to import amazing fonts from Google. They have many free ones: @import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');


### Animation:
 - We'll see if I actuallly do any of this
 - The basics is you use the animation property and define keyframes for how the element looks at different times in animation
 - In the normal element css declaration you must have animation-name property that will lead to the animation property and animation-duration as well
 - The header should be @key-frames <nameofanimation>
 - Use from and to to define beginning and end


### Responsive Design:
 - The display can change based on the screen size or device. Like so:

| Value  | Meaning                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| none   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| block  | Display this element with a width that fills its parent element. A `p` or `div` element has block display by default.        |
| inline | Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default. |
| flex   | Display this element's children in a flexible orientation.                                                                   |
| grid   | Display this element's children in a grid orientation.    

 - Mobile browsers will scale by default but we don't want that. To get around this we use this tag in the header:
  <meta name="viewport" content="width=device-width,initial-scale=1" />
 - Float property moves the element to left or right and makes text go around it
 - @media selector is very important. It detects size and orientation of viewport and we can change css rules to match

#### Grid:
 - Grid is a display layout that is uweful in building responsive design.
 - To access it we use display: grid on the container element (that's the parent/heading element)
 - You can then use grid-gap, grid-auto-rows, grid-template-columns, all kinds of commands to control how the grid elements will resize

#### Flexbox:
 - Flex is used to partition the application into responsively moving areas that'll change as application size changes
 - Make sure to define flex-direction to say which way they should all flex in
 - Define the properties in the children like this:
  flex: 0 80px;
 - 0 means it won't grow and 80px is how tall it is. You can define flex values with numbers to determine the fraction of space they'll take up


## Debugging CSS:
 - Use the inspect element on your page to see why things are working how they're working and debug
 - Use the elements tab in the inspect space

## Frameworks: (our best friend)
 - Tailwind and Bootstrap are the most popular. Tailwind uses smaller definitions that go specifically with certain elements in the html
 - Add bootstrap into your html by using the following tag in the head:
  <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
 - You also may want to use the jss functionality. Include this tag at the END of the body element:
 <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
 - To include bootstrap in your application use this command in the console to download it:
 npm install bootstrap@5.2.3
 - To use bootstrap you then just need to make the classes all line up with the right bootstrap classes




# Week 6


## JavaScript:

 - Javascript is usually executed using an interpreter at RunTime. Interesting
 - console.log(); puts whatever's inside out to the debugger console
 - Use single quotes
 - Line comments use // while block comments use /*
 - Use % for special things in your console.log output. For instance, putting in css declarations with %c and following up with the rules
 - console.time('demo time'); and console.timeEnd('demo time') can sandwich a bit of code and it will output how long it took to run
 - console.count(); counts how many times a piece of code is called


### Adding JS to HTML:
 - You can insert JS by putting it directly in HTML with <script> element or by using src attribute on said element to refer to external file


### Type:

Here are some of the primitive types in JS:
| Type        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| `Null`      | The type of a variable that has not been assigned a value. |
| `Undefined` | The type of a variable that has not been defined.          |
| `Boolean`   | true or false.                                             |
| `Number`    | A 64 bit signed number.                                    |
| `BigInt`    | A number of arbitrary magnitude.                           |
| `String`    | A textual sequence of characters.                          |
| `Symbol`    | A unique value.                                            |

Here are some common objects:
| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |


 - Declare variables in JS using let or const. Use let if you're going to be changing that variable in the future
 - Strict equality is checked with ===
 - Strict inequality is checked with !==
 - String concatenation is done with +
 - Default when you do silly things with two different data types is to concatenate strings
 - Ternary operator can be used to make an abbreviated if else. Like so:
       -   a === 1 ? console.log(1) : console.log('not 1');
       - <conditional> ? <if_true> : <if_false>
 - JavaScript supports many common programming language looping constructs. This includes `for`, `for in`, `for of`, `while`, `do while`, and `switch`
 - `do while` executes at least once cause it checks conditionality at the end. That's nice sometimes
 - `for in` iterates over an object's property names or array index
 - `for of` iterates over an object's values
 - break; and continue; are also allowed



### String:

 - Defining strings with '' or "" is equivalent. Defining with `` means it could be a string literal with js inside of it to evaluate
 - To put the code block into a string literal use ${} with the js you want to evaluate inside the braces
 - Theoretically we could internationalize thing. Let's see if we ever do that

Here are some useful string functions:
| Function      | Meaning                                                      |
| ------------- | ------------------------------------------------------------ |
| length        | The number of characters in the string                       |
| indexOf()     | The starting index of a given substring                      |
| split()       | Split the string into an array on the given delimiter string |
| startsWith()  | True if the string has a given prefix                        |
| endsWith()    | True if the string has a given suffix                        |
| toLowerCase() | Converts all characters to lowercase                         |




### Functions:
oof

 - Functions can be treated like any variable. They can be given names, passed as parameters, serve as return values, etc.
 - You do not assign types to the parameters
 - If parameter is not provided when a function is called, the value will be set to undefined
 - You can set default values for parameters
 - You can also make an anonymous function and assign it to a variable
 - Functions can be declared inside other functions. This can be done to modularize code without exposing private details



### Arrow Function:

 - Instead of using function declaration we can use an arrow, like so:
   () => {<function_declaration>}; (curly braces can be optionally included
   
 - You don't have to include return keyword if you don't put curly braces and the function only has one expression:
   () => 3; (this will return 3)
   
 - Closure lets us access variables from functions that are parent when they should be out of scope
 - Closure basically remembers values of the function when it's created, instead of when it's executed


### Array:

Here are some fun static functions of JavaScript arrrays:
| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |



### JSON:

 - JSON stands for JavaScript Object Notation
 - It's a data format that makes sharing and storing data super easy, barely an inconvenience. Also compatible with JS which is great for web stuff


A JSON document contains one of the following data types, most commonly an object:

| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |

 - Objects have key-value pairs, where the key is always a string
 - Strings are always double quotes
 - Convert to and from Javascript with JSON.parse and JSON.stringify functions



# Week 7:

## UX:
 - Always start off by thinking of user and how they interact, not on how cool your technology is
 - Think of User Experience as a story. We want to get them to applaud
 - The homepage should be simple. The fewer things there are for the user to process, the better they can engage with the page
 - Make the homepage something that immediately directs a user to focus on a single purpose
 - You want to be consistent enough with the general web that it's not hard for users to use your application, but also a little unique and fun
 - First step in building an application should be designing an application map of all the views and navigtion the users will deal with
 - If your application map starts looking like a governmental bureaucracy then you probably want to reconsider the interrelation of functionality
 - A breadcrumb control lists the path the user took
 - If you want international design with many languages, you need to consider that in the design from the beginning
 - Animation should be done in moderation

### Colors:
 - In making a color scheme, we should pick a primary, secondary, and focus color
 - Use Paletton or Adobe to help select colors
 - Stick with color scheme even with font color and images that are included

### Typography:
 - Four different groups of fonts:
     - Serif
     - Sans Serif
     - Monospace (all letters same size)
     - Handwriting
  
 - Restrict number of fonts you have to three or fewer
 - Sans serif is for buttons, navigation links, and body text
 - Serif is for paragraph headings
 - Monospace is for coding examples or text needing alignment

### Iconography and Text:
 - Use common, already established icons:
 - There are lots of standard icon packages that you can choose from. This includes packages such as [Font Awesome](https://fontawesome.com/), [Bootstrap Icons](https://icons.getbootstrap.com/), [Material Icons](http://google.github.io/material-design-icons/), [Flat Color Icons](https://github.com/icons8/flat-color-icons), and [Ant Design Icons](https://github.com/ant-design/ant-design-icons)

There are 5 different predetmined categories of text with predefined font size suggestions:
| Purpose        | Size     |
| -------------- | -------- |
| Page title     | 96 px    |
| Titles         | 48-20 px |
| Text           | 16 px    |
| Secondary text | 14 px    |
| Input          | 16 px    |

 - You can set a max width for paragraphs. 60-80 characters is best. 35em is a good guideline

### Whitespace:
 - Whitespace will control where a user looks. USE IT
 - Don't use images ase space fillers

### Decision Fatigue:
 - Time to make a decision increases logarithmically as number of choices increase
 - Limit the number of choices the user has to make. Especially the ones presented at the same time

### Performance:
 - Speed of application reaction to users greatly impacts how much users use the application. If it takes 5 seconds, 90% of users leave
 - The initial load can take a bit. Use a loading animation to simulate progress and entertain users
 - Make sure you have a bckup for your website to run even if it can't access third party things or some functionality is down

### Legal:
 - There are many laws and acts that could regulate your website. Some of that culd deal with making the site accessible for all those with disabilities or managing records and data confidentially

### Walls:
#### Payment:
 - Make sure they see the value of the application and can use it significantly before they have to pay
 - Entering payment information is best if done using associated credential like Google Wallet
#### Failure:
 - Eventually the application will fail. Make sure to present a message to tel the user what happened and offer a possible solution. Don't just break




## More JS

### RegEx:
 - You can create a regex using objreg = new RegExp(asdf); or using literalRegex = asdf;
 - The `string` class has several functions that accept regular expressions. This includes `match`, `replace`, `search`, and `split`. For a quick test to see if there is a match you can use the regular expression object's `test` function.


### Rest and Spread:
 - You can use the rest parameter when you don't know how many parameters there will be. For example in defining a function. Precede the last parameter of a function to make it a rest parameter. Will turn all the rest of the things passed into an array
 - Spread is also called by ... but not as function parameters. It will take an iterable and separate it out into its individual elements


### Exceptions:
 - To catch an exception we use try catch syntax. You write try with what you want to do, then a catch block with what the system should do if it it throws an exception
 - You can add a finally block afterwards that will run after the catch block no matter what
 - You can use 'throw new Error();' syntax to make the system throw an exception. It'll execute the codee in the parentheses
 - Restrict exceptions to only really meaningful and significant exceptions
 - Fallbacks - basically when you put an alternate implementation in the catch block so your code always returns and does something, it doesn't just stop


### Destructuring:
 - This is not destructing!!
 - Process of pulling items out of a larger item, like an array or object
 - Process looks like this:
    ```js
    const a = [1, 2, 4, 5];
    
    // destructure the first two items from a, into the new variables b and c
    const [b, c] = a;
    
    console.log(b, c);
    // OUTPUT: 1, 2
    ```
 - destructured part goes on the left side of the equation
 - You can use rest syntax to combine the trailing end of items from the object. For instance:
    ```js
    const [b, c, ...others] = a;
    
    console.log(b, c, others);
    // OUTPUT: 1, 2, [4,5]
    ```
 - With objects you specify properties that you want to pull from the object. That's because every object is like a map. It has a collection of properties and values (or functions) associated with them
 - You can map the names of these object properties to new names:
 - You can also provide default values

   ```js
    const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };
    
    const { a: count, b: type } = o;
    
    console.log(count, type);
    // OUTPUT 1, animals
    ```


### Objects and Classes:
 - A JS object represents a collection of name-value pairs. We call those pairs properties
 - Property name is either a string or a symbol, but the value can be whatever the heck you want it to be. Function, object, a tomato
 - You must define a constructor for the object so that you can make a new one
 - You can declare new properties directly from your file
 - You can access properties using obj.prop() or obj[prop]. Console.log() will also output all the properties
 - Javascript also has an object object. That's fun
 - Use get andset for functions that will be getter and setter functions:
    get weather() {return this._weather;}
    set weather(weather) {this._weather = weather;}

#### Fun things:
 - You can declare a variable with object-literal syntax. That means you haven't defined that object class in another part of the code:
    ```js
    const obj = {
      a: 3,
      b: 'fish',
    };
    ```

Here are some static functions all objects have:
| Function | Meaning                             |
| -------- | ----------------------------------- |
| entries  | Returns an array of key value pairs |
| keys     | Returns an array of keys            |
| values   | Returns an array of values          |

 - A function that returns an object is called a constructor
 - Use the this pointer in the constructor to refer to the object
 - You can define a class for an object or you can just define the objects in one-off situations. Depends if you're gonna use it multiple times or not
 - Make class properties and functions private by prefixing them with a #. Like so: #name || this.#name = name
 - Use the extend keyword when making a class to use inheritance. Super function will pass to parent class. class Employee extends Person{}


### Scope:
 - Scope is the variables that are visible in the curent context of execution. There are four types:
      Global - visible to all code
      Module - visible to all code running in a module
      Function - visible within a function
      Block - visible within a block of code delimited by {}

 - Using var to define a variable ignores block scope. That's why we don't use it
 - this keyword is automaticaly instantiated and points to an object that contains the context within the scope of the currently executing line of code:

1. **Global** - When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
2. **Function** - When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running is JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
3. **Object** - When this is referenced in a object it refers to the object.

 - A function inside a class that uses this will refer to that object in that class


### Closure:
 - A closure is a function and its surounding state
 - Whatever variables are accessible at the point when a function is created are available in that function
 - Arrow functions inherit pointer of their creation context. Their this will be global if their in global frame


### Javascript Modules:
 - Modules allow partitioning and sharing of code
 - Node.js lets us import packages
 - In order to differentiate between the two implementations, Node.js modules are called CommonJS modules, and JavaScript modules are called ES modules. For this discussion, we will focus only on ES modules.
 - You must export objects from one file and them import them into another file to use them:

**alert.js**

```js
export function alertDisplay(msg) {
  alert(msg);
}
```

You can import the module's exported function into another module using the `import` keyword.

**main.js**

```js
import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
```

 - When using ES modules in the browser, modules can only be called from other modules. You cannot access JavaScript contained in a module from the global scope that your non-module JavaScript is executing in.
 - Use <script type="module> to specify that it's an ES module
 - If we want to use a module in the global scope that our HTML or other non-module JavaScript is executing in, then we must leak it into the global scope by either attaching an event handler, or explicitly adding a function, to the global window object.

```html
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
```


 - We will use a web framework bundler to generate web application distribution code


# Week 8:

## Document Object Model:
 - Object representation of all our wonderful HTML elements
 - Global variable name 'document' points to root element of the DOM
 - DOM Element Interface is implemented by all HTML elements. It allows for manipulating attributes
 - You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property.

```js
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```


### Modifying the DOM:
 - Finally, what JS is all about
 - DOM naturally supports inserting, modifying, and deletion of elements
 - The querySelector() method returns the first child element that matches a specified CSS selector(s) of an element
 - To return all the matches, use the querySelectorAll() method instead

#### Inserting elements:
You append onto an already existing parent element
```js
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```

#### Deleting elements:
Use the removeChild function on the parent
```js
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```

#### Injecting HTML:
 - Use the el.innerHTML = 'htmlhere' function to replace all the html for a given element
 - Directly injecting HTML is a common attack method for hackers. EEK
 - If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using innerHTML.
 - I need to learn what DOM Manupilation Functions there are
 - HTML elements have the ability to call a function when an event occurs on said element. Those are 'Event Listeners'

Example:
```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```
Commonly listened to events:
| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |

Or you can add event listeners in the HTML:
```html
<button onclick='alert("clicked")'>click me</button>
```


## Local Storage:
 - We can use local storage to store data on a user's browser across different sessions. Only works across same browser accessing same website on same device
 - You can also use local storage to store things to then display when databases and stuff can't be accessed. We should save to local whenever a user is using it
 - Four main functions of local storage:
| Function             | Meaning                                      |
| -------------------- | -------------------------------------------- |
| setItem(name, value) | Sets a named item's value into local storage |
| getItem(name)        | Gets a named item's value from local storage |
| removeItem(name)     | Removes a named item from local storage      |
| clear()              | Clears all items in local storage            |


 - Local storage must be string, boolean, or number. To store object or array, convert to JSON with JSON.stringify() and convert back with JSON.parse()


## Promises:
 - You can asynchronously execute code (execute in parallel) using promises
 - Promise object can either be:
    - pending - running asynchronously
    - fulfilled - successfully completed
    - rejected - failed to complete
 - Promise function takes two functions as parameters: resolve and reject. Use them to put promise in fulfilled and rejected states respectively
 - We use `then` `catch` and `finally` with Promise functions to handle results of fulfilled/rejected
 - Observer patterns are another way to do asynchronous stuff. We probably won't use them.



## Async/Await
 - async/await syntax is another, more concise way of doing asynchronous execution
 - Await keyword wraps a promise. It will block until Promise state is fulfilled. Throws an exception if promise is rejected

```js
const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};
```

We can create equivalent executions with either a promise `then/catch` chain, or an `await` with a `try/catch` block.

**then/catch chain version**

```js
coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
```

**async, try/catch version**

```js
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```


 - Await can only be called at the top level of Javascript or in a function defined with `async` keyword
 - the async keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function
 - Calling await on an async function will return result of the promise



## Debugging JavaScript:
 - Follow a pattern of writing a block of code and then stepping through, or debugging, the block before moving on
 - Take the following steps to see the result of console debugging.

  1. Create the above files in a test directory named testConsole
  2. Open the testConsole directory in VS Code
  3. Run index.html using the VS Code Live Server extension
  4. Open the Chrome browser debugger (press `F12`)
  5. Select the `Console` tab
  6. Refresh the browser

 - Breakpoints make the code execute and then stop on the line you want
 - Use console.log to output the state of code at certain key moments
 - With the browser paused in the debugger you can move your mouse cursor over a variable to see its value, see what variables are in scope, set watches on variables, or use the console to interact with the code.
 - This gives you complete control to inspect what the JavaScript code is doing and experiment with possible alternative directions for the code. Take some time to poke around in the debugger. Learning how to exploit its functionality will make you a much better web developer.




# Week 9

## Web Services

### Introduction:
 - All the HTML, CSS, JavaScript, image files that we've written so far comprise the frontend of our web application
 - All frontend requests and requests between devices use HTTPS
 - We can make requests to external services by using their url to the built-in `fetch` function
 - We also need to create our own web services to handle `fetch` requests for things like storing data persistently, providing security, running tasks, executing application logic that you don't want your user to be able to see, and communicating with other users
 - All that is the backend
 - Web service functions are called `endpoints` or APIs
 - You access web service endpoints using fetch function
 - Our backend web service we make can also reach out and access other outside web services



### URL:
 - Uniform Resource Locator
 - Represents location of a web resource like web page, font, image, video stream, database record, or JSON object

Here's how to read URL syntax: Only scheme and domain name are required, other are optional
```yaml
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
```

| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                     |

Technically you can also provide a user name and password before the domain name. This was used historically to authenticate access, but for security reasons this is deprecated. However, you will still see this convention for URLs that represent database connection strings.


 - You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be urn:isbn:10,0765350386. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL or a URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.



### Ports:
 - Different ports are for different protocols (HTTP, HTTPS, SSH, FTP) or different services
 - IANA has decided standard port numbers and what they correspond to.
 - 0-1023 are for standard protocols.
 - 1024-49151 are ports that have been assigned to requesting entities.
 - 49152-65535 are dynamic

Common ports:
| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |


 - The caddy reads in which port the request is coming from (for example 80 or 443 from http or https) and will match up with the service port like startup.kylescycles.com or simon.kylescycles.com
 - We have to run each web service on a different port. For us, we run simon on 3000 and startup on 4000, so we won't be able to use those for different ones



### HTTP:
 - Hypertext Transfer Protocol is how the web talks. Web browser talks to web server using HTTP requests and responses
 - Use a debugger or `curl` to see HTTP exchange:
   
    ```sh
    curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html
    ```

Here's the syntax for an HTTP request:

```yaml
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```

Example:

```http
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```

Here's the syntax for an HTTP response:

```yaml
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```

Example:

```yaml
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
```

#### Verbs:
Here are common verbs used in HTTP request:

| Verb    | Meaning                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                        |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                             |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource. |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                              |
| OPTIONS | Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.                                                                                                                                              |

#### Status Requests:
HTTP responses need to follow standard status codes. There are 5 blocks and them some specifics:

- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.

| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.                                         | 

#### Headers:
HTTP headers specify metadata about a request or response:

| Header                      | Example                              | Meaning                                                                                                                                                                        |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                                                                                           |
| Accept                      | image/\*                             | What content format the client accepts. This may include wildcards.                                                                                                            |
| Content-Type                | text/html; charset=utf-8             | The format of the response content. These are described using standard [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) types. |
| Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                                                                                                     |
| Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                                                                                               |
| Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins.                                                                           |
| Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                                                                                               |
| Content-Length              | 368                                  | The number of bytes contained in the response.                                                                                                                                 |
| Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                                                                                                |
| User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                                                                                                     |

 - HTTP requests don't know about previous or future requests, but cookies can be used to track states across requests


### SOP and CORS

 - Cross-Origin Requests are requests made from one domain while displaying a website from a different domain
 - That's dangerous because you can have a fake website requesting everything from the 'real' website
 - Same Origin Policy only allows JavaScript to make requets to the same domain that the user is currently viewing
 - Cross-Origin Resource Sharing lets us have security while still accessing stuff across the web
 - CORS lets the browser tell it where the origin of the request is and then the server lets it know if that point of origin is allowed
 - CORS only alerts users if something bad is being attempted
 - When accessing third-party web services, you need to make sure that domain allows requests as defined by the `Access-Control-Allow-Origin` header it returns
 - If you don't have an `Access-Control-Allow-Origin` header, it'll only allow requests from same origin


### Fetch

 - HTTP requests are what changed the internet from web 1.0 to web 2.0. It went from static content pages to web applications
 - Fetch is the preferred API for making HTTP requests
 - The basic usage of fetch takes a URL and returns a promise. The promise then function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the response object to convert it to a JavaScript object
 - To do a POST request you populate the options parameter with the HTTP method and headers

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```


### Service Design

 - Web services need to be easy to use, performant, and extensible
 - Before creating a service, model what the different objects are and how they'll interact with each other. It should be easy to understand for the user
 - Don't try to recreate functionality already available in HTTP

#### Endpoints:
 - A web service is divided up into various service endpoints each with an individual functional purpose
 - Service endpoints are sometimes called APIs
 - In HTTP everything is a resource that is acted on with a verb
 - Resource referenced with HTTP request should be readable in URL path
 - The clients of your service endpoints should ignore anything that they don't understand
 - Endpoints should be simple!!! Make sure they do only one thing!

#### Exposing Endpoints:

##### RPC:
 - Remote Procedure Calls exposes service endpoints as simple function calls. Uses POST

##### REST:
 - Representational State Transfer uses verbs that always act on a resource

##### GRAPHQL:
 - Focuses on manipulation of data rather than a function call or resource.
 - Can get a lot of information in one big JSON call
 - Only one endpoint: the query endpoint


### Node.js

 - First successful application for running JavaScript outside of a browser
 - Makes it so JS can run on the server
 - Browsers run JS by using a JS interpreter and an execution engine
 - Node.js takes Google's V8 engine and puts it in the console. Good for them
 - These commands will install NVM (Node Version Manager):

```sh
➜ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

➜ . ~/.nvm/nvm.sh
```

```sh
➜ nvm install --lts
```

Check your version of Node and that it's running like this:
```sh
➜ node -v
v18.13.0
```

Run JavaScript code from the console with Node like this:
```sh
➜  node -e "console.log(1+1)"
2
```

 - To run entire files where we already have code written, use node <filename>. e.g. node index.js
 - To directly type lines of js in and have them execute, just type `node` and you'll enter interpretive mode

#### Node Package Manager (NPM)
 - Many prepackaged bundles of JS are already out there. Don't reinvent the wheel. To use them we must first:
   1. Install the package locally using NPM (NPM is automatically on machine from installing Node)
   2. Include a `require` statement in code that uses the package name
 - [This website](https://www.npmjs.com/) has many packages we can search for!
 - We initialize our code to use NPM by creating a directory that will contain your JavaScript and then running `npm init`. NPM will step you through a series of questions about the project you are creating. You can press the return key for each of questions if you want to accept the defaults. If you are always going to accept all of the defaults you can use `npm init -y` and skip the Q&A.
 - Package.json is created when you initialize code for NPM. It contains:
   1. Metadata about the project (name, default entry JS file)
   2. Commands you can execute to run/test/distribute code
   3. Packages the project depends on

 - To install packages we use the command `npm install <package name>`
 - To get rid of packages use `npm uninstall <package name>`
 - When you install packages, NPM makes a package-lock.json file and a node_modules directory
 - package-lock tracks version of package you install
 - node_modules contains JS files for the package
 - Don't push the node_modules to the server or git because it is very large and the server can get it from other files. Put it in .gitignore file

Here's an example of code to write in JS file to access the package:

```js
const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});
```

Summary steps:
1. Create your project directory
1. Initialize it for use with NPM by running `npm init -y`
1. Make sure `.gitignore` file contains `node_modules`
1. Install any desired packages with `npm install <package name here>`
1. Add `require('<package name here>')` to your application's JavaScript
1. Use the code the package provides in your JavaScript
1. Run your code with `node index.js`


#### Creating a Web Service
 - With JavaScript we can write code that listens on a network port (e.g. 80, 443, 3000, or 8080), receives HTTP requests, processes them, and then responds. We can use this to create a simple web service that we then execute using Node.js.

 - Deno and Bun are other things to learn more about. Competitors to Node


### Express

 - Express is a Node package that provides support for:
    1. Routing requests for service endpoints
    1. Manipulating HTTP requests with JSON body content
    1. Generating HTTP responses
    1. Using `middleware` to add functionality
 - We use express because it's a framework with more functionality for fully making a website
 - Here's how we create express application:
```sh
➜ npm install express
```

```js
const express = require('express');
const app = express();

app.listen(8080);
```

 - You call functions in express based on HTTP paths. The Express objects accesses all HTTP verbs as functions. Example:
```js
app.get('/store/provo', (req, res, next) => {
  res.send({name: 'provo'});
});
```

 - The get function takes two parameters, a URL path matching pattern, and a callback function that is invoked when the pattern matches. The path matching parameter is used to match against the URL path of an incoming HTTP request.
 - The callback function has three parameters that represent the HTTP request object (req), the HTTP response object (res), and the next routing function that Express expects to be called if this routing function wants another function to generate a response.
 - You don't need to include the next parameter if you won't use it. No rerouting

#### Middleware:
 - There are two pieces to this pattern: middleware and a mediator
 - Middleware - Works in the middle of a request and response. Pieces of functionality
 - Mediator - loads middleware components and determines their order of execution
 - Express is the mediator for us. Middleware functions are the middleware components
 - Some middleware is already in Express by default, some can be installed using Node, and some we will write ourselves
 - Routing functions are middleware functions. Has the same basic outline: function doSomething(request, response, next)
 - You usually call next after completing your process so the next middleware function will go
 - The order you add functions to the Express object is the order in which they'll execute

Here's an example of writing your own middleware:
```js
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
```

Here's how to use built-in middleware:
```js
app.use(express.static('public'));
```

You can use third party middleware by using NPM to install the packages 
```sh
➜ npm install cookie-parser
```

```js
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});
```

 - Middleware can also handle errors. It's like other middleware functions but has an error parameter as well. function errMiddle(err, req, res, next)
 - Here's kinda a default error handler:
```js
app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});
```


Here's a full in-depth example of everything together:
```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({name: req.params.storeName});
});

app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```



# Week 10
## More Web Services

### Debugging Node.js
 - We will now be debugging not in the browser but directly in VS Code
 - To access debugger press `f5` and then select Node.js
 - You can now see the console.log outputs. Yay
 - Use the red dot to set a breakpoint to stop the code
 - Run the code again by pressing `f5` and it will stop at the breakpoint
 - `f10` will step to next line, `f11` will step into a function call, and `f5` will continue funning from the current line
 - Stop debugger at any time using `Shift f5`
 - To debug the webservice we set up a listening port at 8080 and then we can step into the code from the browser. Coolio
```js
const express = require('express');
const app = express();

app.get('/*', (req, res) => {
  res.send({ url: req.originalUrl });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

 - Install the nodemon package in order to have a package that will look for changes in the files and automatically restart node when it detects them: Here's the command to do that:
`npm install -g nodemon`
 - Then, because VS Code does not know how to launch Nodemon automatically, you need create a VS Code launch configuration. In VS Code press CTRL-SHIFT-P (on Windows) or ⌘-SHIFT-P (on Mac) and type the command Debug: Add configuration. This will then ask you what type of configuration you would like to create. Type Node.js and select the Node.js: Nodemon setup option. In the launch configuration file that it creates, change the program from app.js to main.js (or whatever the main JavaScript file is for your application) and save the configuration file. It will now debug in Nodemon and not Node


### PM2
 - When we run a program from the console, it'll determinate when we close the console. To keep it running, we register it as a daemon
 - Daemons are just things that are always working in the background. Scary. We want our web services to do that
 - Process Manager 2 makes them do that
 - Our AWS AMI already has PM2 installed and the deploy script takes care of everything. Yay
 - Here are some fun PM2 commands:
| Command                                                    | Purpose                                                                          |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **pm2 ls**                                                 | List all of the hosted node processes                                            |
| **pm2 monit**                                              | Visual monitor                                                                   |
| **pm2 start index.js -n simon**                            | Add a new process with an explicit name                                          |
| **pm2 start index.js -n startup -- 4000**                  | Add a new process with an explicit name and port parameter                       |
| **pm2 stop simon**                                         | Stop a process                                                                   |
| **pm2 restart simon**                                      | Restart a process                                                                |
| **pm2 delete simon**                                       | Delete a process from being hosted                                               |
| **pm2 delete all**                                         | Delete all processes                                                             |
| **pm2 save**                                               | Save the current processes across reboot                                         |
| **pm2 restart all**                                        | Reload all of the processes                                                      |
| **pm2 restart simon --update-env**                         | Reload process and update the node version to the current environment definition |
| **pm2 update**                                             | Reload pm2                                                                       |
| **pm2 start env.js --watch --ignore-watch="node_modules"** | Automatically reload service when index.js changes                               |
| **pm2 describe simon**                                     | Describe detailed process information                                            |
| **pm2 startup**                                            | Displays the command to run to keep PM2 running after a reboot.                  |
| **pm2 logs simon**                                         | Display process logs                                                             |
| **pm2 env 0**                                              | Display environment variables for process. Use `pm2 ls` to get the process ID    |

 - To setup a different subdomain that'll access a different web service, here are the steps:
1. Add the rule to the Caddyfile to tell it how to direct requests for the domain.
2. Create a directory and add the files for the web service.
3. Configure PM2 to host the web service.

#### Modifying Caddyfile:
 - First we SSH into the server
 - Copy the startup domain example and change the port number and subdomain name. Example:
```sh
tacos.cs260.click {
  reverse_proxy _ localhost:5000
  header Cache-Control none
  header -server
  header Access-Control-Allow-Origin *
}
```

 - Restart caddy to load new settings with this command: `sudo service caddy restart`
 - Caddy will now reroute to port 5000, but we haven't put any webservice there. We should do that

#### Creating the web service:
 - Copy the ~/services/startup directory to a directory that represents the purpose of your service. `cp -r ~/services/startup ~/services/tacos`
 - The directory has an index.js file with a port listener. We just need to use the command line to using Node:
```sh
node index.js 5000
```

#### Configure PM2 to run the service:
 - Currently it's only running from the console and as soon as we end that session, it'll close the service. We need it to be a daemon!
 - In the SSH Console session run `pm2 ls` to see the services running
 - Go to the service directory and run:
```sh
cd ~/services/tacos
pm2 start index.js -n tacos -- 5000
pm2 save
```

 - Voila, the service is there and will be there forever


### UI Testing:
 - Test Driven Development is a proven methodology for accelerating application creation, protecting against regression bugs, and demonstrating correctness
 - The difficulty comes in testing code because you must actually run it in the browser
 - Other testing problems include every one of the major browsers behaves slightly differently, viewport size makes a big difference, all the code executes asynchronously, network disruptions are common, and then there is the human factor.
 - Let's look at some solutions

#### Playwright:
 - Playwright is used for automating tests in the browser
 - Playwright is backed by Microsoft, integrates well with VSCode, and runs as a Node.js process. All good things
 - First to install the Playwright directory, use the command `npm init playwright@latest`
 - Now we install the Playwright extension for VSCode
 - Here's an example test we would put in the `tests/example.spec.js` file

```js
import { test, expect } from '@playwright/test';

test('testWelcomeButton', async ({ page }) => {
  // Navigate to the welcome page
  await page.goto('http://localhost:5500/');

  // Get the target element and make sure it is in the correct starting state
  const hello = page.getByTestId('msg');
  await expect(hello).toHaveText('Hello world');

  // Press the button
  const changeBtn = page.getByRole('button', { name: 'change welcome' });
  await changeBtn.click();

  // Expect that the change happened correctly
  await expect(hello).toHaveText('I feel not welcomed');
});
```
 - To test, first we run the application using `npm run start`
 - To run the test in VSCode we go to the `Test Explorer` tab
 - From there we can run the tests and see what they output. Yay


#### BrowserStack:
 - BrowserStack is used to test how things run on different devices
 - BrowserStack actually runs your code/service on real devices in their headquarters and you can see how it works. Nifty
 - Costs money but there are free trials. Yay



### Endpoint Testing:
 - Testing services is easier than UI testing cause we don't need a browser. It's important to learn how to write tests
 - Jest is the current best testing package for Express driven services
 - Any file with the suffix `.test.js` is considered a testing file and Jest will use it
 - Call the test function to write a test. We don't need to use require to import Jest. It automatically comes in
 - Here's an example of what a test looks like:
```js
test('that equal values are equal', () => {
  expect(false).toBe(true);
});
```

 - First parameter in test is a human-readable description
 - Second parameter is the function to call
 - Here's how we install Jest package: `npm install jest -D`
 - -D on a package tells Node it's a development package and wont be included when we do production release
 - Now, replace the `scripts` section of the `package.json` file with a new command that will run our tests with Jest.

```json
"scripts": {
  "test": "jest"
},
```

 - Now run `npm run test` and it will run beautifully
 - To test endpoints we need another package to make HTTP requests without sending them over a network. `npm install supertest -D`
 - Import the express service and request function from supertest into the test file to use it
 - You make an HTTP request by passing the Express object (app) to the request function from supertest and then chaining on verb functions and the endpoint path and expect functions
 - End function has an error we pass to the done function. Otherwise just call done normally

```js
const request = require('supertest');
const app = require('./server');

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});
```

 - Learning this TDD is super important. We can even write tests first and from their write our actual code. yay


### Converting JS application into a Web Application
 - This is most of what I have to do for the project. Ezpz
 - Steps:

1. Move all previous code files into a directory called `public`
2. Make index.js file where we start our service
3. Within the project directory run npm init -y. This configures the directory to work with node.js.
4. Modify or create .gitignore to ignore node_modules.
5. Install the Express package by running npm install express. This will write the Express package dependency in the package.json file and install all the Express code to the node_modules directory.
6. Create a file named index.js in the root of the project. This is the entry point that node.js will call when you run your web service.
7. Add the basic Express JavaScript code needed to host the application static content and the desired endpoints.
8. Modify the Simon application code to make service endpoint requests to our newly created HTTP service code.


# Week 11

## Databases:

### Storage Services:
 - We need to store a bunch of files. Usually not necessary to store on a database and we don't want to clog up the server, so we use a storage service specifically made for that
 - AWS S3 is one of the most popular because it has unlimited storage and you only pay for storage you actually use
 - Here are the steps for using it:
1. Creating a S3 bucket to store your data in.
1. Getting credentials so that your application can access the bucket.
1. [Using](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html) the credentials in your application.
1. Using the [SDK](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html) to write, list, read, and delete files from the bucket.

### Data services:
 - Structured Query Language (SQL) is a programming language made for storing and processing info in databases
 - Now there are many services for dealing with different data types. Here are some:
| Service       | Specialty             |
| ------------- | --------------------- |
| MySQL         | Relational queries    |
| Redis         | Memory cached objects |
| ElasticSearch | Ranked free text      |
| MongoDB       | JSON objects          |
| DynamoDB      | Key value pairs       |
| Neo4J         | Graph based data      |
| InfluxDB      | Time series data      |


#### MongoDB
 - We use MongoDB. Yay
 - A mongo database is made up of one or more collections that each contain JSON documents
 - A collection is an array of JS objects, all with unique ids
 - Use this `npm install mongodb` to install Mongo
 - You make a client connection to the server like so:

```js
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
```

 - We can then get a database and collection object
 - Collection object allows insertion and querying of files
 - Use `insertOne` function with JS object to put in database
 - Use `find` on collection object to get documents. Without parameters it returns all documents. With parameters we can limit what we get
 - MongoDB has a data service called Atlas that we use. Handles a lot so we don't have to. Yay!
 - Steps for making MongoDB Atlas account:
1. Create your account.
2. Create a database cluster.
3. Create your root database user credentials. Remember these for later use.
4. ⚠ Set network access to your database to be available from anywhere.
5. Copy the connection string and use the information in your code.
6. Save the connection and credential information in your production and development environments as instructed above.

 - We don't want to have our credentials chilling in our code because it could get hacked. That would not be bueno
 - We'll have a configuration file with our credentials that we'll load into our production environment but never post to GitHub
 - We can test our connection to the database just to make sure it's actually connected before we try to get/send data

```js
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rental');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});
```

Here's an example of writing to database and all that:

```js
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);
```


## Login:
 - We need two endpoints, one to create the authentication credential, and the other to authenticate/login with that credential
 - We control access to other endoints based on authentication

Here's an example of authentication endpoint:
```http
POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```

```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```

Here's an example of login endpoint:
```http
POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```

```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}

```

Here's an example of getMe endpoint to return info about user:
```http
GET /user/me HTTP/2
Cookie: auth=tokenHere
```

```http
HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}

```

Here's an example of starter web service using login:
```js
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

 - With that basic service, we now need to implement endpoints
 - We use express.json middleware to parse the HTTP requests into JS objects
 - We make authentication tokens for each using using UUID (Universally Unique Identifier)
 - We hash our passwords for security. Here's an example of how we do that:

```js
const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
```

 - We use HTTP Cookies to pass the authentication token to the browser in the login endpoint
- `httpOnly` tells the browser to not allow JavaScript running on the browser to read the cookie.
- `secure` requires HTTPS to be used when sending the cookie back to the server.
- `sameSite` will only return the cookie to the domain that generated it.

Full example code:
```js
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```


### Authorization Services:
 - Once we authenticate a user, we store an authentication token on their device, usually as a cookie. The service can then associate data with that user's unique authentication token
 - Authentication is also used to change what different users are authorized to do
 - There are many already existing standard protocols for authentication and authorization. Yay service providers
 - SSO (Single Sign On) is letting a user use one set of credentials for many services. Like how google is used to login to just about everything nowadays




# Week 12

## WebSocket
 - HTTP is based on client-server interactions. Websocket we use for client-client interactions
 - Websocket doesn't require constant pinging or anything like that
 - Websocket only handles two parties. If you have groups larger than that, the server acts as the intermediary and forwards all messages
 - First we create a websocket object with the port it's going to use
 - Then we can send messages using `send` and receive messages using `onmessage`
 - Any connections made to the port will be automatically upgraded to a WebSocket connection if the request has a `connection: Upgrade` header

```js
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
```

```js
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```


### Debugging:

 - We use VS Code to debug the server and Chrome to debug the client
 - use `npm init -y` to start npm in the project
 - Then use `npm install ws` to be able to use WebSocket
 - We debug in the server with f5 and in the client with f12


### Chat:
 - ws is nonsecure websocket
 - wss is secure websockeet
 - We want to be able to use both because yay inclusion
 - Use this line `const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';` to connect to secure or nonsecure, depending on the http connection
 - Here's how we establish the web service: `const { WebSocketServer } = require('ws');`

When we create our WebSocket we do things a little differently than we did with the simple connection example. Instead of letting the WebSocketServer control both the HTTP connection and the upgrading to WebSocket, we want to use the HTTP connection that Express is providing and handle the upgrade to WebSocket ourselves. This is done by specifying the `noServer` option when creating the WebSocketServer and then handling the `upgrade` notification that occurs when a client requests the upgrade of the protocol from HTTP to WebSocket.

```js
// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});
```

 - WebSocket server can use `connection` `message` and `close` events to forward messages between parties
 - That's how we make messages go to everyone when everyone is more than two

```js
// Keep track of all the connections so we can forward messages
let connections = [];

wss.on('connection', (ws) => {
  const connection = { id: connections.length + 1, alive: true, ws: ws };
  connections.push(connection);

  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    connections.findIndex((o, i) => {
      if (o.id === connection.id) {
        connections.splice(i, 1);
        return true;
      }
    });
  });
});
```

 - WebSocket connections close if no messages are sent. To keep them alive we use a `ping` message to ask the client if he's there and a `pong` to confirm that he is

```js
setInterval(() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);
```

In our `connection` handler we listen for the `pong` response and mark the connection as alive.

```js
// Respond to pong messages by marking the connection alive
ws.on('pong', () => {
  connection.alive = true;
});
```


# Week 13

## Web Frameworks:
 - Web Frameworks provide tools to complete common application tasks like modularizing code, creating single page applications, simplifying reactivity, and supporting diverse hardware devices
 - Some create new file formats that combine HTML, CSS, JS into one file

##### Examples of some frameworks:
 - Vue combines HTML, CSS, and JS all in one file. HTML is represented by a `template` element
 - Svelte also combines them all, but it requires a transpiler to generate the browser-ready code
 - React combines HTML and JavaScript into a JSX file. CSS is in different file that is then imported into the JSX file


**JSX**

```jsx
import 'hello.css';

const Hello = () => {
  let name = 'world';

  return <p>Hello {name}</p>;
};
```

**CSS**

```css
p {
  color: green;
}
```


An Angular Component defines which files should be combined together

**JS**

```js
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string;
  constructor() {
    this.name = 'world';
  }
}
```



## React

 - React uses a virtual DOM that just loads different parts of your HTML
 - The name comes from the goal to make a web page that's reactive and automatically updates based on user interactions
 - It was created for Facebook in 2011
 - React abstracts HTML into JSX and turns the JSX into JS and HTML using the preprocessor babel
 - We use `<script type="text/babel">` cause yeah
 - The `React.createElement` function will then generate DOM elements and monitor the data they represent for changes. When a change is discovered, React will trigger dependent changes.
 - In order to get things on our page using react, we create a root and tell the root to render. Like so:

```js
    <script type="text/babel">
        const root = ReactDOM.createRoot(
            document.getElementById('mydiv')
        );
        const element = (
          <div>
          <h1>Hello, world</h1>
          <h2>Goodbye, world</h2>
          </div>
        )
        root.render(element);    
    </script>
```

 - Elements are the smallest building blocks of a react page
 - Applications built with react generally have a single root DOM node
 - We can pass in scripts to the root.render() as well
 - React only changes the parts of the DOM it needs to. It'll leave the rest the same

### Components

 - Components let you split the UI into independent, reusable pieces. They're like JavaScript functions
 - Components take arbitrary inputs called props and return React elements to show what we want in the DOM. Props stand for properties
Example:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Here's an example of how we would pass into a component:
```jsx
  <script type="text/babel">  
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = <Welcome name="Sara" />;
  root.render(element);
</script>
```

Components can also contain other components:
```jsx
  <script type="text/babel">  
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  </script>
  ```

These two are equivalent. Important to know how to use classes:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Events:
 - React events are named using camelCase and you pass in a funciton to the event handler, not a string
```html
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

 - In the function, you must call preventDefault(); on the event
 - To maintain state between events, we must create an object
 - You don't need semicolons after JSX elements, like when you're calling a component in another component
 - When you do return, you need to put the open paren right after it, no line break

Here's some example
```jxs
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">  
    function Form() {
      function handleSubmit(e) {
        e.preventDefault();
        alert('You clicked submit.');
      }

      return (
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      );
    }
    class Toggle extends React.Component {
      constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

      render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
      }
    }
    function Both(props) 
    {
      return (
        <div>
          <Form />
          <Toggle />
        </div>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Both />);

    </script>
  </body>
</html>
```

### Conditional Rendering
 - We can return different things to render in our components, just like normal JavaScript

### Lists
 - We display lists in react using the map function
 - Here's the real important part:
```html
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
```

Here's it all:
```html
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel"> 
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);
    </script>
  </body>
</html>
```

### Forms:
 - HTML elements maintain their own state and update it based on user input
 - In React, mutable state is kept in the state property of components, and it's only updated when setState() is called
 - An input form element whose value is controlled by React is called a controlled component

```html
function NameForm() {
  const [state, setState] = React.useState('');

  function handleChange(event) {
    setState(event.target.value);
  }

  function handleSubmit(event) {
    alert('A name was submitted: ' + state);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={state} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

### React-APIs
 - We can also use fetch calls with React. Super easy, barely an inconvenience
 - event.target will give use the element that triggered the event to happen
 - The state, as in `this.state` is an object that can hold much information. It's like a dictionary. You can have a value, you can have a motorcycle id, whatever you want
 - You can have stuff after render before the return statement
 - This is how we can have some cool calls to make lists get smaller as you type. Like so

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">  
    class CityForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: '', cities:[{"city":"Provo"},{"city":"Lindon"}]};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        alert('A name was changed: ' + event.target.value);
        this.setState({value: event.target.value});
        var url = "https://csonline.fhtl.org?q=" + event.target.value;
        console.log("URL " + url);
        fetch(url)
          .then((data) => {
            return (data.json());
          })
          .then((citylist) => {
            console.log("CityList");
            console.log(citylist);
            this.setState({cities:citylist})
            console.log(this.state.cities);
          });
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
      
    
      render() {
        const listItems = this.state.cities.map((cityname) => 
          <li key={cityname.city}>{cityname.city}</li>
        );
        return (
            <div>
            <form onSubmit={this.handleSubmit} onKeyUp={this.handleChange}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
            <ul>{listItems}</ul>
            </div>
        );
      }
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<CityForm />);
    </script>
  </body>
</html>
```


### ToDo List
 - Hey I need one of those
 - Here's some cool code for making a todo list if I want to remember it

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">  
    class Todo extends React.Component {
      constructor(props) {
        super(props);
         this.state = {
            formtask: '', 
            tasks:[{"task":"Wash Clothes","completed":false},{"task":"Sweep Floor","completed":true}]
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
      }
    
      handleChange(event) {
        this.setState({formtask: event.target.value});
      }
    
      handleSubmit(event) {
        // alert('A task was submitted: ' + this.state.formtask);
        this.setState({tasks:[...this.state.tasks, 
            {"task":this.state.formtask,"completed":false}]
        });
        this.setState({formtask:""});
        event.preventDefault();
      }

      handleToggle(event, index)  {
        const element = event.target;
        var target = this.state.tasks[index];
        if(target.completed) {
            target.completed = false;
        } else {
            target.completed = true;
        }
        console.log(this.state.tasks);
        element.classList.toggle("strike");
      }
    
      handleFilter() {
        let filtered = this.state.tasks.filter(task => {
          return !task.completed;
        });
        this.setState({tasks:filtered});
        event.preventDefault();
      }    
      
      render() {
        const listItems = this.state.tasks.map((thistask, index) => 
          <li className={thistask.completed ? "strike" : "todo"} 
            onClick={event => this.handleToggle(event, index)}
            key={thistask.task}>{thistask.task}</li>
        );
        return (
            <div>
              <h1> Todo List </h1>
              <form onSubmit={this.handleSubmit} onKeyUp={this.handleChange}>
                <label>
                  Name:
                  <input type="text" value={this.state.formtask} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
              <ul>{listItems}</ul>
              <button onClick={this.handleFilter}>Clear Completed</button>
            </div>
        );
      }
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Todo />);
    </script>
  </body>
</html>
```

### More Components

 - Primary purpose of component is to create user interface using render()
 - Whatever render() returns is put into HTML
 - Components get passed in properties. The name of the property is how you then call whatever it is
 - We use `React.useState` to have the state of componenets. It returns a variable that has the state and a function to update the state
 - Class style components are also used, but it's being moved away from. With class style, properties are loaded on the constructor and the state is set using `setState` on the component object

**Function Style:**
```jsx
const Clicker = () => {
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```

**Class Style:**
```jsx
class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  onClicked() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    return <p onClick={(e) => this.onClicked(e)}>clicked: {`${this.state.clicked}`}</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```



# Week 14


## Toolchains:
 - We have many tools to do common functional parts of applications. Here are some:

- **Code repository** - Stores code in a shared, versioned, location.
- **Linter** - Removes, or warns, of non-idiomatic code usage.
- **Prettier** - Formats code according to a shared standard.
- **Transpiler** - Compiles code into a different format. For example, from JSX to JavaScript, TypeScript to JavaScript, or SCSS to CSS.
- **Polyfill** - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
- **Bundler** - Packages code into bundles for delivery to the browser. This enables compatibility (for example with ES6 module support), or performance (with lazy loading).
- **Minifier** - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
- **Testing** - Automated tests at multiple levels to ensure correctness.
- **Deployment** - Automated packaging and delivery of code from the development environment to the production environment.

 - We have much Toolchain usage in our project


## React Tic-Tac-Toe
 - Putting `default` in a function tells other files that use this fail that it's the main function of the file
 - React components can only return a single JSX element. To return multiple we wrap them in fragments `<>` and `</>`
 - We can put divs and other things. Basically as much HTML as we want, as long as we put it inside our fragments and make sure the return has parenthesees
 - If you import an entire file you can run the default function by just calling the file name like `<App/>`
 - We put the props we pass in inside parenthesees and squigles: `function Square({ value }) {}`
 - Curly braces are how we will access that value in the future too
 - React DevTools can be used to check the props and state of React components
 - Instead of asking for info from children, try to use a parent's state to keep track of things
 - To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead. The parent component can pass that state back down to the children via props. This keeps the child components in sync with each other and with their parent.
 - JavaScript supports closures - inner functions can access variables and functions in an outer function
 - Every time we call a function that edits some element, it rerenders that element in the DOM
 - It's convention to name onSomething and handleSomething functions for events
 - Immutability in data is important so you can easily redo and you haven't lost the data
 - We use `map` function to transfer from our JavaScript array into an array of React elements
 - Every list item needs a key to separate it from its siblings
 - React uses keys to know which items to update. That way it only updates the changed children when it's running a function in the parent's scope
 - Keys don't need to be globally unique, just among sibling components


## React Reactivity
 - React monitors a component's state and prop objects, and if/when they change, it calls the component's render function
 - Didn't really learn too much. Just make sure not to get caught in an infinite rendering loop. Pass down arrow functions!


## Hooks:
 - React hooks are what let function style components do everything class style components can. Still dunno why they don't like class style
 - New features are added as hooks. That's how they force us into function-style
 - useState is a hook
 - `useEffect` hook is for representing lifecycle events. It's called every time the component is rerendered
 - Just kidding, we control when it's caled by specifying its dependencies
 - We pass an array of dependencies as a second parameter to the `useEffect` call
 - If you specify an empty array it'll only be called when the function is first rendered. If you do nothing, it'll be called always.

Example Code!!!
```jsx
function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

```jsx
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```


## React Router:
 - A web framework router lets us have a single-page application, where the browser loads one singular HTML page and the JavaScript then manipulates the DOM to have 'multiple pages'
 - We're going to use react-router-dom version 6. There are many others but we like this one we decided
 - A basic implementation of the router consists of a `BrowserRouter` component that encapsulates the entire application and controls the routing action. The `Link`, or `NavLink`, component captures user navigation events and modifies what is rendered by the `Routes` component by matching up the `to` and `path` attributes.

```jsx
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
```


## Vite:
 - This is a longer one, but also kinda technically the last one, at least that's required
 - We want to use the whole web framework toolchain available to us
 - A Command Line Interface (CLI) is a way to set up your application to use those tools. Makes it so you don't have to configure toolchain parameters yourself
 - Here are commands to create a new React-based web app using Vite
```
npm create vite@latest demoVite -- --template react
cd demoVite
npm install
npm run dev
```

 - With your default function, you can just declare, export default <FunctionName>
 - With Vite CLI, we use .jsx for files, not .js
 - `npm run dev` bundles the code into a temporary directory that the Vite Debug HTTP server loads from
 - `npm run build` is needed when we're going to deploy to production environment
 - `npm run build` and `vite build` are the same
 - `vite build` transpiles, minifies, injects the proper JavaScript, and then outputs everything to a deployment-ready version contained in a distribution subdirectory named `dist`
 - Our deployment script we've used since React on creates a production distribution and copies that `dist` directory to the production server
 - The `dist` directory basically has all the files scrunched up into that unreadable mess. Fun looking



# Week 15
A real hodgepodge of stuff. Some fun Security and SEO and yeah. I should read these. Will I? Probably

## Security
 - On your server, you can see all authorization attempts with this command `sudo less +G /var/log/auth.log`. Then you can see all the nasty people trying to break in
 - If you have a website, people are trying to break into it. ESPECIALLY if there's any sort of username and password. People use the same stuff for everything

Here's some fun vocab to do with security:
- **Hacking** - The process of making a system do something it's not supposed to do.
- **Exploit** - Code or input that takes advantage of a programming or configuration flaw.
- **Attack Vector** - The method that a hacker employs to penetrate and exploit a system.
- **Attack Surface** - The exposed parts of a system that an attacker can access. For example, open ports (22, 443, 80), service endpoints, or user accounts.
- **Attack Payload** - The actual code, or data, that a hacker delivers to a system in order to exploit it.
- **Input sanitization** - "Cleaning" any input of potentially malicious data.
- **Black box testing** - Testing an application without knowledge of the internals of the application.
- **White box testing** - Testing an application by **with** knowledge of the source code and internal infrastructure.
- **Penetration Testing** - Attempting to gain access to, or exploit, a system in ways that are not anticipated by the developers.
- **Mitigation** - The action taken to remove, or reduce, a threat.

Here are some common hacking techniques:
- **Injection**: When an application interacts with a database on the backend, a programmer will often take user input and concatenate it directly into a search query. This allows a hacker can use a specially crafted query to make the database reveal hidden information or even delete the database.

- **Cross-Site Scripting (XSS)**: A category of attacks where an attacker can make malicious code execute on a different user's browser. If successful, an attacker can turn a website that a user trusts, into one that can steal passwords and hijack a user's account.

- **Denial of Service**: This includes any attack where the main goal is to render any service inaccessible. This can be done by deleting a database using an SQL injection, by sending unexpected data to a service endpoint that causes the program to crash, or by simply making more requests than a server can handle.

- **Credential Stuffing**: People have a tendency to reuse passwords or variations of passwords on different websites. If a hacker has a user's credentials from a previous website attack, then there is a good chance that they can successfully use those credentials on a different website. A hacker can also try to brute force attack a system by trying every possible combination of password.

- **Social engineering** - Appealing to a human's desire to help, in order to gain unauthorized access or information.

Here are some things to keep in mind to be security-minded when making web apps:
- **Sanitize input data** - Always assume that any data you receive from outside your system will be used to exploit your system. Consider if the input data can be turned into an executable expression, or can overload computing, bandwidth, or storage resources.
- **Logging** - It is not possible to think of every way that your system can be exploited, but you can create an immutable log of requests that will expose when a system is being exploited. You can then trigger alerts, and periodically review the logs for unexpected activity.
- **Traps** - Create what appears to be valuable information and then trigger alarms when the data is accessed.
- **Educate** - Teach yourself, your users, and everyone you work with, to be security minded. Anyone who has access to your system should understand how to prevent physical, social, and software attacks.
- **Reduce attack surfaces** - Do not open access anymore than is necessary to properly provide your application. This includes what network ports are open, what account privileges are allowed, where you can access the system from, and what endpoints are available.
- **Layered security** - Do not assume that one safeguard is enough. Create multiple layers of security that each take different approaches. For example, secure your physical environment, secure your network, secure your server, secure your public network traffic, secure your private network traffic, encrypt your storage, separate your production systems from your development systems, put your payment information in a separate environment from your application environment. Do not allow data from one layer to move to other layers. For example, do not allow an employee to take data out of the production system.
- **Least required access policy** - Do not give any one user all the credentials necessary to control the entire system. Only give a user what access they need to do the work they are required to do.
- **Safeguard credentials** - Do not store credentials in accessible locations such as a public GitHub repository or a sticky note taped to a monitor. Automatically rotate credentials in order to limit the impact of an exposure. Only award credentials that are necessary to do a specific task.
- **Public review** - Do not rely on obscurity to keep your system safe. Assume instead that an attacker knows everything about your system and then make it difficult for anyone to exploit the system. If you can attack your system, then a hacker will be able to also. By soliciting public review and the work of external penetration testers, you will be able to discover and remove potential exploits.



## OWASP
 - Open Web Application Security Project
 - It's a research entity that keeps track of the top ten most important security risks. That's nifty and useful

### Broken Access Control
 - Improperly enforced permissions on users
 - Don't make admin pages accessible if you just have the url

### Cryptographic Failures
 - Sensitive data accessible with no or poor encryption
 - Don't use weak hashing algorithms
 - Always use strong encryption

### Injection
 - Providing user input that is actually a function that will make the app do bad things or give info it shouldn't
 - Sanitize your input silly

### Insecure Design
 - This is unique for each web app. Basically when you make something that can be exploited
 - Don't do that

### Security Misconfiguration
 - Making configurations that are easy to access
 - Don't do that either

### Vulnerable and Outdated Components
 - Especially when using 3rd party stuff, packages go out of date and become vulnerable. You NEED to constantly update or they will be able to attack you :(

### Identification and Authentication Failure
 - Anything where attackers can impersonate a real user
 - Allowing unlimited password attempts can be bad
 - Don't have weak password recovery

### Software and Data Integrity Failure
 - Attacks that allow external software/data to compromise your app
 - Can be dangerous to use third-party apps. They could become compromised or they could be owned by malicious peeps

### Security Logging and Monitoring Failures
 - Attackers try to delete logs that show their presence. Make your logs immutable
 - Review your logs silly

### Server Side Request Forgery
 - Causes application to make unintended internal requests to expose data/services
 - Also bad



## Security Practice
The best way to learn about how attacks happen is to attack yourself. Gruyere and Juice Shop are practice security web applications

### Gruyere
 - [Gruyere](https://google-gruyere.appspot.com) is great. Provides much tutorial and practice

### Juice Shop
 - [Juice Shop](https://github.com/juice-shop/juice-shop#-owasp-juice-shop) is also great. Made by OWASP
 - You must run it from your own device. Great cause you have much control
Here's how to install:
```
git clone https://github.com/juice-shop/juice-shop.git --depth 1

cd juice-shop

npm install
```

Run the application on 3000 with `npm start`
 - You have to figure out the challenges on your own. So much fun
 - Start with the DOM XSS tutorial. Good job



## Typescript
 - Typescript adds static type checking to JS. That means it checks while you're coding so you don't use the wrong type
 - You can define the types your variables should be, so if they're put in wrong the system will catch them
 - You can also use the `interface` keyword when making custom objects to define the type of their variables/objects they have. Kinda like a class
 - You can define your own types and tell them what the acceptable values are. Like so `type AuthState = 'unknown' | 'authenticated' | 'unauthenticated';`
 - You can also use unions to let a variable be of multiple types. You tell the system which types are allowed
 - To use TypeScript when creating a project use the command `npx create-react-app my-app --template typescript` to use that template
 - To convert an existing application, use the command `npm install --save-dev typescript` to add the package
 - Use a `tsconfig.json` file to configure how TS will interact with your code
 - Look up how to use the `tsconfig.json`, but here's an example:
```js
{
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "build",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "./src/**/*"
  ]
}
```



## Performance Monitoring
 - Slow pages suck. A 1 second delay in loading the page will lead to 11% fewer views, 16% drop in customer satisfaction, and 7% loss in conversations
 - Main things to monitor are: browser latency, network latency, and service endpoint latency

### Browser Application Latency
 - Impacted by amount of data to be processed, user's device, and complexity of processing algorithm
 - Try to make the application processing as asynchronous as possible so the user doesn't notice/have to wait
 - Ways to make smaller files:
    - Use compression when transferring over HTTP
    - Reduce quality of images and videos
    - Minify JavaScript and CSS (removes whitespace and shortens variable names)
    - Use HTTP/2 or HTTP/3
  
### Network Latency
 - Impacted by every network request you make, amount of data sent, amount of data user can receive every second, and distance data has to travel
 - Bandwith - amount of data a user can receive every second. Not the bandwith!!
 - You have to be mindful that users have low-bandwith devices
 - Try to host servers close to where users will be accessing them (geographically)

### Service Endpoint Latency
 - Impacted by number of requests made and amount of time needed for each request
 - Goal is under 10ms for every endpoint

### Performance Tools
 - Browser tools can be used to see the network requests and the time they take. Clear the cache before testing
 - You can simulate users in network tools as well by throttling (in the network section) to simulate 3G
 - Chrome debugging Lighthouse tool will analyze your application and show you how good your performance is
 - Chrome debugger's performance tab is another tool
 - Global Speed Tests are likewise important to see if it'll run well around the world
 - If your users are very far away, use a Content Delivery Network (CDN) with a closer location. Yay magic


## Search Engine Optimization
 - SEO can save millions in marketing. Be weird if Kyle spent that
 - Let's look at some contributors to your search rank:

### Content
 - SEs care about value you provide. Give content

### Authoritative Links
 - If other places, especially authoritative places, link your content, that's good

### Structure and Organization
 - HTML needs to be used properly. The bot should find what it expects to find in different tags
 - Title and Header elements should contain those keywords you want it to find

### Metadata
 - Search crawlers target a few key elements attributes. Examples are `description` `robots` `og` and image alt
 - `og` metatags are used by social media website. Crawlers will think your site is cool and hip if you use them too. Swagalicious
 - A sitemap is a textfile to describe the major components of your app. Useful if it's huge
 - `robots.txt` tells the crawler which parts of the application are off-limits

Here're some examples:
```html
<meta name="description" content="Game play, news, rankings, tips, and instruction for Simon." />
```
```html
<meta property="og:title" content="Play Simon online" />
<meta property="og:description" content="News, rankings, instruction, and competitive online play for Simon." />
<meta property="og:image" content="https://simon.cs260.click/simon.png" />
```
```yaml
# cs260.com/robots.txt
# Tell Google not to crawl the game play path,
# because it won't be useful in Google Search results.
User-agent: googlebot
Disallow: /play/
```

### Performance and Usability
 - Google cares about speed and usability across devices

### Tools
 - To see how much of your application is being indexed, query google with `site:<domainname>`. That will show if it's displaying any of your pages
 - PageSpeed Insights can help show you how well you're doing in terms of speed, reliability, and SEO
 - Google Search Console will tell you how your application is indexed and why
 - To use Google Search Console, add a DNS `TXT` record on AWS Route 53


## Device APIs
 - Browsers use APIs as features to interact with users. That's how we get location and much other stuff
 - Most devices require users to accept to your application using that API
 - Location API can be used like this:
```jsx
import React from 'react';

export function Location() {
  const [position, updatePosition] = React.useState({ lat: 0, long: 0 });

  React.useEffect(() => {
    console.log('updating pos');
    navigator.geolocation.getCurrentPosition((p) => {
      updatePosition({ lat: p.coords.latitude, long: p.coords.longitude });
    });
  }, []);

  return (
    <div>
      {position.lat !== 0 && (
        <div>
          <h1>Your location</h1>
          <div>Latitude: {position.lat}</div>
          <div>Longitude: {position.long}</div>
          <div>
            <iframe
              title='map'
              width='600'
              height='300'
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${position.long + 0.001},${
                position.lat + 0.001
              },${position.long - 0.001},${position.lat - 0.001}&amp;layer=mapnik`}
            ></iframe>
          </div>
        </div>
      )}
      {position.lat === 0 && <div>Location unknown</div>}
    </div>
  );
}
```

 - Notification API can be useful too. Let's look at that:
```jsx
function Notifier() {
  const [acceptanceState, updateAcceptanceState] = React.useState(Notification.permission);
  const [msg, updateMsg] = React.useState('');

  function register() {
    Notification.requestPermission().then((response) => {
      updateAcceptanceState(response);
    });
  }

  function notify() {
    new Notification('You are notified', {
      body: msg,
    });
    updateMsg('');
  }

  return (
    <div className='component'>
      <p>User's acceptance of notifications: {acceptanceState}</p>
      {acceptanceState === 'default' && <button onClick={() => register()}>Register</button>}
      {acceptanceState === 'granted' && (
        <div>
          <input type='text' value={msg} onChange={(e) => updateMsg(e.target.value)} placeholder='msg here'></input>
          <button disabled={msg === ''} onClick={() => notify()}>
            Notify
          </button>
        </div>
      )}
    </div>
  );
}
```

 - Some other fun APIs are Contact Picker, Bluetooth, and File System


## Progressive Web Application
 - I don't need to know this, but let's learn it anyway
 - We want to have applications that run on everything. Phones, computers, watches
 - Device native applications were the norm for a while, because money, but then they realized we should make universal web apps, called PWA
 - Mobile devices are 60% of internet traffic
 - Many advantages. Uniformity, not worrying about app store, no internet needed
 - Sometimes you still need a Native application. Mainly Apple incompatibility. They're still holding on to some functionality
 - PWA makes it so desktop can have a Native app experience. Very nice, I like

### How to make PWA
 - If you already have responsive design and fallback offline functionality, all you need to add is a manifest to define details for displaying your app and write some JS to implement the service worker API to cache files

#### Manifest
 - Your `manifest.json` file is included in `index.html`
 - Manifest includes settings like how to display it, scope, icons, colors, descriptions, and installation screenshots
Example:
```json
{
  "short_name": "Simon",
  "name": "Simon",
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/maskable_icon.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

#### Service Workers
 - Service Workers allow a web application to do background processing not directly associated with rendering and interaction
 - To register a SW, we call the API with the url to a JS file with your code: `navigator.serviceWorker.register('service-worker.js');`
 - You can see the SW's state on dev tools in the `Application` tab
 - Workbox is an NPM package made by Google for using service workers












