#!/usr/bin/env bash
# Exit on any error
set -o errexit

# Install Python dependencies
pip install -r requirements.txt

# Run database migrations (if using Django)
python manage.py migrate

# (Optional) Collect static files (if using Django)
python manage.py collectstatic --noinput