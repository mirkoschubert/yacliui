<h1 align="center">Yet Another CLI UI Library</h1>

<p align="center">
  <a href="https://npmjs.org/package/yacliui">
    <img src="https://img.shields.io/npm/v/yacliui.svg" alt="version" />
  </a>
  <a href="https://npmjs.org/package/yacliui">
    <img src="https://img.shields.io/npm/dm/yacliui.svg" alt="downloads" />
  </a>
</p>

<p align="center">
  <b>A clean UI library in node.js for the command line</b><br />
  <sub><b>Note:</b> This is still work in progress. Please use it with care!</sub>
</p>

---

## Install <!-- omit in toc -->

```bash
npm install yacliui
```

> This package supports Node 8 and above  <!-- omit in toc -->

---

It's a library. So import it into your scripts first:

```js
const ui = require('yacliui')
```

## API Overview <!-- omit in toc -->

* [Messages](#messages)
  * [ui.headline(str, align)](#uiheadlinestr-align)
  * [ui.message(msg, state, showTime)](#uimessagemsg-state-showtime)
  * [ui.info(msg, showTime)](#uiinfomsg-showtime)
  * [ui.warning(msg, showTime)](#uiwarningmsg-showtime)
  * [ui.error(msg, showTime)](#uierrormsg-showtime)
  * [ui.found(num, topic)](#uifoundnum-topic)
  * [ui.foundOf(num1, topic1, num2, topic2)](#uifoundofnum1-topic1-num2-topic2)
* [Lists](#lists)
  * [ui.list(entries, opts)](#uilistentries-opts)
  * [ui.definitionList(entries, opts)](#uidefinitionlistentries-opts)
* [Input](#input)
  * [ui.ask(question, initial)](#uiaskquestion-initial)
  * [ui.confirm(question, initial)](#uiconfirmquestion-initial)

## Messages

> See the [Example Script](examples/messages.js) for more info.

### ui.headline(str, align)

Type: `Function`

Prints a capitalized green headline with alignment

#### str

Type: `String`

The Headline string to show.

#### align

Type: `String`
Default: `left`

You can either use `left`, `center` or `right` for the alignment.

#### Example

```js
ui.headline('Nicely formatted headline')
```

### ui.message(msg, state, showTime)

Type: `Function`

You can print a simple message with or without a **timestamp**, **status string** and **colored status code**.

#### msg

Type: `String`

#### state

Type: `String|Number`

#### showTime

Type: `Boolean`

#### Example

```js
ui.message('Message without anything')
ui.message('Message with time code', true)
ui message('Message with time code and status string', '15ms', true)
ui.message('Message with time code and status code (warning)', 301, true)
```

### ui.info(msg, showTime)

Type: `Function`

Shortcut for an info message in **white** with or without time stamp.

#### Example

```js
ui.info('Info message in white')
```

### ui.warning(msg, showTime)

Type: `Function`

Shortcut for an warning message in **yellow** with or without time stamp.

#### Example

```js
ui.warning('Warning message in yellow')
```

### ui.error(msg, showTime)

Type: `Function`

Shortcut for an error message in **red** with or without time stamp.

#### Example

```js
ui.error('Error message in red', true) // with time stamp
```

### ui.found(num, topic)

Type: `Function`

Shows a message how many items of a specific topic have been found.

Please note that the topic is an array of two strings: The `singular` and the `plural`! This only works in English since the function automatically uses »has been found« or »have been found«.

#### num

Type: `Number`

The number of items.

#### topic

Type: `Array`

An Array of the singular and plural word of the topic, such as:

```js
const topic = ['item', 'items']
```

#### Example

```js
ui.found(1, ['apple', 'apples'])
// Output: 1 apple has been found.
ui.found(6, ['apple', 'apples'])
// Output: 6 apples have been found.
```

### ui.foundOf(num1, topic1, num2, topic2)

Type: `Function`

This function is basically the same as `ui.found()`, but shows how many items of a topic have been found in a number of items in another topic.

The options are the same like in the function above, but twice. You can leave the first topic array empty if you like.

#### Example

```js
ui.foundof(7, [], 10, ['apple', 'apples'])
// Output: 7 of 10 apples have been found.
ui.foundOf(3, ['piece', 'pieces'], 10, ['apple', 'apples'])
// Output: 3 pieces of 10 apples have been found.
```

## Lists

> See the [Example Script](examples/lists.js) for more info.

### ui.list(entries, opts)

Type: `Function`

Show an array as an unordered or ordered list.

#### entries

Type: `Array`

List entries as an array of strings.

#### opts.ordered

Type: `Boolean`
Default: `false`

Show an ordered list instead of an unordered one.

#### Example

```js
ui.list(['first', 'second', 'third'], { ordered: true })
```

### ui.definitionList(entries, opts)

Show a definition list of an array of objects with **term** and **definition**:

#### entries

Type: `Array`

Definition list entries as an array of objects. The objects contain `term` and `definition`:

```js
{
  term: 'UI',
  definition: 'User Interface'
}
```

#### opts.ordered

Type: `Boolean`
Default: `false`

Show an ordered definition list instead of an unordered one. This shows three rows instead of two.

#### opts.padding

Type: `Number`
Default: `2`

Padding between term and definition.

#### Example

```js
ui.definitionList([
  {
    term: 'First term',
    definition: 'First definition'
  },
  {
    term: 'First term',
    definition: 'First definition'
  }
], { padding: 4 })
```

## Input

> See the [Example Script](examples/input.js) for more info.

**Note:** For now I use the popular library [Prompts](https://www.npmjs.com/package/prompts) for the input section. I will code this later myself, so there is not another big dependency.

### ui.ask(question, initial)

Type: `Async Function`
Returns: `String`

Prompts a question and will return either the initial answer or the string the user has put in.

#### question

Type: `String`

The question the user will be asked.

#### initial

Type: `String`

The default value of an answer the user can confirm with <kbd>enter</kbd>.

#### Example

```js
(async () => {
  var answer = await ui.ask('What is your name?', 'Anonymous')
  console.log('Your name is ' + answer + '.')
})()
```

### ui.confirm(question, initial)

Type: `Async Function`
Returns: `Boolean`

Prompts any question the user can answer with `yes` or `no`.

#### question

Type: `String`

The question the user will be asked.

#### initial

Type: `Boolean`

The default value of an answer the user can confirm with <kbd>enter</kbd>.

#### Example

```js
(async () => {
  var pretty = await ui.confirm('Are you pretty?', true)
  if (pretty) {
    console.log('Yes, you are pretty!')
  } else {
    console.log('You are ugly as hell!')
  }
})()
```
