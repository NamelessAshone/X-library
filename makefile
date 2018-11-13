all: todo
.PHONY: all todo

todo:
	@cat /dev/null > ./TODOS
	@echo 'List all Todos in file ./TODOS.' 
	@grep -rn --exclude-dir=node_modules --include=*.js --include=*.jade 'TODO' ./ > ./TODOS