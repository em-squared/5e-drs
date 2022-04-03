
venv:
	python3 -m venv venv
	./venv/bin/pip install -U pip wheel
	./venv/bin/pip install -r requirements.txt

up:
	docker-compose up -d
	docker ps

pull:
	docker-compose pull
