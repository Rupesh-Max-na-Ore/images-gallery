FROM python:3.13

WORKDIR /app

EXPOSE 5050


# Install pipenv and dependencies
COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
# RUN pipenv lock --requirements > requirements.txt #old
RUN pipenv requirements > requirements.txt

RUN pip install -r requirements.txt

# Copy the rest of the app
COPY . ./
# Run the app
CMD ["python", "main.py"]