# Mark.css

## Intro

This is an example for `mark.css`.

**The theme now has a built-in dark mode support.** Which means the theme changes with your system, and you don't have to manually setup any preferences.

## Examples

> Markdown is a plain text format for writing structured documents, based on conventions for indicating formatting in email and usenet posts. It was developed by John Gruber (with help from Aaron Swartz) and released in 2004 in the form of a syntax description and a Perl script (Markdown.pl) for converting Markdown to HTML.

### Basic writing and formatting syntax

#### Headings

To create a heading, add one to six `#` symbols before your heading text. The number of `#` you use will determine the size of the heading.

```
# The largest heading
## The second largest heading
###### The smallest heading
```

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

### Quoting text

You can quote text with a `>`.

> Text that is not a quote
>
> `> Text that is a quote`

### Quoting code

You can call out code or a command within a sentence with single backticks. The text within the backticks will not be formatted.

Use `git status` to list all new or modified files that haven't yet been committed.

To format code or text into its own distinct block, use triple backticks.

```
git status
git add
git commit
```

### Links

You can create an inline link by wrapping link text in brackets `[ ]`, and then wrapping the URL in parentheses `( )`. For example: [mark.css](https://github.com/sqrthree/markcss.git)

### Images

You can display an image by adding `!` and wrapping the alt text in `[ ]`. Then wrap the link for the image in parentheses `()`.

![Example of Image](https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=1)

#### Lists

You can make an unordered list by preceding one or more lines of text with `-` or `*`.

- George Washington
- John Adams
- Thomas Jefferson

1. James Madison
2. James Monroe
3. John Quincy Adams

You also can create a nested list by indenting one or more list items below another item.

1. First list item
   - First nested list item
     - Second nested list item

And task lists.

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete 🎉

Quoting list:

> - list item
> - list item
> - list item

#### Tables

| foo | bar |
| :-: | :-: |
| baz | bim |

#### Footnotes

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]:
    Every new line should be prefixed with 2 spaces.
    This allows you to have a footnote with multiple lines.

[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.
    This footnote also has been made with a different syntax using 4 spaces for new lines.

#### Line

A line consisting of 0-3 spaces of indentation, followed by a sequence of three or more matching `-`, `_`, or `*` characters.

---

### Reference

- [About writing and formatting on GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)

---

# 中文

## 简介

这是一个针对 `mark.css` 的示例文件。

**本主题内置了对暗黑模式的支持。** 当你的设备系统主题变化时，不需要手动设置即可达到一个与系统适配的风格。

## 示例

> Markdown 是一种用于编写结构化文档的纯文本格式，基于在电子邮件和 usenet 帖子中指示格式的约定。 它由 John Gruber（在 Aaron Swartz 的帮助下）开发，并于 2004 年以语法描述和用于将 Markdown 转换为 HTML 的 Perl 脚本 (Markdown.pl) 的形式发布。

### 基础书写格式和语法

#### 标题

要创建标题，请在标题文本前添加一到六个 `#` 符号。 您使用的 `#` 数将决定标题的大小。

```
# 最大的标题
## 第二大的标题
###### 最小的标题
```

# 标题 1

## 标题 2

### 标题 3

#### 标题 4

##### 标题 5

###### 标题 6

### 引用文字

通过 `>` 来引用一段文字。

> 普通文字
>
> `> 引用文字`

### 引用代码

你可以在带有单个`反引号`的句子中调用代码或命令。 反引号内的文本不会被格式化。

使用 `git status` 列出所有尚未提交的新文件或已修改文件。

要将代码或文本格式化为自己独特的块，请使用三重反引号。

```
git status
git add
git commit
```

### 链接

您可以通过将链接文本括在括号 `[ ]` 中，然后将 URL 括在括号 `( )` 中来创建内联链接。 例如：[mark.css](https://github.com/sqrthree/markcss.git)。

### 图片

你可以通过添加 `!` 并将 alt 文本包装在 `[ ]` 中来显示图像。 然后将图像的链接包裹在括号 `()` 中。

![Example of Image](https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=1)

### 列表

通过在一行或多行文本前面加上 `-` 或 `*` 来创建一个无序列表。

- 客户端开发真有趣
- 客户端开发真有趣
- 客户端开发真有趣

1. 服务端开发也有趣
2. 服务端开发也有趣
3. 服务端开发也有趣

还可以通过在另一项下方缩进一个或多个列表项来创建嵌套列表。

1. 第一个列表
   - 第一个嵌套的列表
     - 第二个嵌套的列表

还有任务列表：

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] 完成所有任务后为体验增添乐趣 🎉

#### 表格

| 表头 1 | 表头 2 |
| :----: | :----: |
| 表项 1 | 表项 2 |
| 表项 3 | 表项 4 |

#### 脚注

这是一个简单的脚注[^4]。

一个脚注也可以有多行[^5]。

你也可以使用文字，更贴合你的写作风格[^note-cn]。

[^4]: 参考文献。
[^5]:
    每个新行都应以 2 个空格作为前缀。
    这允许你有一个多行的脚注。

[^note-cn]:
    命名脚注仍将使用数字而不是文本呈现，但更容易识别和链接。
    这个脚注也使用了不同的语法，使用 4 个空格作为新行。

#### 分割线

一行由 0-3 个缩进空格组成，后跟三个或更多匹配的 `-`、 `_` 或 `*` 字符序列。

---

### 参考资料

- [About writing and formatting on GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
