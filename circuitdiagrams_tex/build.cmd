set file= "current_divider"
pdflatex %file%.tex
pdftoppm -png %file%.pdf > %file%.png
del *.bak
del *.aux
del *.bbl
del *.blg
del *.log