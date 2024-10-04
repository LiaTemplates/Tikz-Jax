<!--
author:   Andre Dietrich

email:    LiaScript@web.de

version:  0.0.1

language: en

narrator: US English Female

comment:  Embedding TikZ diagrams directly into LiaScript courses using the `tikz-jax` library.

script:   dist/index.js

@tikz
<lia-keep>
<tikz-jax>
@0
</tikz-jax>
</lia-keep>
@end


@tikz.picture
<lia-keep>
<tikz-jax>
\begin{tikzpicture}
@0
\end{tikzpicture}
</tikz-jax>
</lia-keep>
@end

@tikz.eval
<script>
console.html(`<tikz-jax>
@'input
</tikz-jax>`)

"LIA: stop"
</script>
@end

@tikz.picture.eval
<script>
console.html(`<tikz-jax>
\\begin{tikzpicture}
@'input
\\end{tikzpicture}
</tikz-jax>`)

"LIA: stop"
</script>
@end

-->

# TikzJax - Template

                         --{{0}}--
A template for including `tikz-jax` diagrams directly into [LiaScript](https://liascript.github.io) courses.
With `tikz-jax`, you can render TikZ diagrams directly in the browser, taking advantage of LaTeX syntax to create complex and high-quality graphics, such as technical illustrations, geometric shapes, and plots, without the need for external rendering tools.
TikZ offers a rich set of features, including the ability to define custom shapes, draw curves, and create intricate patterns and diagrams.
It is widely used in academia and industry for creating figures that need to be integrated with LaTeX documents.
The `tikz-jax` implementation brings the power of TikZ to the web, allowing real-time rendering of diagrams directly in the browser, enhancing the interactive learning experience in LiaScript courses.
This template enables seamless integration of TikZ in LiaScript.

Explore the following resources for more information and documentation:

                          {{0-1}}
* See the official TikZ manual [here...](https://ctan.org/pkg/pgf?lang=en)
* Learn more about `tikz-jax` [here...](https://tikzjax.com)
* See the GitHub version of this document
  [here...](https://github.com/liascript-templates/tikz-jax)
* See the LiaScript version of this document
  [here...](https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md)

                         --{{1}}--
There are three ways to use this template.
The most straightforward approach is to use the `import` statement with the URL of the raw text-file from the master branch or any other specific branch/version.
Alternatively, you can directly copy the necessary code into the header of your Markdown document, as detailed on the [last slide](#implementation).
Finally, you can clone this project and customize it according to your needs.

                           {{1}}
1. Load the macros via

   `import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md`

   to import the latest version, but keep in mind that the API might evolve. To load a specific version, use:

   `import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/blob/0.0.1/README.md`

2. Copy the definitions into your Project

3. Clone this repository on GitHub

## Macros

                            --{{0}}--
There are four macros available:

- `@tikz` - Renders a TikZ diagram directly from code
- `@tikz.picture` - Renders a TikZ diagram directly from code within a `tikzpicture` environment
- `@tikz.eval` - Renders a TikZ diagram directly from an editable code environment
- `@tikz.picture.eval` - Renders a TikZ diagram directly from code within a `tikzpicture` environment and evaluates it

### `@tikz`

                            --{{0}}--
The `@tikz` macro renders a TikZ diagram directly from code.
The code is written in LaTeX and can be used to create complex and high-quality graphics, such as technical illustrations, geometric shapes, and plots.
The `@tikz` macro is useful for creating diagrams that need to be integrated with LaTeX documents.
The code is rendered in the browser using the `tikz-jax` library, which provides real-time rendering of TikZ diagrams.

```` markdown
``` latex  @tikz
\tikzstyle{process} = [rectangle, minimum width=1cm, minimum height=1cm, text centered, draw=black, fill=orange!30]
\tikzstyle{line} = [thick,-,>=stealth]
\tikzstyle{arrow} = [thick,->,>=stealth]

\begin{tikzpicture}[node distance=1.5cm and 1cm]

\node (text1) [xshift=3cm] {How is it done?};
\node (text2) [xshift=18 cm] {Why is it done?};

\draw [arrow] (1cm,-0.5cm) -- (5cm,-0.5cm);
\draw [arrow] (20cm,-0.5cm) -- (17cm,-0.5cm);

\node (pro1) [process,below of=text1, xshift=-1cm] {Output};
\node (pro2) [process,below of=text1, xshift=3 cm] {Main function (1)};
\node (pro3) [process,below of=text1, xshift=7 cm] {Dependent function (1.1)};
\node (pro4) [process, below of=pro3] {Nebenfunktion (1.2)};
\node (pro5) [process, below of=pro3, xshift=4 cm] {Dependent function (1.2.1)};
\node (pro6) [process,below of=text1, xshift=16 cm] {Input};
\node (pro7) [process, below of=pro4, xshift=-4 cm] {Supporting function (2)};
\node (pro8) [process, below of=pro4] {Dependent function (2.1)};
\node (pro9) [process, below of=pro7] {Supporting function (3)};

\draw [line] (pro1) -- (pro2);
\draw [line] (pro2) -- (pro3);
\draw [line] (pro3) -- (pro4);
\draw [line] (pro1) -- (pro2);
\draw [line] (pro4) -- (pro5);
\draw [line] (pro3) -- (pro6);
\draw [line] (pro2) -- (pro7);
\draw [line] (pro7) -- (pro8);
\draw [line] (pro7) -- (pro9);

\end{tikzpicture}
```
````

---

``` latex  @tikz
\tikzstyle{process} = [rectangle, minimum width=1cm, minimum height=1cm, text centered, draw=black, fill=orange!30]
\tikzstyle{line} = [thick,-,>=stealth]
\tikzstyle{arrow} = [thick,->,>=stealth]

\begin{tikzpicture}[node distance=1.5cm and 1cm]

\node (text1) [xshift=3cm] {How is it done?};
\node (text2) [xshift=18 cm] {Why is it done?};

\draw [arrow] (1cm,-0.5cm) -- (5cm,-0.5cm);
\draw [arrow] (20cm,-0.5cm) -- (17cm,-0.5cm);

\node (pro1) [process,below of=text1, xshift=-1cm] {Output};
\node (pro2) [process,below of=text1, xshift=3 cm] {Main function (1)};
\node (pro3) [process,below of=text1, xshift=7 cm] {Dependent function (1.1)};
\node (pro4) [process, below of=pro3] {Nebenfunktion (1.2)};
\node (pro5) [process, below of=pro3, xshift=4 cm] {Dependent function (1.2.1)};
\node (pro6) [process,below of=text1, xshift=16 cm] {Input};
\node (pro7) [process, below of=pro4, xshift=-4 cm] {Supporting function (2)};
\node (pro8) [process, below of=pro4] {Dependent function (2.1)};
\node (pro9) [process, below of=pro7] {Supporting function (3)};

\draw [line] (pro1) -- (pro2);
\draw [line] (pro2) -- (pro3);
\draw [line] (pro3) -- (pro4);
\draw [line] (pro1) -- (pro2);
\draw [line] (pro4) -- (pro5);
\draw [line] (pro3) -- (pro6);
\draw [line] (pro2) -- (pro7);
\draw [line] (pro7) -- (pro8);
\draw [line] (pro7) -- (pro9);

\end{tikzpicture}
```

### `@tikz.picture`

                            --{{0}}--
The `@tikz.picture` macro is a shortcut for rendering a TikZ diagram directly from code within a `tikzpicture` environment.

```` markdown
``` latex  @tikz.picture
\def \n {5}
\def \radius {3cm}
\def \margin {8} % margin in angles, depends on the radius

\foreach \s in {1,...,\n}
{
  \node[draw, circle] at ({360/\n * (\s - 1)}:\radius) {$\s$};
  \draw[->, >=latex] ({360/\n * (\s - 1)+\margin}:\radius) 
    arc ({360/\n * (\s - 1)+\margin}:{360/\n * (\s)-\margin}:\radius);
}
```
````

---

``` latex  @tikz.picture
\def \n {5}
\def \radius {3cm}
\def \margin {8} % margin in angles, depends on the radius

\foreach \s in {1,...,\n}
{
  \node[draw, circle] at ({360/\n * (\s - 1)}:\radius) {$\s$};
  \draw[->, >=latex] ({360/\n * (\s - 1)+\margin}:\radius) 
    arc ({360/\n * (\s - 1)+\margin}:{360/\n * (\s)-\margin}:\radius);
}
```


### `@tikz.eval`

``` latex
\begin{tikzpicture}[domain=0:7,scale=2] 
\draw[very thin,color=gray] (-0.1,-1.5) grid (7,1.5);

\draw[->] (-0.2,0) -- (7.2,0) node[right] {$x$}; \draw[->] (0,-1.2) -- (0,2.2) node[above] {$f(x)$};
\draw[color=blue, samples=150]	plot (\x,{sin(\x r)})	node[right] {$f(x) = \sin x$}; 

\end{tikzpicture}
```
@tikz.eval


### `@tikz.picture.eval`


``` latex
\draw[fill=yellow] (0,0) -- (60:.75cm) arc (60:180:.75cm);
\draw(120:0.4cm) node {$\alpha$};
\draw[fill=green!30] (0,0) -- (right:.75cm) arc (0:60:.75cm);
\draw(30:0.5cm) node {$\beta$};
\begin{scope}[shift={(60:2cm)}]
\draw[fill=green!30] (0,0) -- (180:.75cm) arc (180:240:.75cm);
\draw (30:-0.5cm) node {$\gamma$};
\draw[fill=yellow] (0,0) -- (240:.75cm) arc (240:360:.75cm);
\draw (-60:0.4cm) node {$\delta$};
\end{scope}
\begin{scope}[thick]
\draw (60:-1cm) node[fill=white] {$E$} -- (60:3cm) node[fill=white] {$F$};
\draw[red] (-2,0) node[left] {$A$} -- (3,0) node[right]{$B$};
\draw[blue,shift={(60:2cm)}] (-3,0) node[left] {$C$} -- (2,0) node[right]{$D$};
\draw[shift={(60:1cm)},xshift=4cm]
node [right,text width=6cm,rounded corners,fill=red!20,inner sep=1ex]
{
When we assume that $\color{red}AB$ and $\color{blue}CD$ are
parallel, i.\,e., ${\color{red}AB} \mathbin{\|} \color{blue}CD$,
then $\alpha = \delta$ and $\beta = \gamma$.
};
\end{scope}
```
@tikz.picture.eval
