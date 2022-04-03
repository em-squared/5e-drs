
venv:
	python3 -m venv venv
	./venv/bin/pip install -U pip wheel
	./venv/bin/pip install -r requirements.txt

up:
	docker-compose up -d
	docker ps

down:
	docker-compose down

purge:
	make down
	rm -rf data.ms
	make up

pull:
	docker-compose pull
